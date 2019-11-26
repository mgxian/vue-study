<template>
  <div>
    <router-link to="/a">Go to A</router-link>
    <br>
    <router-link to="/b">Go to B, actually not found</router-link>
    <br>
    <router-link :to="{ name: 'b', params: { id: 6} }">Go to B with id 6</router-link>
    <br>
    <router-link to="/c">Go to C</router-link>
    <br>
    <router-link to="/c/a">Go to C/A</router-link>
    <br>
    <router-link to="/c/b">Go to C/B</router-link>
    <br>
    <router-link to="/d">Go to D</router-link>
    <br>
    <button @click="$router.push({ name: 'd'}, () => {})">Go to D</button>
    <br>
    <router-link to="/e">Go to E redirect to D</router-link>
    <br>
    <router-link to="/f">Go to F, actually F is alias of A</router-link>
    <transition>
      <router-view/>
      <router-view name="namedView"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  beforeRouteEnter(to, from, next){
    to.path
    from.path
    next()
  }
}
</script>