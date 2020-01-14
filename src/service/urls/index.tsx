import * as base from './base'
import {baseUrl} from '../../config'
const addPath = urls => {
    const result = {}
    for(const key in urls){
        const path=baseUrl+urls[key]
        result[key]=path.replace('\/\/','/')
    }
    return result
}
export default {
    ...addPath(base)
}