import axios from "axios"

export const loginApi = async(email, name) =>{
    const res = await axios.post('http://localhost:8080/login', {email, name})
    console.log(res)
    return res
}
