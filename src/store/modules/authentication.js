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
        role: localStorage.getItem( KEY_ROLE ) || ''
    },
    getters: {
        isAuthenticated( state ){
            return !!state.token;
        }
    },
    mutations: {
        setToken(state, payload){
            state.token = payload.token;
        },
        setUsername(state, payload){
            state.username = payload.username;
        },
        setName(state, payload){
            state.name = payload.name;
        },
        setRole(state, payload){
            state.role = payload.role;
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
                            type: 'setToken' ,
                            token: token });
                        context.commit( {
                            type: 'setUsername' ,
                            username });
                        context.commit( {
                            type: 'setName' ,
                            name });
                        context.commit( {
                            type: 'setRole' ,
                            role });

                        return username;
                    });
        },
        logout( context ){
            localStorage.removeItem(KEY_TOKEN);
            localStorage.removeItem(KEY_USERNAME);
            localStorage.removeItem(KEY_NAME);
            localStorage.removeItem(KEY_ROLE);
            context.commit( 'setToken' , '' );
            context.commit( 'setUsername' , '');
            context.commit( 'setName' , '' );
            context.commit( 'setRole' , '');

            return Promise.resolve();
        }
    }
}

export default auth;