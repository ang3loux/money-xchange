const URL = 'http://api.fixer.io/' || process.env.REACT_APP_LB_API

class ApiClient {
  constructor(options) {
    this.baseUrl = options.baseUrl
    this.auth = true
    this.userKey = 'user'
  }

  setAuth(auth) {
    this.auth = auth
  }

  post(endpoint, params, headers = null) {
    return this.requestHttp('POST', this.baseUrl + endpoint, params, headers)
  }

  get(endpoint, headers = null) {
    return this.requestHttp('GET', this.baseUrl + endpoint, null, headers)
  }

  put(endpoint, params, headers = null) {
    return this.requestHttp('PUT', this.baseUrl + endpoint, params, headers)
  }

  patch(endpoint, params, headers = null) {
    return this.requestHttp('PATCH', this.baseUrl + endpoint, params, headers)
  }

  delete(endpoint, params, headers = null) {
    return this.requestHttp('DELETE', this.baseUrl + endpoint, params, headers)
  }

  getUser() {
    return JSON.parse(localStorage.getItem(this.userKey) || '{}')
  }

  makeOptions(method, headers) {
    const user = this.getUser()

    const options = {
      method,
      mode: 'no-cors',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        ...headers,
      },
    }

    if (this.auth) {
      const Authorization = `Bearer ${!user.ra ? '' : user.ra}`
      options.headers.Authorization = Authorization
    }

    return options
  }

  requestHttp(method, url, params, headers) {
    const options = this.makeOptions(method, headers)

    return new Promise((resolve, reject) => {
      if (params) {
        options.body = JSON.stringify(params)
      }

      fetch(url, options)
        .then(response => {
          response
            .json()
            .then(body => {
              resolve({
                statusCode: response.status,
                body,
                headers: response.headers,
              })
            })
            .catch(error => {
              reject(error)
            })
        })
        .catch(error => {
          reject(error)
        })
    })
  }
}

export default new ApiClient({ baseUrl: URL })
