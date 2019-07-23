import { Button } from "iview";
import { debounce } from "../libs/common.js";

export default {
  mixins: [Button],
  created() {
    this.handleClickLink = debounce(this.handleClickLink, 200);
  },
  methods: {
    handleClickLink(event) {
      this.$emit("click", event);
      const openInNewWindow = event.ctrlKey || event.metaKey;

      this.handleCheckClick(event, openInNewWindow);
    }
  }
};
