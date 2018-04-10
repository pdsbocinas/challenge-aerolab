
<script>
  import axios from 'axios'

export default {
  name: 'app',
  data() {
    return {
      errors: [],
      data: []
    }
  },
  methods: {
    prueba() {
        const uno = "prueba"
        console.log(uno)
    }
  },
  created () {
    axios.create({
      baseURL: 'https://aerolab-challenge.now.sh/products',
      method:'get',
      headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBjYTA4OGU0OTYwMDAwNjBkMDBhN2EiLCJpYXQiOjE1MTA3NzY5Njh9.VPxLgjGfLVCZyLkBFczf-rlm-m2Hbd1qeipZK4vT84Q'
      }
    }).then(response => {
      this.data = response.data
    })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>


<template>
  <div class="app">
    <ul>
      <a href="" @click.prevent="prueba">prueba</a>
      Mi data sarasa
      {{ data }}
    </ul>
  </div>
</template>

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
