import service from './configureAxios';

export const getSession = () => {
    return service().get(
        "/auth/customer/session",
        {withCredentials:true}
    );
}