import React from 'react';
import { MyButton } from '../../components/UI/button/MyButton';
import { MyInput } from '../../components/UI/input/MyInput';

const Login = () => {
    return (
        <div>
            <h2>Страница для логина</h2>
            <form>
                <MyInput type='text' placeholder='Enter login'/>
                <MyInput type='password' placeholder='Enter password'/>
                <MyButton>To come in</MyButton>
            </form>
        </div>
    );
};

export default Login;

