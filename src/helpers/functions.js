
import { json } from "react-router-dom"

export const addToken = (token) => {
    localStorage.setItem("token", JSON.stringify(token))
}

export const addEmail  = (email) => {
    localStorage.setItem("email", JSON.stringify(email))
}

export const getToken = () => {
    const token = JSON.parse(localStorage.getItem("token"))
    return token
}

export const getEmail = () => {
    const email = localStorage.getItem("email")
    return email
}

export const logout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("email")
}

export const checkLogin = () => {
    const data = localStorage.getItem("token")
    if(data) return false
    return true
}
