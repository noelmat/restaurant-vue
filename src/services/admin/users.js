import axios from 'axios';

export const postUser = (user)=>{
    return axios.post(
        'http://localhost:3000/auth/usermanagement/register',
        user,
        {
            headers: {
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4gVXNlciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYyNDAxNzI2MH0.lvdOfBxhCgTikdFy32YNx8VEV1wxwKCIknOhjVaaDPA'
            }    
        }
    )
}

export const getUsers = () => {
    return axios.get(
        'http://localhost:3000/auth/usermanagement/',
        {
            headers: {
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4gVXNlciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYyNDAxNzI2MH0.lvdOfBxhCgTikdFy32YNx8VEV1wxwKCIknOhjVaaDPA'
            }
        }
    ).then(res => res.data)
}
export const updateUserDetails = (id, user)=>{
    return axios.patch(
        `http://localhost:3000/auth/usermanagement/users/${id}`,
        user,
        {
            headers: {
                'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4gVXNlciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYyNDAxNzI2MH0.lvdOfBxhCgTikdFy32YNx8VEV1wxwKCIknOhjVaaDPA'
            }    
        }
    )
}
