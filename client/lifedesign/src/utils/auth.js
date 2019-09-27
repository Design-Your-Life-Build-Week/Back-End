import axios from 'axios'

export const withAuth = () => {
    const token = localStorage.getItem('token')

    return axios.create({
        headers: {
            Authorization: token
        }
    })
}