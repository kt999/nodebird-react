export const initialState = {
    isLoggedIn : false,
    userInfo : {},
};

export const LOG_IN = 'LOG_IN';
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_OUT = 'LOG_OUT';


// export const loginAction = (data) => {
//     return {
//         type : LOG_IN,
//         data : data
//     }
// };

export const logoutAction = {
    type : LOG_OUT,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN: {
            return {
                ...state,
                isLoggedIn: true,
                userInfo : action.data,
            }
        }
        case LOG_OUT: {
            return {
                ...state,
                isLoggedIn: false,
                userInfo : null,
            }
        }
        default : {
            return {
                ...state,
            }
        }
    }

};

export default reducer;
