import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import { Counter ,GetCode} from "../../components";
import './index.scss'
const Index: Taro.FC = props => {
  return (
    <View>
      <Counter name='计时器' ></Counter>
      <GetCode interval={60} ></GetCode>
    </View>
  )
}
Index.config = {
  navigationBarTitleText: '首页'
}

export default Index
