/**
 * 环境配置封装
 * 2021-8.21 @swanine
 */
const env = process.env || 'prod'
const EnvConfig = {
  dev: {
    baseApi: 'http://swanine.xyz:3000',
    mockApi: 'http://localhost:3000/'
  },
  test: {
    baseApi: '/',
    mockApi: ''
  },
  prod: {
    baseApi: '/',
    mockApi: ''
  }
}
export default {
  env,
  mock: true,
  namespace: 'swanine-music',
  ...EnvConfig[env]
}
