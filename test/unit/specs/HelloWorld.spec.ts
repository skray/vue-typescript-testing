import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import {expect} from 'chai'

describe('HelloWorld.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()

    expect(vm.$el.querySelector('.hello h1').textContent).to.equal('Welcome to Your Vue.js App')
  })

  it('should understand vm data props', () => {
    /* Trying to define vm as type 'HelloWorld' errors with `TS2304: Cannot find name 'HelloWorld'` */
    //const vm: HelloWorld = new HelloWorld().$mount()

    /* Defining vm with no type does not error, but provides no helpful inference on available fields */
    const vm = new HelloWorld().$mount()

    // Can reference component data field
    expect(vm.msg).to.equal('Welcome to Your Vue.js App')

    // Can also reference field not defined on HelloWorld component
    expect(vm.somethingElse).to.be.undefined
  })
})
