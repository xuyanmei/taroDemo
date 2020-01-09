import Taro, { useState } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Counter } from "../../components";
import './index.scss'
const Index: Taro.FC = props => {
  return (
    <View>
      <Counter name='计时器'></Counter>
    </View>
  )
}
Index.config = {
  navigationBarTitleText: '首页'
}

export default Index
