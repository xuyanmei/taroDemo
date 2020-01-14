
const CONTENTTYPE = 'application/json'
const TIMEOUT = 2 * 60 * 1000
type methodType = 'GET' | 'POST'
import { serverPath } from '../config'
import Taro from '@tarojs/taro'

const service = (url: string, data: any, type: methodType = 'POST') => {
    Taro.showLoading({
        title: '加载中',
    })
    const path = serverPath.replace(/\/$/, '')
    return new Promise((resolve, reject) => {
        Taro.request({
            url: path + url,
            data: data,
            method: type,
            timeout: TIMEOUT,
            header: {
                'content-type': CONTENTTYPE
            },
            success(res) {
                if (res.data.code === 200) {
                    resolve(res.data)
                    Taro.hideLoading()
                }
            },
            fail() {
                Taro.hideLoading()
                reject()
            }
        })
    }
    )
}
export default service 
