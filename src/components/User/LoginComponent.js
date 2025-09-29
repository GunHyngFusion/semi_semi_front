import React, { useState } from 'react'
import { loginApi } from '../../apis/login/LoginApi'
import { useNavigate } from 'react-router-dom'

const LoginComponent = ({ onStatusChange }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn")==="true")
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await loginApi(email, name)
      if (res.status === 200 && res.data.success) {
        alert("로그인 성공!")
        localStorage.setItem('isLoggedIn', 'true')
        localStorage.setItem('email', email)
        navigate('/')
        window.location.reload();
      }else {
        alert(res.data.message)
      }
    }
    catch(error) {
      alert("로그인 실패")
    }
  }
  const handleLogout=()=>{
    localStorage.removeItem('isLoggedIn')
    localStorage.removeItem('email')
    setIsLoggedIn(false)
    onStatusChange(false)
    alert("로그아웃 되었습니다.")
    navigate("/")
  }
  if(isLoggedIn) return (
    <button onClick={handleLogout}>로그아웃</button>
  )
    return (
      <form onSubmit={handleLogin}>
       이메일: <input type='email' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}></input>
       이름: <input type='name' id='name' value={name} onChange={(e)=>setName(e.target.value)}></input>
       <button type='submit'>로그인하기</button>
      </form>
    )
  }

export default LoginComponent
