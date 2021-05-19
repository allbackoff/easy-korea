import React from 'react'

const Login = (props) => {
    const { email, setEmail, password, setPassword, handleLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props

    return(
        <section className='login'>
            <div className='loginContainer'>
                <label>Email</label>
                <input type='text' autofocus required value={email} onChange={(e) =>setEmail(e.target.value)} />
                <p className='errorMsg'>{emailError}</p>
                <label>Password</label>
                <input type='password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                <p className='errorMsg'>{passwordError}</p>
                <div className='btnContainer'>
                    {hasAccount ? (
                        <>
                            <button className='button' onClick={handleLogin}>Log in</button>
                            <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </>
                    ) : (
                        <>
                            <button className='button' onClick={handleSignup}>Sign up</button>
                            <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Log In</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login