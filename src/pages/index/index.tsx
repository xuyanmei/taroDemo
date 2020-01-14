import Taro, { useState } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { FormInput, Counter, GetCode } from "../../components";
import service from '../../service/request'
import './index.scss'
import { getDistrictOfProvince } from '../../service/urls/base'
const Index: Taro.FC = props => {
  const [form] = useState({ mobile: '' })
  const getProvince = () => {
    const param = {
      requestNo: "1510283240628810",
      requestTime: 1510283240628,
      param: undefined
    }
    service(getDistrictOfProvince, param).then((res) => {

    })
  }
  return (
    <View>
      <Counter name='计时器' ></Counter>
      <GetCode interval={60} ></GetCode>
      {/* <View onClick={getProvince}>点我</View> */}
      <FormInput
        placeholder='手机号码'
        type='number'
        value={form.mobile}
        textAlign='left'
        renderName={
          <Text className='iconfont icon-shouji1 mr5'></Text>
        }
      ></FormInput>
    </View>
  )
}
Index.config = {
  navigationBarTitleText: '首页'
}

export default Index
