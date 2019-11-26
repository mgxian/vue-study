<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <span ref="strangerSpan" v-if="isStranger">Stranger</span>
    <br>
    <button @click="handleClick">Say Hi</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    isStranger: {
      type: Boolean,
      default: true
    },
    msg: {
      type: String,
      default: "Hello Vuejs"
    }
  },
  methods: {
    handleClick(){
      this.$emit('sayHi', 'Hi')
    }
  }
};
</script>