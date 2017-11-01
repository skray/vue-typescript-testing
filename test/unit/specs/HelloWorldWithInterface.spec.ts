import Vue from 'vue'
import HelloWorld, {HelloWorldInterface} from '@/components/HelloWorldWithInterface'
import {expect} from 'chai'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelector('.hello h1').textContent).to.equal('Welcome to Your Vue.js App')
  })

  it('should understand vm data props', () => {

    /* Referencing interface allows TypeScript compiler to understand fields available on vm */
    const vm: HelloWorldInterface = new HelloWorld().$mount()

    // Can reference component data field
    expect(vm.msg).to.equal('Welcome to Your Vue.js App')

    // Correctly errors with `TS2339: Property 'somethingElse' does not exist on type 'HelloWorldInterface'.`
    expect(vm.somethingElse).to.be.undefined
  })
})
