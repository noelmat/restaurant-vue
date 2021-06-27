import service from './configureAxios';

export const addMenuItem = (menuItem) => {
    return service({requiresAuth: true}).post('http://localhost:3000/restaurant/menuitem',
    {
        ...menuItem
    }
    );
}
export const updateMenuItem = (id, menuItem) => {
    return service({requiresAuth: true}).patch(`http://localhost:3000/restaurant/menuitem/${id}`,
    {
        ...menuItem
    }
    );
}
export const deleteMenuItem = (id) => {
    return service({requiresAuth: true}).delete(`http://localhost:3000/restaurant/menuitem/${id}`,
    
    );
}