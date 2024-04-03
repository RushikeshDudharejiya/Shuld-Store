import { LOGIN, SIGNUP } from "./ActionType"


let inisial ={
    user : null,
    isSighnup : false
}
export const reducer =(state=inisial,action)=>{
    switch(action.type){
        case LOGIN :
            return{
                ...state,
                user : action.payload,
                isSighnup : false
            }
        case SIGNUP :
            return{
                ...state,
                isSighnup : true
            }
        default : return state
    }
}
