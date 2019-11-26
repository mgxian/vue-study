import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  describe(':props', () => {
    it(':isStranger - should hides the stranger span if user is not a stranger', () => {
      const isStranger = false
      const wrapper = shallowMount(HelloWorld, {
        propsData: { isStranger: isStranger }
      })
      const { vm } = wrapper
      expect(vm.$refs.strangerSpan).toBeUndefined()

      wrapper.setProps({ isStranger: true })
      expect(vm.$refs.strangerSpan).toBeDefined()
    })
  })

  describe('@events', () => {
    it('@sayHi - should be emitted with Hi when say hi button is clicked', (done) => {
      const wrapper = shallowMount(HelloWorld)

      wrapper.vm.$on('sayHi', (val) => {
        expect(val).toEqual('Hi')
        done()
      })

      const button = wrapper.find('button')
      button.trigger('click')
    })
  })
})
