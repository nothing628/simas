import { assign } from './util/assign-deep'
import { config, FloatingVueConfig } from './config'
import { ObjectPlugin, FunctionPlugin } from 'vue'
import './style.css'
// Components
import PrivateDropdown from './components/Dropdown'
import PrivateMenu from './components/Menu'
import PrivatePopper from './components/Popper'
import PrivatePopperContent from './components/PopperContent.vue'
import PrivatePopperMethods from './components/PopperMethods'
import PrivatePopperWrapper from './components/PopperWrapper.vue'
import PrivateThemeClass from './components/ThemeClass'
import PrivateTooltip from './components/Tooltip'
import PrivateTooltipDirective from './components/TooltipDirective.vue'
import PrivateResizeObserver from './components/ResizeObserver.vue'
// Directives
import PrivateVTooltip from './directives/v-tooltip'
import PrivateVClosePopper from './directives/v-close-popper'

/* Exports */

export const options = config
// Directive
/**
 * @deprecated Import `vTooltip` instead.
 */
export const VTooltip = PrivateVTooltip
export const vTooltip = PrivateVTooltip // For <script setup>
export { createTooltip, destroyTooltip } from './directives/v-tooltip'
/**
 * @deprecated Import `vClosePopper` instead.
 */
export const VClosePopper = PrivateVClosePopper
export const vClosePopper = PrivateVClosePopper // For <script setup>
// Components
export const Dropdown = PrivateDropdown
export const Menu = PrivateMenu
export const Popper = PrivatePopper
export const PopperContent = PrivatePopperContent
export const PopperMethods = PrivatePopperMethods
export const PopperWrapper = PrivatePopperWrapper
export const ThemeClass = PrivateThemeClass
export const Tooltip = PrivateTooltip
export const TooltipDirective = PrivateTooltipDirective
export const ResizeObserver = PrivateResizeObserver
// Utils
export { hideAllPoppers, recomputeAllPoppers } from './components/Popper'
export * from './util/events'
export { placements } from './util/popper'
export type { Placement } from './util/popper'
// Types
export type { TriggerEvent } from './components/PopperWrapper.vue'

/* Vue plugin */

export const install: FunctionPlugin = (app, options: FloatingVueConfig = config) => {
  if (app.config.globalProperties.$_vTooltipInstalled) return
  app.config.globalProperties.$_vTooltipInstalled = true

  assign(config, options)

  // Directive
  app.directive('tooltip', PrivateVTooltip)
  app.directive('close-popper', PrivateVClosePopper)
  // Components
  app.component('VTooltip', PrivateTooltip)
  app.component('VDropdown', PrivateDropdown)
  app.component('VMenu', PrivateMenu)
  app.component('ResizeObserver', PrivateResizeObserver)
}

const plugin: ObjectPlugin<FloatingVueConfig> = {
  // eslint-disable-next-line no-undef
  // version: '5.2.2', //VERSION
  install,
}

export default plugin
