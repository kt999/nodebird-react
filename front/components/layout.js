import React, {useCallback, useEffect} from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from "react-redux";

import { Layout,Menu ,Button} from 'antd';
import {loginAction, logoutAction} from "../reducers/user";
const { Header, Content, Sider } = Layout;

const dummy = {
    isLogined : false,
    user : {}
};

const AppLayout = ({children}) => {

    const dispatch = useDispatch();

    const {isLoggedIn,userInfo} = useSelector(state => state.user);

    // const onClickLogIn = useCallback((e) => {
    //     dispatch(loginAction({
    //         nickname:"kt999"
    //     })
    //     );
    // },[]);

    const onClickLogOut = useCallback((e) => {
        dispatch(logoutAction);
    },[]);

    return (
        <>
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
                <Menu.Item key="1"><Link href="/"><a>index</a></Link></Menu.Item>
                <Menu.Item key="2"><Link href="/main"><a>main</a></Link></Menu.Item>

                {isLoggedIn ?
                    <Button onClick={onClickLogOut} type="primary" shape="round" size="small" style={{float:"right",marginTop:"10px",marginRight:"10px"}}>{userInfo.nickname}</Button>
                    :
                    <Link href="/login">
                        <a>
                            <Button type="primary" shape="round" size="small" style={{float:"right",marginTop:"10px",marginRight:"10px"}}>Login</Button>
                        </a>
                    </Link>
                }
            </Menu>
            {children}
        </>
    );

};

export default AppLayout;
