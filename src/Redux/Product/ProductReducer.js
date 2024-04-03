import { ERROR, LODING, SUCCESS } from "./ActionType"

let inisial={
    isLoding:false,
    isError:false,
    data : []
}
export const preducer = (state=inisial,{type,payload})=>{
    switch(type){
        case LODING:
            return{
                ...state,
                isLoding:true
            }
        case SUCCESS :
            return{
                ...state,
                isLoding : false,
                data:payload
            }
        case ERROR : 
        return{
            ...state,
            isError : true,
        }
        default:return state
    }
}