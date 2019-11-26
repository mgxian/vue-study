<template>
  <div id="app">
    <HelloWorld :isStranger='true'></HelloWorld>
    <Router></Router>
  </div>
</template>

<script>
import Router from "./components/Router";
import HelloWorld from "./components/HelloWorld";

export default {
  name: "app",
  components: {
    Router,
    HelloWorld
  }
};
</script>