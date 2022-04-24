<template>
  <div class="count">
    <h3 class="title">Count组件</h3>
    <p>当前count的值:{{ count }}</p>
    <button @click="add">点击加{{ addStep }}</button>
  </div>
</template>

<script>
export default {
  name: "count",
  data() {
    return {
      count: 0,
    };
  },
  props: {
    addStep: {
      required: true,
      type: Number,
      default: 0,
    },
  },
  methods: {
    add() {
      this.count += this.addStep;
      // 向父组件传递事件
      this.$emit("numChange", this.count);
    },
  },
};
</script>

<style scoped lang="less"></style>
