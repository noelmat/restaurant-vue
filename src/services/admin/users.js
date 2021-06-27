import service from './configureAxios';

export const postUser = (user)=>{
    return service({requiresAuth: true}).post(
        'http://localhost:3000/auth/usermanagement/register',
        user,
    )
}

export const getUsers = () => {
    return service({requiresAuth: true}).get(
        'http://localhost:3000/auth/usermanagement/',
    )
}
export const updateUserDetails = (id, user)=>{
    return service({requiresAuth: true}).patch(
        `http://localhost:3000/auth/usermanagement/users/${id}`,
        user,
    )
}
