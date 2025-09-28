export const getMemberInfo = async() =>{
    const {data} = await axios.get('http://localhost:8080/members')
    console.log(data)
    
}