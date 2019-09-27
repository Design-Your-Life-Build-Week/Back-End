import React, {useState} from 'react'
import axios from 'axios'

const User = props => {
    const [register, setRegister] = useState({
        username: "",
        password: ""
    })
const changeHandler = e => {
    setRegister({
        ...register, [e.target.name]: e.target.value
    })
}
console.log(register)

const Register = e => {
    e.preventDefault()
    axios.post('https://build-your-life.herokuapp.com/api/users/register', register)
    .then(res => {
        props.history.push('/login')
    })
    .catch(error => {
        console.log("error", error)
    })
}
return (
    <>
        <form onSubmit={Register}>
            <input
                type="text"
                name="username"
                value={register.username}
                onChange={changeHandler}
            />
            <input
                type="text"
                name="password"
                value={register.password}
                onChange={changeHandler}
            />
            <button>Register Now!</button>
        </form>
    </>
)
}

export default User