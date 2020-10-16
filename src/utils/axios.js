import axios from 'axios'

// 根据 process.env.NODE_ENV 环境变量判断开发环境还是生产环境，我们服务端本地启动的端口是 7001
axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? '//localhost:7002' : ''
// 表示跨域请求时是否需要使用凭证
axios.defaults.withCredentials = false
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
// post 请求是 json 形式的
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use(res => {
  return res.data
})

export default axios