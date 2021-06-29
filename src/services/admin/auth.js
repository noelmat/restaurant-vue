import service from './configureAxios';

export const login = (credentials) => {
    return service().post(
        '/auth/usermanagement/login',
        {
            ...credentials
        });
}