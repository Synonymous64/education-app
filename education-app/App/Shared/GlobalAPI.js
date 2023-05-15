// showLastCommitMessageForThisLibrary.js
import { create } from 'apisauce'

// define the api
const api = create({
    baseURL: 'http://192.168.45.128:1337/api',
    headers: {
        'X-API-KEY':'27d15349fe0df86ce1db2f5b229372a60dfc40b05ee1585835fdb99446b6ff359380c198f75aa78fac2fd3b11dcc2790c65a8d74dae9116889161cccc72b1f225c4f8c3efcdb5f154ce078d6f0993903284236637a0959b0ad83f430a38f4d5fd03b819fc72be62e66ff7ebed793793c2c28e2b04389c41b5f7563740abb5c71'
    },
})
// 192.168.45.128
const getSlider = () => api.get('/sliders?populate=*');

export default { getSlider };