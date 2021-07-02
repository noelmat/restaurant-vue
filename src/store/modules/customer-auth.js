import { login } from '@/services/customer/auth';

const KEY_TOKEN = 'cust_token';
const KEY_EMAIL = 'cust_email';
const KEY_NAME = 'cust_name';

const auth = {
    state:  {
        token: localStorage.getItem( KEY_TOKEN ) || '',
        email: localStorage.getItem( KEY_EMAIL ) || '',
        name: localStorage.getItem( KEY_NAME ) || '',
    },
    getters: {
        isCustomerLoggedIn( state ){
            return !!state.token;
        }
    },
    mutations: {
        setCustomerToken(state, payload){
            state.token = payload.token;
        },
        setCustomerEmail(state, payload){
            state.email = payload.email;
        },
        setCustomerName(state, payload){
            state.name = payload.name;
        },
    },
    actions: {
        customerLogin( context , payload){
            return login(payload.credentials)
                    .then(data => {
                        const { token, email,name} = data;

                        localStorage.setItem( KEY_TOKEN, token);
                        localStorage.setItem( KEY_EMAIL, email );
                        localStorage.setItem( KEY_NAME, name);

                        context.commit({
                            type: 'setCustomerToken' ,
                            token: token });
                        context.commit( {
                            type: 'setCustomerEmail' ,
                            email });
                        context.commit( {
                            type: 'setCustomerName' ,
                            name });

                        return Promise.resolve(email);
                    });
        },
        customerLogout( context ){
            localStorage.removeItem(KEY_TOKEN);
            localStorage.removeItem(KEY_EMAIL);
            localStorage.removeItem(KEY_NAME);
            context.commit( 'setCustomerToken' , '' );
            context.commit( 'setCustomerEmail' , '');
            context.commit( 'setCustomerName' , '' );

            return Promise.resolve();
        }
    }
}

export default auth;