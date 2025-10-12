import { supportsPassive } from '../util/env'
import { Directive as VueDirective } from 'vue'

function addListeners(el: HTMLElement) {
  el.addEventListener('mousedown', addEventProps)
  el.addEventListener('click', addEventProps)
  el.addEventListener(
    'touchstart',
    onTouchStart,
    supportsPassive
      ? {
          passive: true,
        }
      : false
  )
}

function removeListeners(el: HTMLElement) {
  el.removeEventListener('mousedown', addEventProps)
  el.removeEventListener('click', addEventProps)
  el.removeEventListener('touchstart', onTouchStart)
  el.removeEventListener('touchend', onTouchEnd)
  el.removeEventListener('touchcancel', onTouchCancel)
}

function addEventProps(event: MouseEvent) {
  const el = event.currentTarget as any
  const eventAny = event as any
  eventAny.closePopover = !el.$_vclosepopover_touch
  eventAny.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all
}

function onTouchStart(event: TouchEvent) {
  if (event.changedTouches.length === 1) {
    const el = event.currentTarget

    if (el) {
      const elAny = el as any
      const elElement = el as HTMLElement
      elAny.$_vclosepopover_touch = true
      const touch = event.changedTouches[0]
      elAny.$_vclosepopover_touchPoint = touch
      elElement.addEventListener('touchend', onTouchEnd)
      elElement.addEventListener('touchcancel', onTouchCancel)
    }
  }
}

function onTouchEnd(event: TouchEvent) {
  const eventAny = event as any
  const el = event.currentTarget as any
  el.$_vclosepopover_touch = false
  if (event.changedTouches.length === 1) {
    const touch = event.changedTouches[0]
    const firstTouch = el.$_vclosepopover_touchPoint
    eventAny.closePopover =
      Math.abs(touch.screenY - firstTouch.screenY) < 20 &&
      Math.abs(touch.screenX - firstTouch.screenX) < 20
    eventAny.closeAllPopover = el.$_closePopoverModifiers && !!el.$_closePopoverModifiers.all
  }
}

function onTouchCancel(event: TouchEvent) {
  const el = event.currentTarget as any
  el.$_vclosepopover_touch = false
}

const vCloseDirective: VueDirective = {
  beforeMount(el, { value, modifiers }) {
    el.$_closePopoverModifiers = modifiers
    if (typeof value === 'undefined' || value) {
      addListeners(el)
    }
  },
  updated(el, { value, oldValue, modifiers }) {
    el.$_closePopoverModifiers = modifiers
    if (value !== oldValue) {
      if (typeof value === 'undefined' || value) {
        addListeners(el)
      } else {
        removeListeners(el)
      }
    }
  },
  beforeUnmount(el) {
    removeListeners(el)
  },
}

export default vCloseDirective
