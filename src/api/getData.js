import axios from 'axios'
// 统一配置请求时间限制
axios.defaults.timeout = 4000;

export const new_getTableData = () => axios.get('/news');