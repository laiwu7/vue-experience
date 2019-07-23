import { debounce } from "../libs/common.js";
export default function hocButton(component) {
  return {
    name: "hoc-button",
    created() {
      this.handlerClick = debounce(this.handlerClick, 200);
    },
    methods: {
      handlerClick(event) {
        let that = this;
        that.$listeners.click(event);
      }
    },
    computed: {
      listeners() {
        return Object.assign({}, this.$listeners, {
          click: this.handlerClick
        });
      }
    },
    render(c) {
      const slots = Object.keys(this.$slots)
        .reduce((arr, key) => arr.concat(this.$slots[key]), [])
        .map(vnode => {
          vnode.context = this._self;
          return vnode;
        });

      return c(
        component,
        {
          on: this.listeners,
          props: this.$props,
          scopedSlots: this.$scopedSlots,
          attrs: this.$attrs
        },
        slots
      );
    }
  };
}
