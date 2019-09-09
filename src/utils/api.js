import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL

const get = async (serviceUrl, params) => {
  const url = `${API_URL}${serviceUrl}`
  const response = !params ? await axios.get(url) : await axios.get(url, params)
  return response
}

const post = async (serviceUrl, params, headers = {}) => {
  const url = `${API_URL}${serviceUrl}`
  const response = await axios.post(url, params, headers)
  return response
}

const put = async (serviceUrl, params) => {
  const url = `${API_URL}${serviceUrl}`
  const response = await axios.put(url, params)
  return response
}

const patch = async (serviceUrl, params) => {
  const url = `${API_URL}${serviceUrl}`
  const response = await axios.patch(url, params)
  return response
}

const del = async serviceUrl => {
  const url = `${API_URL}${serviceUrl}`
  const response = await axios.delete(url)
  return response
}

const all = async promises => {
  const response = await axios.all([...promises])
  return response
}

export { get, post, put, patch, del, all }
