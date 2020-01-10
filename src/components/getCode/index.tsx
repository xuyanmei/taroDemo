import { View } from '@tarojs/components'
import { useState } from '@tarojs/taro'
import './index.scss'
const GetCode: Taro.FC<{
    content?: string,
    interval: number,
}> = props => {
    const [time, setTime] = useState(0)
    const [disabled, setDisabled] = useState(false)
    const [timeoutId, setTimeoutId] = useState(0)
    const start = () => {
        _checkConfig()
        done()
    }
    const _checkConfig = () => {
        if (!props.interval) {
            throw 'interval is required'
        }
    }
    //开始倒计时
    const done = () => {
        Taro.setStorageSync('get_code_record', Date.now() - 100)
        _countTime()
    }
    //检查时间
    const _getTotalLastime = () => {
        return Date.now() - Taro.getStorageSync('get_code_record') || 0
    }
    //倒计时
    const _countTime = () => {
        if (_getTotalLastime() < props.interval * 1000) {
            setDisabled(true)
            const lastTime = ~~(
                (props.interval * 1000 - _getTotalLastime()) /
                1000
            )
            setTime(lastTime)
            const id = setTimeout(function () {
                _countTime()
            }, 1000) as any
            setTimeoutId(id as number)
        } else {
            setDisabled(false)

            setTime(0)

            close()
        }
    }
    //关闭
    const close = () => {
        clearTimeout(timeoutId)
        Taro.removeStorageSync('get_code_record')
    }
    const { content='获取' } = props
    return (<View className={'getCode ' + (disabled ? 'disabled' : '')}>
        {!disabled ? (
            <View onClick={start}>{content}</View>
        ) : (
                <View>{'还剩' + time + '秒'}</View>
            )}
    </View>)
}
export default GetCode