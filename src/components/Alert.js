import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { toggleAlert } from "../store/slices/authSlice";

export const Alert = ({ type }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        setTimeout(() => {
            dispatch(toggleAlert(false))
        }, 1000)
    }, [])


    const mapMessagesToRender = {
        ['success']: 'Logged in successfully',
        ['warning']: 'Loged out',
        ['error']: 'Error'
    }

    return (
        <div className={`alert-message ${type}`}>
            <p>{mapMessagesToRender[type]}</p>
        </div>
    )
}