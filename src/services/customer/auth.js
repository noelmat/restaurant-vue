import service from './configureAxios';

export const register = (credentials) => {
    return service().post(
        '/auth/customer/register',
        {
            ...credentials
        });
}

export const login = (credentials) => {
    return service().post(
        '/auth/customer/login',
        {
            ...credentials
        });
}