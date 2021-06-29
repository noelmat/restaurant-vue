import service from './configureAxios';

export const postUser = (user)=>{
    return service({requiresAuth: true}).post(
        '/auth/usermanagement/register',
        user,
    )
}

export const getUsers = () => {
    return service({requiresAuth: true}).get(
        '/auth/usermanagement/',
    )
}
export const updateUserDetails = (id, user)=>{
    return service({requiresAuth: true}).patch(
        `/auth/usermanagement/users/${id}`,
        user,
    )
}
