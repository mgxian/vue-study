<template>
  <div id="app">
    <span>{{ title }}</span>
    <br>
    doubleCount {{ doubleCount() }}
    <br>
    count {{ count }}
    <button @click="handleIncrease">+</button>
    <button @click="handleDecrease">-</button>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  name: "counter",
  computed: {
    title: function() {
      return this.$store.state.title;
    },

    ...mapState("counter", {
      count: state => state.count
    })
  },
  methods: {
    handleIncrease: function() {
      this.increase();
    },

    handleDecrease: function() {
      this.decrease();
    },

    setTitle: function(title) {
      this.$store.dispatch("setTitle", title);
    },

    ...mapMutations("counter", {
      increaseBy: "increase",
      decreaseBy: "decrease"
    }),

    ...mapActions("counter", {
      increase: "increaseOne",
      decrease: "decreaseOne"
    }),

    ...mapGetters("counter", ["doubleCount"])
  }
};
</script>

<style>
</style>
