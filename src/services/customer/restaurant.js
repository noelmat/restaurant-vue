import service from './configureAxios';

export const getRestaurant = ()=>{
    return service().get(
        `/restaurant`
    );
}
