
import React from 'react'
import ReactDOM from 'react-dom'

import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";
import {Logo} from './components/logo'

const LoginForm = ({onSubmit, buttonText}) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const {username, password} = event.target.elements

        onSubmit({
            username: username.value,
            password: password.value,
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username</label>
                <input id="username" tyoe="text"/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password"/>
            </div>
            <div>
                <button type="submit">
                    {buttonText}
                </button>
            </div>
        </form>
    )
}

const App = () => {
    const [openModal, setOpenModal] = React.useState('none')

    const login = (formData) => {
        console.log('login', formData)
    }

    const register = (formData) => {
        console.log('register', formData)
    }

    return(
    <div>
        <Logo width='80' height='80'/>
        <h1>Bookshelf</h1>
        <div>
            <button onClick={() => setOpenModal('login')}>Login</button>
        </div>
        <div> 
            <button onClick={() => setOpenModal('register')}>Register</button>
        </div>
        <Dialog aria-label="login form" isOpen={openModal === 'login'}>
            <div>
                <button onClick={() => setOpenModal('none')}>Close</button>
            </div>
            <h3>Login</h3>
            <LoginForm onSubmit={login} buttonText={'Login'}/>
        </Dialog>
        <Dialog aria-label="register form" isOpen={openModal === 'register'}>
            <div>
                <button onClick={() => setOpenModal('none')}>Close</button>
            </div>
            <h3>Register</h3>
            <LoginForm onSubmit={register} buttonText='Register'/>
        </Dialog>
    </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))

