import axios from 'axios'

export default class HttpClient {
  constructor (baseUrl) {
    this.$http = axios.create({
      baseURL: baseUrl
    })
  }

  get (url) {
    return handleRequest(this.$http.get(url))
  }

  post (url, values) {
    // return handleRequest(this.$http.post(url, buildPostData(values)))
    return handleRequest(this.$http.post(url))
  }

  function handleRequest (request) {
    return new Promise((resolve, reject) => {
      request.then(response => {
        this.data = response.data
      })
      .catch(e => {
        this.errors.push(e)
      })
    })
  }

}

// export default axios.create({
//   method:'get',
//   baseURL: 'https://aerolab-challenge.now.sh/products',
//   headers: {
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YTBjYTA4OGU0OTYwMDAwNjBkMDBhN2EiLCJpYXQiOjE1MTA3NzY5Njh9.VPxLgjGfLVCZyLkBFczf-rlm-m2Hbd1qeipZK4vT84Q'
//   }
// }).then(response => {
//   this.data = response.data
// })
// .catch(e => {
//   this.errors.push(e)
// })
