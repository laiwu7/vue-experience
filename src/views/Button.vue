<template>
  <div class="home">
    <common-button></common-button>

    <mixin-button 
      type="primary" 
      @click="handlerClick"
    >mixin button</mixin-button>
    <mixin-box 
      class="test" 
      type="primary" 
      @click="handlerClick" 
      id="mixinBox"
    >mixin-box</mixin-box>

    <hoc-button-test 
      type="primary" 
      @click="handlerClick" 
    >hoc-button</hoc-button-test>
  </div>
</template>

<script>
import MixinButton from '../components/mixins';
import CommonButton from '../components/common.vue';
import MixinBox from '../components/mixins-box.js';
import HocButton from '../components/hoc.js';
import { Button } from "iview";
var HocButtonTest = HocButton(Button)

export default {
  components: {
    MixinButton,
    CommonButton,
    MixinBox,
    HocButtonTest
  },
  methods: {
    handlerClick () {
      console.log('click');
    }
  }
}
</script>
