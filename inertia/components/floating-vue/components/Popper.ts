import { defineComponent } from 'vue'
import {
  autoPlacement,
  computePosition,
  offset,
  shift,
  flip,
  arrow,
  getOverflowAncestors,
  size,
  Strategy,
  Middleware,
  Alignment,
  Placement as BasePlacement,
  Padding,
  Boundary,
} from '@floating-ui/dom'
import { supportsPassive, isIOS } from '../util/env'
import { placements, Placement } from '../util/popper'
import { SHOW_EVENT_MAP, HIDE_EVENT_MAP } from '../util/events'
import { removeFromArray } from '../util/lang'
import { nextFrame } from '../util/frame'
import { getDefaultConfig, getAllParentThemes, config } from '../config'

export type ComputePositionConfig = Parameters<typeof computePosition>[2]

interface PopperEvent extends Event {
  usedByTooltip?: boolean
  closeAllPopover?: boolean
  closePopover?: boolean
}

const shownPoppers: PopperInstance[] = []
let hidingPopper: any = null

const shownPoppersByTheme: Record<string, PopperInstance[]> = {}
function getShownPoppersByTheme(theme: string) {
  let list = shownPoppersByTheme[theme]
  if (!list) {
    list = shownPoppersByTheme[theme] = []
  }
  return list
}

let Element: any = function () {}
if (typeof window !== 'undefined') {
  Element = window.Element
}

function defaultPropFactory(prop: string) {
  return function (props: any) {
    return getDefaultConfig(props.theme, prop)
  }
}

const PROVIDE_KEY = '__floating-vue__popper'

const createPopper = () =>
  defineComponent({
    name: 'VPopper',

    provide() {
      return {
        [PROVIDE_KEY]: {
          parentPopper: this,
        },
      }
    },

    inject: {
      [PROVIDE_KEY]: { default: null },
    },

    props: {
      theme: {
        type: String,
        required: true,
      },

      targetNodes: {
        type: Function,
        required: true,
      },

      referenceNode: {
        type: Function,
        default: null,
      },

      popperNode: {
        type: Function,
        required: true,
      },

      shown: {
        type: Boolean,
        default: false,
      },

      showGroup: {
        type: String,
        default: null,
      },

      // eslint-disable-next-line vue/require-prop-types
      ariaId: {
        default: null,
      },

      disabled: {
        type: Boolean,
        default: defaultPropFactory('disabled'),
      },

      positioningDisabled: {
        type: Boolean,
        default: defaultPropFactory('positioningDisabled'),
      },

      placement: {
        type: String,
        default: defaultPropFactory('placement'),
        validator: (value: Placement) => placements.includes(value),
      },

      delay: {
        type: [String, Number, Object],
        default: defaultPropFactory('delay'),
      },

      distance: {
        type: [Number, String],
        default: defaultPropFactory('distance'),
      },

      skidding: {
        type: [Number, String],
        default: defaultPropFactory('skidding'),
      },

      triggers: {
        type: Array,
        default: defaultPropFactory('triggers'),
      },

      showTriggers: {
        type: [Array, Function],
        default: defaultPropFactory('showTriggers'),
      },

      hideTriggers: {
        type: [Array, Function],
        default: defaultPropFactory('hideTriggers'),
      },

      popperTriggers: {
        type: Array,
        default: defaultPropFactory('popperTriggers'),
      },

      popperShowTriggers: {
        type: [Array, Function],
        default: defaultPropFactory('popperShowTriggers'),
      },

      popperHideTriggers: {
        type: [Array, Function],
        default: defaultPropFactory('popperHideTriggers'),
      },

      container: {
        type: [String, Object, Element, Boolean],
        default: defaultPropFactory('container'),
      },

      boundary: {
        type: [String, Element],
        default: defaultPropFactory('boundary'),
      },

      strategy: {
        type: String,
        validator: (value: string) => ['absolute', 'fixed'].includes(value),
        default: defaultPropFactory('strategy'),
      },

      autoHide: {
        type: [Boolean, Function],
        default: defaultPropFactory('autoHide'),
      },

      handleResize: {
        type: Boolean,
        default: defaultPropFactory('handleResize'),
      },

      instantMove: {
        type: Boolean,
        default: defaultPropFactory('instantMove'),
      },

      eagerMount: {
        type: Boolean,
        default: defaultPropFactory('eagerMount'),
      },

      popperClass: {
        type: [String, Array, Object],
        default: defaultPropFactory('popperClass'),
      },

      computeTransformOrigin: {
        type: Boolean,
        default: defaultPropFactory('computeTransformOrigin'),
      },

      /**
       * @deprecated
       */
      autoMinSize: {
        type: Boolean,
        default: defaultPropFactory('autoMinSize'),
      },

      autoSize: {
        type: [Boolean, String],
        default: defaultPropFactory('autoSize'),
      },

      /**
       * @deprecated
       */
      autoMaxSize: {
        type: Boolean,
        default: defaultPropFactory('autoMaxSize'),
      },

      autoBoundaryMaxSize: {
        type: Boolean,
        default: defaultPropFactory('autoBoundaryMaxSize'),
      },

      preventOverflow: {
        type: Boolean,
        default: defaultPropFactory('preventOverflow'),
      },

      overflowPadding: {
        type: [Number, String],
        default: defaultPropFactory('overflowPadding'),
      },

      arrowPadding: {
        type: [Number, String],
        default: defaultPropFactory('arrowPadding'),
      },

      arrowOverflow: {
        type: Boolean,
        default: defaultPropFactory('arrowOverflow'),
      },

      flip: {
        type: Boolean,
        default: defaultPropFactory('flip'),
      },

      shift: {
        type: Boolean,
        default: defaultPropFactory('shift'),
      },

      shiftCrossAxis: {
        type: Boolean,
        default: defaultPropFactory('shiftCrossAxis'),
      },

      noAutoFocus: {
        type: Boolean,
        default: defaultPropFactory('noAutoFocus'),
      },

      disposeTimeout: {
        type: Number,
        default: defaultPropFactory('disposeTimeout'),
      },
    },

    emits: {
      'show': () => true,
      'hide': () => true,
      'update:shown': (_shown: boolean) => true,
      'apply-show': () => true,
      'apply-hide': () => true,
      'close-group': () => true,
      'close-directive': () => true,
      'auto-hide': () => true,
      'resize': () => true,
    },

    data() {
      return {
        isShown: false,
        isMounted: false,
        skipTransition: false,
        classes: {
          showFrom: false,
          showTo: false,
          hideFrom: false,
          hideTo: true,
        },
        result: {
          x: 0,
          y: 0,
          placement: '',
          strategy: this.strategy,
          arrow: {
            x: 0,
            y: 0,
            centerOffset: 0,
          },
          transformOrigin: null,
        },
        randomId: `popper_${[Math.random(), Date.now()].map((n) => n.toString(36).substring(2, 10)).join('_')}`,
        shownChildren: new Set(),
        lastAutoHide: true,
        pendingHide: false,
        containsGlobalTarget: false,
        isDisposed: true,
        mouseDownContains: false,
      }
    },

    computed: {
      popperId() {
        return this.ariaId != null ? this.ariaId : this.randomId
      },

      shouldMountContent() {
        return this.eagerMount || this.isMounted
      },

      slotData() {
        return {
          popperId: this.popperId,
          isShown: this.isShown,
          shouldMountContent: this.shouldMountContent,
          skipTransition: this.skipTransition,
          autoHide: typeof this.autoHide === 'function' ? this.lastAutoHide : this.autoHide,
          show: this.show,
          hide: this.hide,
          handleResize: this.handleResize,
          onResize: this.onResize,
          classes: {
            ...this.classes,
            popperClass: this.popperClass,
          },
          result: this.positioningDisabled ? null : this.result,
          attrs: this.$attrs,
        }
      },

      parentPopper() {
        const thisAsAny = this as any
        return thisAsAny[PROVIDE_KEY]?.parentPopper
      },

      hasPopperShowTriggerHover() {
        const popperTriggersHover = this.popperTriggers?.includes('hover')
        const popperShowTriggers =
          typeof this.popperShowTriggers == 'function'
            ? false
            : this.popperShowTriggers?.includes('hover')
        return popperTriggersHover || popperShowTriggers
      },
    },

    watch: {
      shown: '$_autoShowHide',

      disabled(value) {
        if (value) {
          this.dispose()
        } else {
          this.init()
        }
      },

      async container() {
        if (this.isShown) {
          this.$_ensureTeleport()
          await this.$_computePosition()
        }
      },

      triggers: {
        handler: '$_refreshListeners',
        deep: true,
      },

      positioningDisabled: '$_refreshListeners',

      ...[
        'placement',
        'distance',
        'skidding',
        'boundary',
        'strategy',
        'overflowPadding',
        'arrowPadding',
        'preventOverflow',
        'shift',
        'shiftCrossAxis',
        'flip',
      ].reduce(
        (acc, prop) => {
          acc[prop] = '$_computePosition'
          return acc
        },
        {} as Record<string, any>
      ),
    },

    created() {
      if (this.autoMinSize) {
        console.warn(
          '[floating-vue] `autoMinSize` option is deprecated. Use `autoSize="min"` instead.'
        )
      }
      if (this.autoMaxSize) {
        console.warn(
          '[floating-vue] `autoMaxSize` option is deprecated. Use `autoBoundaryMaxSize` instead.'
        )
      }
    },

    mounted() {
      this.init()
      this.$_detachPopperNode()
    },

    activated() {
      this.$_autoShowHide()
    },

    deactivated() {
      this.hide()
    },

    beforeUnmount() {
      this.dispose()
    },

    methods: {
      show({
        event = null,
        skipDelay = false,
        force = false,
      }: { event?: PopperEvent | null; skipDelay?: boolean; force?: boolean } = {}) {
        if (this.parentPopper?.lockedChild && this.parentPopper.lockedChild !== this) return

        this.pendingHide = false
        if (force || !this.disabled) {
          if (this.parentPopper?.lockedChild === this) {
            this.parentPopper.lockedChild = null
          }

          this.$_scheduleShow(event, skipDelay)
          this.$emit('show')

          // Prevent hiding with global handler
          const thisAsAny = this as any
          thisAsAny.$_showFrameLocked = true
          requestAnimationFrame(() => {
            thisAsAny.$_showFrameLocked = false
          })
        }
        this.$emit('update:shown', true)
      },

      hide({
        event = null,
        skipDelay = false,
      }: { event?: PopperEvent | null; skipDelay?: boolean } = {}) {
        const thisAsAny = this as any
        if (thisAsAny.$_hideInProgress) return

        // Abort if child is shown
        if (this.shownChildren.size > 0) {
          this.pendingHide = true
          return
        }

        // Abort if aiming for the popper
        if (this.hasPopperShowTriggerHover && this.$_isAimingPopper()) {
          if (this.parentPopper) {
            this.parentPopper.lockedChild = this
            clearTimeout(this.parentPopper.lockedChildTimer)
            this.parentPopper.lockedChildTimer = setTimeout(() => {
              if (this.parentPopper.lockedChild === this) {
                this.parentPopper.lockedChild.hide({ skipDelay })
                this.parentPopper.lockedChild = null
              }
            }, 1000)
          }
          return
        }
        if (this.parentPopper?.lockedChild === this) {
          this.parentPopper.lockedChild = null
        }

        this.pendingHide = false
        this.$_scheduleHide(event, skipDelay)

        this.$emit('hide')
        this.$emit('update:shown', false)
      },

      init() {
        if (!this.isDisposed) return
        this.isDisposed = false
        this.isMounted = false

        const thisAsAny = this as any
        thisAsAny.$_events = []
        thisAsAny.$_preventShow = false

        // Nodes
        thisAsAny.$_referenceNode = this.referenceNode?.() ?? this.$el
        thisAsAny.$_targetNodes = this.targetNodes().filter((e: any) => e.nodeType === e.ELEMENT_NODE)
        thisAsAny.$_popperNode = this.popperNode()
        thisAsAny.$_innerNode = thisAsAny.$_popperNode.querySelector('.v-popper__inner')
        thisAsAny.$_arrowNode = thisAsAny.$_popperNode.querySelector('.v-popper__arrow-container')

        this.$_swapTargetAttrs('title', 'data-original-title')

        this.$_detachPopperNode()

        if (this.triggers.length) {
          this.$_addEventListeners()
        }

        if (this.shown) {
          this.show()
        }
      },

      dispose() {
        if (this.isDisposed) return
        this.isDisposed = true
        this.$_removeEventListeners()
        this.hide({ skipDelay: true })
        this.$_detachPopperNode()

        this.isMounted = false
        this.isShown = false

        this.$_updateParentShownChildren(false)

        this.$_swapTargetAttrs('data-original-title', 'title')
      },

      async onResize() {
        if (this.isShown) {
          await this.$_computePosition()
          this.$emit('resize')
        }
      },

      async $_computePosition() {
        if (this.isDisposed || this.positioningDisabled) return

        const thisAsAny = this as any
        const options: ComputePositionConfig = {
          strategy: this.strategy as Strategy,
          middleware: [],
        }

        // Offset
        if (this.distance || this.skidding) {
          const optionMiddleware = options.middleware as Array<Middleware>
          optionMiddleware.push(
            offset({
              mainAxis:
                typeof this.distance == 'string' ? parseFloat(this.distance) : this.distance,
              crossAxis:
                typeof this.skidding == 'string' ? parseFloat(this.skidding) : this.skidding,
            })
          )
        }

        // Placement
        const isPlacementAuto = this.placement.startsWith('auto')
        const optionMiddleware = options.middleware as Array<Middleware>
        if (isPlacementAuto) {
          optionMiddleware.push(
            autoPlacement({
              alignment: (this.placement.split('-')[1] as Alignment | null) ?? null,
            })
          )
        } else {
          options.placement = this.placement as BasePlacement
        }

        if (this.preventOverflow) {
          // Shift
          if (this.shift) {
            optionMiddleware.push(
              shift({
                padding: this.overflowPadding as Padding,
                boundary: this.boundary as unknown as Boundary,
                crossAxis: this.shiftCrossAxis,
              })
            )
          }

          // Flip
          if (!isPlacementAuto && this.flip) {
            optionMiddleware.push(
              flip({
                padding: this.overflowPadding as Padding,
                boundary: this.boundary as unknown as Boundary,
              })
            )
          }
        }

        // Arrow
        optionMiddleware.push(
          arrow({
            element: thisAsAny.$_arrowNode,
            padding: this.arrowPadding as Padding,
          })
        )

        // Arrow overflow
        if (this.arrowOverflow) {
          optionMiddleware.push({
            name: 'arrowOverflow',
            fn: ({ placement, rects, middlewareData }) => {
              let overflow: boolean
              let centerOffset = 0

              if (middlewareData.arrow) {
                centerOffset = middlewareData.centerOffset
              }

              if (placement.startsWith('top') || placement.startsWith('bottom')) {
                overflow = Math.abs(centerOffset) > rects.reference.width / 2
              } else {
                overflow = Math.abs(centerOffset) > rects.reference.height / 2
              }
              return {
                data: {
                  overflow,
                },
              }
            },
          })
        }

        // Auto min size for the popper inner
        if (this.autoMinSize || this.autoSize) {
          const autoSize = this.autoSize ? this.autoSize : this.autoMinSize ? 'min' : null
          optionMiddleware.push({
            name: 'autoSize',
            fn: ({ rects, placement, middlewareData }) => {
              if (middlewareData.autoSize?.skip) {
                return {}
              }
              let width: number | null = null
              let height: number | null = null
              if (placement.startsWith('top') || placement.startsWith('bottom')) {
                width = rects.reference.width
              } else {
                height = rects.reference.height
              }
              // Apply and re-compute
              thisAsAny.$_innerNode.style[
                autoSize === 'min' ? 'minWidth' : autoSize === 'max' ? 'maxWidth' : 'width'
              ] = width != null ? `${width}px` : null
              thisAsAny.$_innerNode.style[
                autoSize === 'min' ? 'minHeight' : autoSize === 'max' ? 'maxHeight' : 'height'
              ] = height != null ? `${height}px` : null
              return {
                data: {
                  skip: true,
                },
                reset: {
                  rects: true,
                },
              }
            },
          })
        }

        // Auto max size for the popper inner
        if (this.autoMaxSize || this.autoBoundaryMaxSize) {
          // Reset size to bestFit strategy can apply
          thisAsAny.$_innerNode.style.maxWidth = null
          thisAsAny.$_innerNode.style.maxHeight = null

          optionMiddleware.push(
            size({
              boundary: this.boundary as unknown as Boundary,
              padding: this.overflowPadding as Padding,
              apply: ({ availableWidth, availableHeight }) => {
                // Apply and re-compute
                thisAsAny.$_innerNode.style.maxWidth =
                  availableWidth != null ? `${availableWidth}px` : null
                thisAsAny.$_innerNode.style.maxHeight =
                  availableHeight != null ? `${availableHeight}px` : null
              },
            })
          )
        }

        const data = await computePosition(
          thisAsAny.$_referenceNode,
          thisAsAny.$_popperNode,
          options
        )

        Object.assign(this.result, {
          x: data.x,
          y: data.y,
          placement: data.placement,
          strategy: data.strategy,
          arrow: {
            ...data.middlewareData.arrow,
            ...data.middlewareData.arrowOverflow,
          },
        })
      },

      $_scheduleShow(_event: PopperEvent | null, skipDelay = false) {
        const thisAsAny = this as any
        this.$_updateParentShownChildren(true)
        thisAsAny.$_hideInProgress = false
        clearTimeout(thisAsAny.$_scheduleTimer)

        if (
          hidingPopper &&
          this.instantMove &&
          hidingPopper.instantMove &&
          hidingPopper !== this.parentPopper
        ) {
          hidingPopper.$_applyHide(true)
          this.$_applyShow(true)
          return
        }

        if (skipDelay) {
          this.$_applyShow()
        } else {
          thisAsAny.$_scheduleTimer = setTimeout(
            this.$_applyShow.bind(this),
            this.$_computeDelay('show')
          )
        }
      },

      $_scheduleHide(_event: PopperEvent | null, skipDelay = false) {
        const thisAsAny = this as any
        if (this.shownChildren.size > 0) {
          this.pendingHide = true
          return
        }
        this.$_updateParentShownChildren(false)
        thisAsAny.$_hideInProgress = true
        clearTimeout(thisAsAny.$_scheduleTimer)

        if (this.isShown) {
          // eslint-disable-next-line @typescript-eslint/no-this-alias
          hidingPopper = this
        }

        if (skipDelay) {
          this.$_applyHide()
        } else {
          thisAsAny.$_scheduleTimer = setTimeout(
            this.$_applyHide.bind(this),
            this.$_computeDelay('hide')
          )
        }
      },

      $_computeDelay(type: 'show' | 'hide') {
        const delay = this.delay
        if (typeof delay == 'object') return parseInt(delay[type] || '0')
        if (typeof delay == 'string') return parseInt(delay || '0')

        return delay
      },

      async $_applyShow(skipTransition = false) {
        const thisAsAny = this as any
        clearTimeout(thisAsAny.$_disposeTimer)
        clearTimeout(thisAsAny.$_scheduleTimer)
        this.skipTransition = skipTransition

        // Already shown
        if (this.isShown) {
          return
        }

        this.$_ensureTeleport()
        await nextFrame()
        await this.$_computePosition()
        await this.$_applyShowEffect()

        // Scroll
        if (!this.positioningDisabled) {
          const _referenceNode = getOverflowAncestors(thisAsAny.$_referenceNode) as Element[]
          const _popperNode = getOverflowAncestors(thisAsAny.$_popperNode) as Element[]
          this.$_registerEventListeners([..._referenceNode, ..._popperNode], 'scroll', () => {
            this.$_computePosition()
          })
        }
      },

      async $_applyShowEffect() {
        const thisAsAny = this as any
        if (thisAsAny.$_hideInProgress) return

        // Advanced animations
        if (this.computeTransformOrigin) {
          const bounds = thisAsAny.$_referenceNode.getBoundingClientRect()
          const popperWrapper = thisAsAny.$_popperNode.querySelector('.v-popper__wrapper')
          const parentBounds = popperWrapper.parentNode.getBoundingClientRect()
          const x = bounds.x + bounds.width / 2 - (parentBounds.left + popperWrapper.offsetLeft)
          const y = bounds.y + bounds.height / 2 - (parentBounds.top + popperWrapper.offsetTop)
          thisAsAny.result.transformOrigin = `${x}px ${y}px`
        }

        this.isShown = true

        this.$_applyAttrsToTarget({
          'aria-describedby': this.popperId,
          'data-popper-shown': '',
        })

        const showGroup = this.showGroup
        if (showGroup) {
          let popover
          for (let i = 0; i < shownPoppers.length; i++) {
            popover = shownPoppers[i]
            if (popover.showGroup !== showGroup) {
              popover.hide()
              popover.$emit('close-group')
            }
          }
        }

        shownPoppers.push(thisAsAny)
        document.body.classList.add('v-popper--some-open')
        for (const theme of getAllParentThemes(this.theme)) {
          getShownPoppersByTheme(theme).push(thisAsAny)
          document.body.classList.add(`v-popper--some-open--${theme}`)
        }

        this.$emit('apply-show')

        // Advanced classes
        this.classes.showFrom = true
        this.classes.showTo = false
        this.classes.hideFrom = false
        this.classes.hideTo = false
        await nextFrame()
        this.classes.showFrom = false
        this.classes.showTo = true
        if (!this.noAutoFocus) thisAsAny.$_popperNode.focus()
      },

      async $_applyHide(skipTransition = false) {
        const thisAsAny = this as any
        if (this.shownChildren.size > 0) {
          this.pendingHide = true
          thisAsAny.$_hideInProgress = false
          return
        }
        clearTimeout(thisAsAny.$_scheduleTimer)

        // Already hidden
        if (!this.isShown) {
          return
        }

        this.skipTransition = skipTransition
        removeFromArray(shownPoppers, this)
        if (shownPoppers.length === 0) {
          document.body.classList.remove('v-popper--some-open')
        }
        for (const theme of getAllParentThemes(this.theme)) {
          const list = getShownPoppersByTheme(theme)
          removeFromArray(list, this)
          if (list.length === 0) {
            document.body.classList.remove(`v-popper--some-open--${theme}`)
          }
        }

        if (hidingPopper === this) {
          hidingPopper = null
        }

        this.isShown = false

        this.$_applyAttrsToTarget({
          'aria-describedby': undefined,
          'data-popper-shown': undefined,
        })

        clearTimeout(thisAsAny.$_disposeTimer)
        const disposeTime = this.disposeTimeout
        if (disposeTime !== null) {
          thisAsAny.$_disposeTimer = setTimeout(() => {
            if (thisAsAny.$_popperNode) {
              // Don't remove popper instance, just the HTML element
              this.$_detachPopperNode()
              this.isMounted = false
            }
          }, disposeTime)
        }

        this.$_removeEventListeners('scroll')

        this.$emit('apply-hide')

        // Advanced classes
        this.classes.showFrom = false
        this.classes.showTo = false
        this.classes.hideFrom = true
        this.classes.hideTo = false
        await nextFrame()
        this.classes.hideFrom = false
        this.classes.hideTo = true
      },

      $_autoShowHide() {
        if (this.shown) {
          this.show()
        } else {
          this.hide()
        }
      },

      $_ensureTeleport() {
        if (this.isDisposed) return

        const thisAsAny = this as any
        let container: any = this.container
        // if container is a query, get the relative element
        if (typeof container === 'string') {
          container = window.document.querySelector(container)
        } else if (typeof container == 'boolean' && container === false) {
          // if container is `false`, set it to reference parent
          container = thisAsAny.$_targetNodes[0].parentNode
        }

        if (!container) {
          throw new Error('No container for popover: ' + this.container)
        }

        container.appendChild(thisAsAny.$_popperNode)
        this.isMounted = true
      },

      $_addEventListeners() {
        // Add trigger show events
        const thisAsAny = this as any
        const handleShow = (event: PopperEvent) => {
          if (this.isShown && !thisAsAny.$_hideInProgress) {
            return
          }
          event.usedByTooltip = true
          // Prevent open on mobile touch in global close
          !thisAsAny.$_preventShow && this.show({ event })
        }

        this.$_registerTriggerListeners(
          thisAsAny.$_targetNodes,
          SHOW_EVENT_MAP,
          this.triggers,
          this.showTriggers,
          handleShow
        )
        this.$_registerTriggerListeners(
          [thisAsAny.$_popperNode],
          SHOW_EVENT_MAP,
          this.popperTriggers,
          this.popperShowTriggers,
          handleShow
        )

        // Add trigger hide events

        const handleHide = (event: PopperEvent) => {
          if (event.usedByTooltip) {
            return
          }
          this.hide({ event })
        }

        this.$_registerTriggerListeners(
          thisAsAny.$_targetNodes,
          HIDE_EVENT_MAP,
          this.triggers,
          this.hideTriggers,
          handleHide
        )
        this.$_registerTriggerListeners(
          [thisAsAny.$_popperNode],
          HIDE_EVENT_MAP,
          this.popperTriggers,
          this.popperHideTriggers,
          handleHide
        )
      },

      $_registerEventListeners(
        targetNodes: Element[],
        eventType: string,
        handler: (event: Event) => void
      ) {
        const thisAsAny = this as any
        thisAsAny.$_events.push({ targetNodes, eventType, handler })
        targetNodes.forEach((node) =>
          node.addEventListener(
            eventType,
            handler,
            supportsPassive
              ? {
                  passive: true,
                }
              : undefined
          )
        )
      },

      $_registerTriggerListeners(
        targetNodes: Element[],
        eventMap: Record<string, string>,
        commonTriggers: unknown[],
        customTrigger: Function | unknown,
        handler: (event: Event) => void
      ) {
        let triggers = commonTriggers

        if (customTrigger != null) {
          triggers = typeof customTrigger === 'function' ? customTrigger(triggers) : customTrigger
        }

        triggers.forEach((trigger) => {
          const eventType = eventMap[trigger as string]
          if (eventType) {
            this.$_registerEventListeners(targetNodes, eventType, handler)
          }
        })
      },

      $_removeEventListeners(filterEventType?: string) {
        const newList: any[] = []
        const thisAsAny = this as any
        thisAsAny.$_events.forEach((listener: any) => {
          const { targetNodes, eventType, handler } = listener
          if (!filterEventType || filterEventType === eventType) {
            targetNodes.forEach((node: any) => node.removeEventListener(eventType, handler))
          } else {
            newList.push(listener)
          }
        })
        thisAsAny.$_events = newList
      },

      $_refreshListeners() {
        if (!this.isDisposed) {
          this.$_removeEventListeners()
          this.$_addEventListeners()
        }
      },

      $_handleGlobalClose(event: PopperEvent, touch = false) {
        const thisAsAny = this as any
        if (thisAsAny.$_showFrameLocked) return

        this.hide({ event })

        if (event.closePopover) {
          this.$emit('close-directive')
        } else {
          this.$emit('auto-hide')
        }

        if (touch) {
          thisAsAny.$_preventShow = true
          setTimeout(() => {
            thisAsAny.$_preventShow = false
          }, 300)
        }
      },

      $_detachPopperNode() {
        const thisAsAny = this as any
        if (thisAsAny.$_popperNode.parentNode)
          thisAsAny.$_popperNode.parentNode.removeChild(thisAsAny.$_popperNode)
      },

      $_swapTargetAttrs(attrFrom: string, attrTo: string) {
        const thisAsAny = this as any
        for (const el of thisAsAny.$_targetNodes) {
          const value = el.getAttribute(attrFrom)
          if (value) {
            el.removeAttribute(attrFrom)
            el.setAttribute(attrTo, value)
          }
        }
      },

      $_applyAttrsToTarget(attrs: Record<string, unknown>) {
        const thisAsAny = this as any
        for (const el of thisAsAny.$_targetNodes) {
          for (const n in attrs) {
            const value = attrs[n]
            if (value == null) {
              el.removeAttribute(n)
            } else {
              el.setAttribute(n, value)
            }
          }
        }
      },

      $_updateParentShownChildren(value: boolean) {
        let parent = this.parentPopper
        while (parent) {
          if (value) {
            parent.shownChildren.add(this.randomId)
          } else {
            parent.shownChildren.delete(this.randomId)

            if (parent.pendingHide) {
              parent.hide()
            }
          }
          parent = parent.parentPopper
        }
      },

      $_isAimingPopper() {
        const thisAsAny = this as any
        const referenceBounds: DOMRect = thisAsAny.$_referenceNode.getBoundingClientRect()
        if (
          mouseX >= referenceBounds.left &&
          mouseX <= referenceBounds.right &&
          mouseY >= referenceBounds.top &&
          mouseY <= referenceBounds.bottom
        ) {
          const popperBounds: DOMRect = thisAsAny.$_popperNode.getBoundingClientRect()
          const vectorX = mouseX - mousePreviousX
          const vectorY = mouseY - mousePreviousY
          const distance =
            popperBounds.left +
            popperBounds.width / 2 -
            mousePreviousX +
            (popperBounds.top + popperBounds.height / 2) -
            mousePreviousY
          // Make the vector long enough to be sure that it can intersect with the popper
          const newVectorLength = distance + popperBounds.width + popperBounds.height
          const edgeX = mousePreviousX + vectorX * newVectorLength
          const edgeY = mousePreviousY + vectorY * newVectorLength
          // Check for collision between the vector and the popper bounds
          return (
            lineIntersectsLine(
              mousePreviousX,
              mousePreviousY,
              edgeX,
              edgeY,
              popperBounds.left,
              popperBounds.top,
              popperBounds.left,
              popperBounds.bottom
            ) || // Left edge
            lineIntersectsLine(
              mousePreviousX,
              mousePreviousY,
              edgeX,
              edgeY,
              popperBounds.left,
              popperBounds.top,
              popperBounds.right,
              popperBounds.top
            ) || // Top edge
            lineIntersectsLine(
              mousePreviousX,
              mousePreviousY,
              edgeX,
              edgeY,
              popperBounds.right,
              popperBounds.top,
              popperBounds.right,
              popperBounds.bottom
            ) || // Right edge
            lineIntersectsLine(
              mousePreviousX,
              mousePreviousY,
              edgeX,
              edgeY,
              popperBounds.left,
              popperBounds.bottom,
              popperBounds.right,
              popperBounds.bottom
            ) // Bottom edge
          )
        }
        return false
      },
    },

    render() {
      const defaultSlot = this.$slots.default
      if (defaultSlot)
        return defaultSlot(this.slotData)
    },
  })

if (typeof document !== 'undefined' && typeof window !== 'undefined') {
  if (isIOS) {
    const options = supportsPassive
      ? {
          passive: true,
          capture: true,
        }
      : true
    document.addEventListener(
      'touchstart',
      (event) => handleGlobalPointerDown(event, true),
      options
    )
    document.addEventListener('touchend', (event) => handleGlobalPointerUp(event, true), options)
  } else {
    window.addEventListener('mousedown', (event) => handleGlobalPointerDown(event, false), true)
    window.addEventListener('click', (event) => handleGlobalPointerUp(event, false), true)
  }
  window.addEventListener('resize', recomputeAllPoppers)
}

function handleGlobalPointerDown(event: PopperEvent, touch: boolean) {
  if (config.autoHideOnMousedown) {
    handleGlobalClose(event, touch)
  } else {
    // Compute contains only
    for (let i = 0; i < shownPoppers.length; i++) {
      const popper = shownPoppers[i]
      try {
        popper.mouseDownContains = popper.popperNode().contains(event.target)
      } catch (e) {
        // noop
      }
    }
  }
}

function handleGlobalPointerUp(event: PopperEvent, touch: boolean) {
  if (!config.autoHideOnMousedown) {
    handleGlobalClose(event, touch)
  }
}

function handleGlobalClose(event: PopperEvent, touch: boolean) {
  const preventClose: Record<string, true> = {}

  for (let i = shownPoppers.length - 1; i >= 0; i--) {
    const popper = shownPoppers[i]
    try {
      const contains = (popper.containsGlobalTarget =
        popper.mouseDownContains || popper.popperNode().contains(event.target))
      popper.pendingHide = false

      // Delay so that close directive has time to set values (closeAllPopover, closePopover)
      requestAnimationFrame(() => {
        popper.pendingHide = false
        if (preventClose[popper.randomId]) return

        if (shouldAutoHide(popper, contains, event)) {
          popper.$_handleGlobalClose(event, touch)

          // Only close child popper
          if (!event.closeAllPopover && event.closePopover && contains) {
            let parent = popper.parentPopper
            while (parent) {
              preventClose[parent.randomId] = true
              parent = parent.parentPopper
            }
            return
          }

          // Auto hide parents
          let parent = popper.parentPopper as PopperInstance
          while (parent) {
            if (shouldAutoHide(parent, parent.containsGlobalTarget, event)) {
              parent.$_handleGlobalClose(event, touch)
            } else {
              break
            }
            parent = parent.parentPopper
          }
        }
      })
    } catch (e) {
      // noop
    }
  }
}

function shouldAutoHide(popper: PopperInstance, contains: boolean, event: PopperEvent): boolean {
  return (
    event.closeAllPopover ||
    (event.closePopover && contains) ||
    (getAutoHideResult(popper, event) && !contains)
  )
}

function getAutoHideResult(popper: PopperInstance, event: Event) {
  if (typeof popper.autoHide === 'function') {
    const result = popper.autoHide(event)
    popper.lastAutoHide = result
    return result
  }
  return popper.autoHide
}

export function recomputeAllPoppers() {
  for (let i = 0; i < shownPoppers.length; i++) {
    const popper = shownPoppers[i]
    popper.$_computePosition()
  }
}

export function hideAllPoppers() {
  for (let i = 0; i < shownPoppers.length; i++) {
    const popper = shownPoppers[i]
    popper.hide()
  }
}

// Track mouse movement to detect aiming at the popper

let mousePreviousX = 0
let mousePreviousY = 0
let mouseX = 0
let mouseY = 0

if (typeof window !== 'undefined') {
  window.addEventListener(
    'mousemove',
    (event) => {
      mousePreviousX = mouseX
      mousePreviousY = mouseY
      mouseX = event.clientX
      mouseY = event.clientY
    },
    supportsPassive
      ? {
          passive: true,
        }
      : undefined
  )
}

function lineIntersectsLine(
  x1: number,
  y1: number,
  x2: number,
  y2: number,
  x3: number,
  y3: number,
  x4: number,
  y4: number
) {
  const uA =
    ((x4 - x3) * (y1 - y3) - (y4 - y3) * (x1 - x3)) /
    ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))
  const uB =
    ((x2 - x1) * (y1 - y3) - (y2 - y1) * (x1 - x3)) /
    ((y4 - y3) * (x2 - x1) - (x4 - x3) * (y2 - y1))
  return uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1
}

export default createPopper

export type PopperInstance = ReturnType<typeof createPopper> extends { new (): infer T } ? T : never
