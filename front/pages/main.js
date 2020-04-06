import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Main = () => {

    const {isLoggedIn,userInfo} = useSelector(state => state.user);

    return (

        <>
            <div>main page</div>
            {userInfo && <div>{userInfo.nickname}</div>}
        </>
    )
};

export default Main;