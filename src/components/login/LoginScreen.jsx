import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { AuthContext } from '../../auth/AuthContext'
import { types } from '../../types/types'

export const LoginScreen = ({ history }) => {

    const last_path = localStorage.getItem('last_path') || '/';

    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        dispatch({
            type: types.login,
            payload: {
                name: 'Aldo'
            }
        });

        history.replace(last_path);
    }

    return (
        <div className="m-5">
            <h1>Login</h1>
            <hr />

            <Button
                onClick={ handleLogin }
            >
                Login
            </Button>
        </div>
    )
}
