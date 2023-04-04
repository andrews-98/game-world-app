import { useSelector } from "react-redux";

function useAuth() {
    const { email, username, id } = useSelector((state) => state.auth)

    return {
        isAuth: !!email,
        email,
        username,
        id
    }
}

export  { useAuth };