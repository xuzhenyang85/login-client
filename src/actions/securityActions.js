
import axios from 'axios';
import { GET_ERRORS } from './types';


export const createNewUser = (newUser, history) => async dispatch => {
try{
const res = await axios.post("/rest/user/create", newUser);
history.push("/login");
dispatch({
type: GET_ERRORS,
payload: {}

});
} catch (err) {
            dispatch ({
type: GET_ERRORS,
payload: err.res.data

            });

    }
};

