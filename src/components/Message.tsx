import { defineComponent } from "vue";

export default defineComponent({
  props: ["msg"],
  setup(props) {
    return () => <h1>{props.msg}</h1>;
  },
});
