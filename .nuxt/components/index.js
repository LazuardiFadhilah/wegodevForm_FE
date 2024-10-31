export { default as AlertRight } from '../../components/AlertRight.vue'
export { default as BtnCreateForm } from '../../components/BtnCreateForm.vue'
export { default as NuxtLogo } from '../../components/NuxtLogo.vue'
export { default as TheHeader } from '../../components/TheHeader.vue'
export { default as Toolbar } from '../../components/Toolbar.vue'
export { default as Tutorial } from '../../components/Tutorial.vue'
export { default as VuetifyLogo } from '../../components/VuetifyLogo.vue'
export { default as QuestionCard } from '../../components/Question/Card.vue'
export { default as QuestionDescription } from '../../components/Question/Description.vue'
export { default as QuestionTitle } from '../../components/Question/Title.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
