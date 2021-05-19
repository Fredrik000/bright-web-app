import React from 'react'

function LoginForm() {
    return(
        <form className="login-form">
            <h1>Welcome!</h1>
            <p> Small explanation detailing what this is for</p>
            <input type="text" name="usernameInp" placeholder="Username"></input>
            <input type="password" name="passwordInp" placeholder="Password"></input>
            <button>Submit</button>
        </form>
    )
}
export default LoginForm