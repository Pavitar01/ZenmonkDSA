import React from 'react'

const Login = () => {
  return (
    <div>
          <div className="logo">
            <img src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png" />
          </div>
          <div className="text">
            <h1>Member Login</h1>
          </div>
          <div className="input">
            <input type="text" placeholder="username.." />
            <input type="password" placeholder="Password.." />
            <button>Login</button>
          </div>
    </div>
  )
}

export default Login
