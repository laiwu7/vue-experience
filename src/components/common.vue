<template>
  <div class="hello">
    <Button type="primary" @click="handlerClick">common button</Button>
  </div>
</template>

<script>
import { debounce } from "../libs/common.js";

export default {
  props: {
    msg: String
  },
  created () {
    this.handlerClick = debounce(this.handlerClick, 200, false);
  },
  methods: {
    handlerClick () {
      console.log('click')
    },
  }
}
</script>
