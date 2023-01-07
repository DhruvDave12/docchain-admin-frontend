import React from "react";
import AxiosInstance from "../services/AxiosInstance";
import { useRouter } from "next/router";

export const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {},
    token: null,
    user: null
});

const AuthContextProvider = (props) => {
    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const [token, setToken] = React.useState(null);
    const [user, setUser] = React.useState(null);

    const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("@docusertoken")
        router.push("/auth");
    };

    const loginHandler = async (username, password) => {
        console.log("UU: ", username, "PP: ", password);
        try {
            const response = await AxiosInstance.post('/login/',{
                username,
                password
            });

            if (response.status === 200) {
                localStorage.setItem("@docusertoken", response.data.tokens.access);
                setToken(response.data.tokens.access);
                const userObj = {
                    username: response.data.username,
                    first_name: response.data.first_name,
                    last_name: response.data.last_name,
                }
                setUser(userObj);
                setIsLoggedIn(true); 
            }

            return response;
        } catch (err) {
            console.log(err);
        }
    };

    // useeffect to check if the user is logged in or not
    React.useEffect(() => {
        const token = localStorage.getItem("@docusertoken");
        // TODO -> check here if the token is valid or not

        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
                token: token,
                user: user
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;