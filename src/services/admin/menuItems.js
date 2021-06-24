import axios from 'axios';

export const addMenuItem = (menuItem) => {
    return axios.post('http://localhost:3000/restaurant/menuitem',
    {
        ...menuItem
    },
    {
        headers: {
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4gVXNlciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYyNDAxNzI2MH0.lvdOfBxhCgTikdFy32YNx8VEV1wxwKCIknOhjVaaDPA'
        }
    }
    ).then(res => res.data)
}
export const updateMenuItem = (id, menuItem) => {
    return axios.patch(`http://localhost:3000/restaurant/menuitem/${id}`,
    {
        ...menuItem
    },
    {
        headers: {
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4gVXNlciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYyNDAxNzI2MH0.lvdOfBxhCgTikdFy32YNx8VEV1wxwKCIknOhjVaaDPA'
        }
    }
    ).then(res => res.data)
}
export const deleteMenuItem = (id) => {
    return axios.delete(`http://localhost:3000/restaurant/menuitem/${id}`,
    {
        headers: {
            'Authorization': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQWRtaW4gVXNlciIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTYyNDAxNzI2MH0.lvdOfBxhCgTikdFy32YNx8VEV1wxwKCIknOhjVaaDPA'
        }
    }
    ).then(res => res.data) 
}