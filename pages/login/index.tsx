import React, {  useState, useContext  } from "react";


import { AuthContext } from '../../context/AuthContext';



function Login() {

    const {signIn, user} = useContext(AuthContext)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    function handleLogin() {
            
            signIn({email: email, password: password});
            
    }

    return (
        <main style={{height: '100%', justifyContent: 'center', display: 'flex', alignContent: 'center'}}>
            <div className="">
                <form className="" onSubmit={handleLogin}>
                    <input type="text" className="" placeholder="email" value={email} onChange={event => setEmail(event.target.value)}/>
                    <input type="password" className="" placeholder="password" value={password} onChange={event => setPassword(event.target.value)}/>
                    <button type="submit" className="">Login</button>
                    <h1>{user?.uid}</h1>
                </form>
            </div>
        </main>
    )
}

export default Login