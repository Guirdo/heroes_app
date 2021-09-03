import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Testing authReducer',()=>{

    test('should return a default state',()=>{
        const state = authReducer({logged: false},{});
        expect(state).toEqual({logged: false})
    });

    test('should authenticate and set the user name',()=>{
        const action = {
            type: types.login,
            payload: {
                name: 'Aldo'
            }
        }
        
        const state = authReducer({logged: false},action);
        expect(state).toEqual({name: 'Aldo',logged: true})
    });

    test('should delete the user name and set logged: false',()=>{
        const action = {
            type: types.logout,
        }
        
        const state = authReducer({name: 'Aldo',logged: true},action);
        expect(state).toEqual({logged: false})
    });

});