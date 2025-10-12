import { getThemeClasses } from '../config'

// @vue/component
export default (prop = 'theme') => ({
  computed: {
    themeClass (): string[] {
      const propsVal = (this as any)[prop]
      return getThemeClasses(propsVal)
    },
  },
})
