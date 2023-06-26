import React from 'react'

const Signup = () => {
  return (
    <div>
        <div className="logo">
            <img src="https://www.pngall.com/wp-content/uploads/5/Profile-PNG-Images.png" />
          </div>
          <div className="text">
            <h1>Register Form</h1>
          </div>
          <div className="signup">
            <input type="text" placeholder="username.." />
            <input type="password" placeholder="Password.." />
            <input type="password" placeholder="confirm password.." />
            <button>Signup</button>
          </div>
    </div>
  )
}

export default Signup
