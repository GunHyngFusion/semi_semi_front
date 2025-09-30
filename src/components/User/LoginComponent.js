import React, { useState } from 'react'
import { loginApi } from '../../apis/login/LoginApi'
import { useNavigate } from 'react-router-dom'

const LoginComponent = ({ onStatusChange }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem("isLoggedIn")==="true") //로그인 시 로컬스토리지에 로그인 true 저장됨. 
  // 로그인 여부 state 저장
  const [email, setEmail] = useState('') //입력된 email 저장 state 
  const [name, setName] = useState('') //입력된 name 저장 state 
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); //새로고침 방지
    try {
      const res = await loginApi(email, name) //loginApi 로 백엔드에 email, name 전달 
      if (res.status === 200 && res.data.success) { //반환된 status 가 200 이고 data 에 success 가 true 면 
        alert("로그인 성공!")
        localStorage.setItem('isLoggedIn', 'true') //로그인 성공 시 성공 상태 로컬스토리지에 저장
        localStorage.setItem('email', email) //로그인 성공 시  email 을 로컬스토리지에 저장 
        navigate('/') 
        window.location.reload();
      }else {
        alert(res.data.message) //로그인 실패 시 백엔드에서 전달한 message 출력 
      }
    }
    catch(error) {
      alert("로그인 실패")
    }
  }
  const handleLogout=()=>{
    localStorage.removeItem('isLoggedIn') //로그아웃 시 로컬스토리지의 email 과 로그인 상태 삭제
    localStorage.removeItem('email')
    setIsLoggedIn(false) //state 도 false 로 설정
    onStatusChange(false)
    alert("로그아웃 되었습니다.")
    navigate("/")
  }
  if(isLoggedIn) return ( //로그인 상태에서만 로그아웃 버튼 활성화
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
