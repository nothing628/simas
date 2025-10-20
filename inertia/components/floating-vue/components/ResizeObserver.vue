<template>
    <div class="resize-observer" tabindex="-1" />
</template>

<script lang="ts">

import { getInternetExplorerVersion } from '../util/compatibility'

let isIE: boolean

function initCompat() {
    const initCompatAny = initCompat as any
    if (!initCompatAny.init) {
        initCompatAny.init = true
        isIE = getInternetExplorerVersion() !== -1
    }
}

export default {
    name: 'ResizeObserver',

    props: {
        emitOnMount: {
            type: Boolean,
            default: false,
        },

        ignoreWidth: {
            type: Boolean,
            default: false,
        },

        ignoreHeight: {
            type: Boolean,
            default: false,
        },
    },

    mounted() {
        initCompat()
        this.$nextTick(() => {
            const thisAsAny = this as any
            thisAsAny._w = this.$el.offsetWidth
            thisAsAny._h = this.$el.offsetHeight
            if (this.emitOnMount) {
                this.emitSize()
            }
        })
        const object = document.createElement('object')
        const thisAsAny = this as any

        thisAsAny._resizeObject = object
        object.setAttribute('aria-hidden', 'true')
        object.setAttribute('tabindex', "-1")
        object.onload = this.addResizeHandlers
        object.type = 'text/html'
        if (isIE) {
            this.$el.appendChild(object)
        }
        object.data = 'about:blank'
        if (!isIE) {
            this.$el.appendChild(object)
        }
    },

    beforeDestroy() {
        this.removeResizeHandlers()
    },

    methods: {
        compareAndNotify() {
            const thisAsAny = this as any
            if ((!this.ignoreWidth && thisAsAny._w !== this.$el.offsetWidth) || (!this.ignoreHeight && thisAsAny._h !== this.$el.offsetHeight)) {
                thisAsAny._w = this.$el.offsetWidth
                thisAsAny._h = this.$el.offsetHeight
                this.emitSize()
            }
        },

        emitSize() {
            const thisAsAny = this as any
            this.$emit('notify', {
                width: thisAsAny._w,
                height: thisAsAny._h,
            })
        },

        addResizeHandlers() {
            const thisAsAny = this as any
            thisAsAny._resizeObject.contentDocument.defaultView.addEventListener('resize', this.compareAndNotify)
            this.compareAndNotify()
        },

        removeResizeHandlers() {
            const thisAsAny = this as any
            if (thisAsAny._resizeObject && thisAsAny._resizeObject.onload) {
                if (!isIE && thisAsAny._resizeObject.contentDocument) {
                    thisAsAny._resizeObject.contentDocument.defaultView.removeEventListener('resize', this.compareAndNotify)
                }
                this.$el.removeChild(thisAsAny._resizeObject)
                thisAsAny._resizeObject.onload = null
                thisAsAny._resizeObject = null
            }
        },
    },
}
</script>

<style scoped>
.resize-observer {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    border: none;
    background-color: transparent;
    pointer-events: none;
    display: block;
    overflow: hidden;
    opacity: 0;
}

.resize-observer>>>object {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    pointer-events: none;
    z-index: -1;
}
</style>
