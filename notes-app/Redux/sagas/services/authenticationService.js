import axios from "axios"
import { toast } from "react-toastify";
import { setLoginData } from "../../../components/config";

export const loginService = (data) => {
    return axios.post(process.env.REACT_APP_API_URL + "/auth/login", data.user)
	.then((res)=>{
        toast.success("Login successfully")
		setLoginData(res)
        return res
	})
    .catch((err) => {
        toast.error(err.response.data.message)
        throw err  
    })
}

export const registerUserService = (data) => {
    return axios.post(process.env.REACT_APP_API_URL + "/auth/register", data.user)
    .then((res) => {
        setLoginData(res)
        toast.success("Accout created successfully")
        return res
    })
    .catch((err) => {
        if(err.response.status === 422){
            err.response.data.message ? toast.error(err.response.data.message) :
            err.response.data.errors && toast.error(err.response.data.errors[0].name)
        }
        else{
            toast.error("Something went wrong")
        }
        throw err 
    })
}
