export default {
  mounted(el, binding) {
    console.log(el);
    console.log(binding);
    el.style[binding.arg] = binding.value;

    if (binding.modifiers.blink) {
      let flag = true;
      setInterval(() => {
        el.style.color = flag ? '#fff' : binding.value;
        flag = !flag;
      }, 1000);
    }
  },
  updated(el, binding) {
    el.style[binding.arg] = binding.value;
  },
  unmounted() {},
};
