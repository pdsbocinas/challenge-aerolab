
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
