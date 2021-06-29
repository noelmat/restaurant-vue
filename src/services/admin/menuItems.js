import service from './configureAxios';

export const addMenuItem = (menuItem) => {
    return service({requiresAuth: true}).post('/restaurant/menuitem',
    {
        ...menuItem
    }
    );
}
export const updateMenuItem = (id, menuItem) => {
    return service({requiresAuth: true}).patch(`/restaurant/menuitem/${id}`,
    {
        ...menuItem
    }
    );
}
export const deleteMenuItem = (id) => {
    return service({requiresAuth: true}).delete(`/restaurant/menuitem/${id}`,
    
    );
}