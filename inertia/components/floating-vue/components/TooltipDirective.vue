<template>
  <Popper ref="popper" v-slot="{
    popperId,
    isShown,
    shouldMountContent,
    skipTransition,
    autoHide,
    hide,
    handleResize,
    onResize,
    classes,
    result,
  }" v-bind="$attrs" :theme="theme" :target-nodes="targetNodes" :popper-node="() => ($refs as any).popperContent.$el"
    @apply-show="onShow" @apply-hide="onHide">
    <PopperContent ref="popperContent" :class="{
      'v-popper--tooltip-loading': loading,
    }" :popper-id="popperId" :theme="theme" :shown="isShown" :mounted="shouldMountContent"
      :skip-transition="skipTransition" :auto-hide="autoHide" :handle-resize="handleResize" :classes="classes"
      :result="result" @hide="hide" @resize="onResize">
      <div v-if="html" v-html="finalContent" />
      <div v-else v-text="finalContent" />
    </PopperContent>
  </Popper>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Popper from './Popper'
import PopperContent from './PopperContent.vue'
import { getDefaultConfig } from '../config'
import PopperMethods from './PopperMethods'

export default defineComponent({
  name: 'VTooltipDirective',

  components: {
    Popper: Popper(),
    PopperContent,
  },

  mixins: [
    PopperMethods,
  ],

  inheritAttrs: false,

  props: {
    theme: {
      type: String,
      default: 'tooltip',
    },

    html: {
      type: Boolean,
      default: (props: any) => getDefaultConfig(props.theme, 'html'),
    },

    content: {
      type: [String, Number, Function],
      default: null,
    },

    loadingContent: {
      type: String,
      default: (props: any) => getDefaultConfig(props.theme, 'loadingContent'),
    },

    targetNodes: {
      type: Function,
      required: true,
    },
  },

  data(): { asyncContent: string | null, _isShown: boolean, _loading: boolean } {
    return {
      asyncContent: null,
      _isShown: false,
      _loading: false,
    }
  },

  computed: {
    isContentAsync(): boolean {
      return typeof this.content === 'function'
    },

    loading(): boolean {
      return this.isContentAsync && this.asyncContent == null
    },

    finalContent(): string | number | Function {
      if (this.isContentAsync) {
        if (this.loading)
          return this.loadingContent

        return this.asyncContent || ""
      }
      return this.content
    },
  },

  watch: {
    content: {
      handler() {
        this.fetchContent(true)
      },
      immediate: true,
    },

    async finalContent() {
      await this.$nextTick()
      const popper = this.$refs.popper as any;
      popper.onResize()
    },
  },

  created() {
    (this as any).$_fetchId = 0
  },

  methods: {
    fetchContent(force: boolean = false) {
      if (typeof this.content === 'function' && this._isShown &&
        (force || (!this._loading && this.asyncContent == null))) {
        this.asyncContent = null
        this._loading = true
        const fetchId = ++(this as any).$_fetchId
        const result = this.content(this)
        if (result.then) {
          result.then((res: any) => this.onResult(fetchId, res))
        } else {
          this.onResult(fetchId, result)
        }
      }
    },

    onResult(fetchId: number, result: string) {
      if (fetchId !== (this as any).$_fetchId) return
      this._loading = false
      this.asyncContent = result
    },

    onShow() {
      this._isShown = true
      this.fetchContent()
    },

    onHide() {
      this._isShown = false
    },
  },
})
</script>
