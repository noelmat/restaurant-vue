import service from './configureAxios';

export const login = (credentials) => {
    return service().post(
        'http://localhost:3000/auth/usermanagement/login',
        {
            ...credentials
        });
}