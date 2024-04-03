import axios from "axios"
import { ERROR, LODING, SUCCESS } from "./ActionType";

export const Fachingdata = (dispatch) =>{
    dispatch({type : LODING})
    axios.get("https://server-api-2igq.onrender.com/userdata")
    .then((res)=>{
        // console.log(res.data);   
        dispatch({type : SUCCESS,payload : res.data});
    })
    .catch((err)=>{
        console.log(err);
        dispatch({type : ERROR})
    })
}