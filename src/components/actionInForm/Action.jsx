'use server';
import React from 'react'

const submitData = async (userData) => {
    const newUser = {
        username: userData.get('username'),
        email: userData.get('email')
    }
    console.log(newUser)
}

const Action = () => {
    return (
        <div>
            <h2>Action atrribute in form tag</h2>
            <form action={submitData}>
                <div>
                    <label>Name</label>
                    <input type="text" name='username' />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" />
                </div>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Action
