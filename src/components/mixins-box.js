import { Button } from "iview";
import box from './box.vue';
import { debounce } from "../libs/common.js";

export default {
  mixins: [Button],
  components: {
    box
  },
  created() {
    this.handleClickLink = debounce(this.handleClickLink, 200);
  },
  methods: {
    handleClickLink(event) {
      this.$emit("click", event);
      const openInNewWindow = event.ctrlKey || event.metaKey;

      this.handleCheckClick(event, openInNewWindow);
    }
  },
  render(c) {
    return c('box', {
      'class': {
          bg: true
      }
    },[
      c('div', [
        Button.render.apply(this)
      ]),
    ]);
  }
};

