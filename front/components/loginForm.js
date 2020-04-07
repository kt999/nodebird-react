import React, {useCallback, useState} from "react";
import {useDispatch} from "react-redux";
import {LOG_IN} from "../reducers/user";

const LoginForm = () => {

    const dispatch = useDispatch();

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const onChangeEmail = useCallback((e) => {
        setEmail(e.target.value);
    },[]);

    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    },[]);

    console.log(email,password);

    const onSubmitForm = (e) => {
        e.preventDefault(); // 기본적인 서브밋 행동을 취소합니다

        console.log(email,password);

        dispatch({
            type: LOG_IN,
            data: {
                email : email,
                password : password,
                nickname: "kt999"
            }
        });

    };

    return (
        <>
            <div>
                <form onSubmit={onSubmitForm}>
                    <input type="text" placeholder="email" value={email} onChange={onChangeEmail}/>
                    <br />
                    <input type="password" placeholder="password" value={password} onChange={onChangePassword}/>
                    <button type="submit">login</button>
                </form>
            </div>
        </>
    );
};

export default LoginForm;