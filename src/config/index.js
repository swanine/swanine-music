/**
 * 环境配置封装
 * 2021-8.21 @swanine
 */
const env = process.env || 'prod'
const EnvConfig = {
  dev: {
    baseApi: 'https://swanine.xyz:3001',
    mockApi: ''
  },
  test: {
    baseApi: '/',
    mockApi: ''
  },
  prod: {
    baseApi: '/https://swanine.xyz:3001',
    mockApi: ''
  }
}
export default {
  env,
  mock: false,
  namespace: 'swanine-music',
  ...EnvConfig[env]
}
