import service from './configureAxios';

export const getMenus = () => {
    return service({requiresAuth: true}).get('/restaurant/menu',
    )
}

export const getMenu = (id) => {
    return service({requiresAuth: true}).get(`/restaurant/menu/${id}`,
    )
}

export const addMenuItemToMenu = (id, menuItem) => {
    return service({requiresAuth: true}).patch(`/restaurant/menu/${id}?action=add_menu_item`,
    menuItem
    )
}
export const removeMenuItemFromMenu = (id, menuItem) => {
    return service({requiresAuth: true}).patch(`/restaurant/menu/${id}?action=remove_menu_item`,
    {
        menuItem
    }
    )
}


export const updateMenu = (id, menu) => {
    return service({requiresAuth: true}).patch(`/restaurant/menu/${id}`,
         menu
    )

}

export const postMenu = (menu) => {
    return service({requiresAuth: true}).post(
            '/restaurant/menu',
            menu,
            )

}
export const deleteMenu = (id) => {
    return service({requiresAuth: true}).delete(
            `/restaurant/menu/${id}`,
            )

}