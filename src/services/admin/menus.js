import axios from 'axios';

export const getMenus = () => {
    return axios.get('http://localhost:3000/restaurant/menu',
    ).then(res => res.data)
}

export const getMenu = (id) => {
    return axios.get(`http://localhost:3000/restaurant/menu/${id}`,
    {
        headers: {
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4gVXNlciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYyNDAxNzI2MH0.lvdOfBxhCgTikdFy32YNx8VEV1wxwKCIknOhjVaaDPA'
        }
    }).then(res => res.data)
}

export const addMenuItemToMenu = (id, menuItem) => {
    return axios.patch(`http://localhost:3000/restaurant/menu/${id}?action=add_menu_item`,
    menuItem
    ,
    {
        headers: {
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4gVXNlciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYyNDAxNzI2MH0.lvdOfBxhCgTikdFy32YNx8VEV1wxwKCIknOhjVaaDPA'
        }
    }).then(res => res.data)
}
export const removeMenuItemFromMenu = (id, menuItem) => {
    return axios.patch(`http://localhost:3000/restaurant/menu/${id}?action=remove_menu_item`,
    {
        menuItem
    }
    ,
    {
        headers: {
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4gVXNlciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYyNDAxNzI2MH0.lvdOfBxhCgTikdFy32YNx8VEV1wxwKCIknOhjVaaDPA'
        }
    }).then(res => res.data)
}


export const updateMenu = (id, menu) => {
    return axios.patch(`http://localhost:3000/restaurant/menu/${id}`,
    menu
    ,
    {
        headers: {
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4gVXNlciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYyNDAxNzI2MH0.lvdOfBxhCgTikdFy32YNx8VEV1wxwKCIknOhjVaaDPA'
        }
    }).then(res => res.data)

}

export const postMenu = (menu) => {
    return axios.post(
            'http://localhost:3000/restaurant/menu',
            menu,
            {
                headers: {
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4gVXNlciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYyNDAxNzI2MH0.lvdOfBxhCgTikdFy32YNx8VEV1wxwKCIknOhjVaaDPA'
                }
            }
            )

}
export const deleteMenu = (id) => {
    return axios.delete(
            `http://localhost:3000/restaurant/menu/${id}`,
            {
                headers: {
                    'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4gVXNlciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYyNDAxNzI2MH0.lvdOfBxhCgTikdFy32YNx8VEV1wxwKCIknOhjVaaDPA'
                }
            }
            )

}