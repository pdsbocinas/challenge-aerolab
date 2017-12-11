<template>
  <div class="app">
    <ul>
      {{ data }}
    </ul>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      errors: [],
      data: []
    }
  },
  created () {

  }
}
</script>

<style lang="scss" scoped>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: flex;
}

a {
  color: #42b983;
}
</style>
