import React, {useState} from 'react'
import axios from 'axios'


const Login = props => {
    const [login, setLogin] = useState({
        username: "",
        password: ""
    })
const changeHandler = e => {
    setLogin({
        ...login, [e.target.name]: e.target.value
    })
}
const Submit = e => {
e.preventDefault()
axios
.post("https://build-your-life.herokuapp.com/api/users/login", login)
.then(res => {
    console.log('res', res)
    localStorage.setItem('token', res.data.token)
    props.history.push('/categories')
})
.catch(error => {
    console.log('error', error)
    })
}
    return (
        <div>
            <form onSubmit={Submit}>
                <input
                    type="text"
                    name="username"
                    value={login.username}
                    onChange={changeHandler}
                />
                <input
                    type="password"
                    name="password"
                    value={login.password}
                    onChange={changeHandler}
                />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login