import Taro, { useState } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import './index.scss'
 const Counter: Taro.FC<{name?:string}> = props=> {
  const [count, setCount] = useState(0);
  const {name} =props
  return (
    <View>
      <Text>You clicked {count} times</Text>
      <Button onClick={() => setCount(count + 1)}>
        Click me {name}
    </Button>
    </View>
  )
}

export default Counter
