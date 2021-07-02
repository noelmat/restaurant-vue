import { login } from '@/services/admin/auth';

const KEY_TOKEN = 'token';
const KEY_USERNAME = 'username';
const KEY_NAME = 'name';
const KEY_ROLE = 'role';

const auth = {
    state:  {
        token: localStorage.getItem( KEY_TOKEN ) || '',
        username: localStorage.getItem( KEY_USERNAME ) || '',
        name: localStorage.getItem( KEY_NAME ) || '',
        role: localStorage.getItem( KEY_ROLE ) || '',
        confirmLogout: false,
    },
    getters: {
        isAuthenticated( state ){
            return !!state.token;
        }
    },
    mutations: {
        setAuthToken(state, payload){
            state.token = payload.token;
        },
        setAuthUsername(state, payload){
            state.username = payload.username;
        },
        setAuthName(state, payload){
            state.name = payload.name;
        },
        setAuthRole(state, payload){
            state.role = payload.role;
        },
        setConfirmLogout(state, payload){
            state.confirmLogout = payload.confirmLogout;
        }
    },
    actions: {
        login( context , payload){
            return login(payload.credentials)
                    .then(data => {
                        const { token, username,name, role} = data;

                        localStorage.setItem( KEY_TOKEN, token);
                        localStorage.setItem( KEY_USERNAME, username );
                        localStorage.setItem( KEY_NAME, name);
                        localStorage.setItem( KEY_ROLE, role );

                        context.commit({
                            type: 'setAuthToken' ,
                            token: token });
                        context.commit( {
                            type: 'setAuthUsername' ,
                            username });
                        context.commit( {
                            type: 'setAuthName' ,
                            name });
                        context.commit( {
                            type: 'setAuthRole' ,
                            role });

                        return username;
                    });
        },
        confirmLogout( context, payload){
            context.commit({
                type: 'setConfirmLogout',
                confirmLogout: payload.confirmLogout
            })
        },
        logout( context ){
            localStorage.removeItem(KEY_TOKEN);
            localStorage.removeItem(KEY_USERNAME);
            localStorage.removeItem(KEY_NAME);
            localStorage.removeItem(KEY_ROLE);
            context.commit( 'setAuthToken' , '' );
            context.commit( 'setAuthUsername' , '');
            context.commit( 'setAuthName' , '' );
            context.commit( 'setAuthRole' , '');  
            return Promise.resolve();          
        }
    }
}

export default auth;