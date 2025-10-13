import { ComponentOptionsMixin } from 'vue'

// @vue/component
const mixin: ComponentOptionsMixin = {
  methods: {
    show(...args: any[]) {
      return this.$refs.popper.show(...args)
    },
    hide(...args: any[]) {
      return this.$refs.popper.hide(...args)
    },
    dispose(...args: any[]) {
      return this.$refs.popper.dispose(...args)
    },
    onResize(...args: any[]) {
      return this.$refs.popper.onResize(...args)
    },
  },
}

export default mixin
