import { View, Text, Input } from "@tarojs/components"
import './index.scss'
interface Props {
    required?: boolean,
    name?: string,
    value: any,
    type?: 'number' | 'text' | 'idcard' | 'digit' | undefined,
    placeholder?: string,
    textAlign?: string,
    borderNone?: boolean,
    password?: boolean,
    renderLeft?:React.ReactNode,
    renderName?:React.ReactNode,
    renderRight?:React.ReactNode
}
const Index: Taro.FC<Props> = (props) => {
    const { required = false, name, value, type = 'text', placeholder = '请输入', textAlign = 'right', borderNone = false, password = false } = props
    return (
        <View
            className={'form-input row-center ' + (borderNone ? 'border-none' : '')}            >
            {props.renderLeft}
            {props.renderName}
            {name && (
                <View className="name">
                    {required && <Text className="f14 require">*</Text>}
                    {name}
                </View>
            )}
            <Input
                className="f14"
                value={value}
                type={type}
                password={password}
                placeholder={placeholder}
                style={'text-align:' + textAlign}
            ></Input>
            {props.renderRight}
        </View>
    )
}
export default Index