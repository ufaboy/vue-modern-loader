<template>
  <div id="app">
    <header class="header">Demo loader</header>
    <main class="main">
      <section class="btn-block">
        <button @click="startLoader">Start</button>
        Loader will be stopped after 5 sec
        <input type="color" v-model="color">
      </section>
      <section class="description">
        <p>Just add these lines to the main script:</p>
        <p><code>
          import VueModernLoader from 'vue-modern-loader'
          Vue.use(VueModernLoader), {color: '#41A238'})
        </code>
        <p>
        <p>
          You can also change the color of the loader:</p>
        <p><code>Vue.use(VueModernLoader, {color: '#41A238'})</code>
        </p>
      </section>
    </main>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {},
  data: () => ({
    color: null,
  }),
  methods: {
    startLoader() {
      this.$loader('show')
      setTimeout(this.$loader, 5000)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 20px;

}
.description {
  text-align: left;
}
</style>
