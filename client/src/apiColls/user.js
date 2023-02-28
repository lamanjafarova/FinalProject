// const { axiosInstance } = require()
import axiosInstance from "./index"

export const registerUser = async (payload) => {
    try {
        const response = await axiosInstance.post("/users/signup", payload)
        console.log(response);
        return response.data
    } catch (error) {
        return error.response.data
    }
} 


export const logInUser = async (payload) => {
    try {
        const response = await axiosInstance.post("/users/signin", payload)
        return response.data
    } catch (error) {
        return error.response.data
    }
} 