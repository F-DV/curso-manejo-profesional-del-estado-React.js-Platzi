import { type } from "@testing-library/user-event/dist/type";
import React from "react";

const SECURITY_CODE = 'paradigma';

function UseReducer({name}){
    const [state, dispatch] = React.useReducer(reducer, initialState);

    const onConfirm = ()=>dispatch({type:actionTypes.confirm});
    const onError = ()=>dispatch({type:actionTypes.error});
    const onCheck = ()=>dispatch({type:actionTypes.check}); 
    const onDelete = ()=>dispatch({type:actionTypes.delete});
    const onReset = ()=>dispatch({type:actionTypes.reset});
    const onWrite = (event)=>{
        dispatch({type:actionTypes.write,
            payload:event.target.value})
    }
    React.useEffect(()=> {
        if(state.loading){
            setTimeout(()=>{
                console.log('Haciendo la validación');
                if(state.value === SECURITY_CODE){
                    onConfirm()            
                }else {
                    onError(); 
                }
                console.log('Terminando la validación');
            },3000);
        }
    },[state.loading])

    if(!state.deleted && !state.confirmed){
        return(
            <div>
                <h2>Eliminar {name}</h2>
                
                <p>Por favor, Escribe le codigo de seguridad</p>
                
                {(state.error && !state.loading) && (
                    <p>Error: El codigo es incorrecto</p>
                )}

                {state.loading && (
                    <p>Cargando...</p>
                )}

                <input
                    placeholder="Código de Seguridad"
                    value={state.value}
                    onChange={onWrite}
                />
                 <button
                    onClick={onCheck}

                >Comprobar
                </button> 
            </div>
        );
    
    } else if(!state.deleted && state.confirmed){
        return(
            <React.Fragment>
                <p>Pedimos de confirmación ¿Tas Segurx?</p>
                <button
                    onClick={onDelete}
                >
                    Si, Eliminar
                </button>
                <button
                    onClick={onReset}
                >
                    No,Me arrepentí
                </button>
            </React.Fragment>
        );
    }else{
        return(
            <React.Fragment>
                <p>Eliminado con Éxito</p>
                <button
                    onClick={onReset}
                >
                    Resetear
                </button>
            </React.Fragment>
        );
    } 
    
}
const actionTypes = {
    confirm:'CONFIRM',
    error: 'ERROR',
    delete: 'DELETE',
    write: 'WRITE',
    reset: 'RESET',
    check: 'CHECK',

}
const initialState = {
    value: '',
    error: false,
    loading: false,
    confirmed: false,
    deleted: false,
}
const reducer = (state,action) =>{
    
    switch(action.type){
        case actionTypes.confirm:    
            return{
                ...state,
                loading:false,
                error:false,
                confirmed: true,}
            break;
        case actionTypes.delete:
            return{
                ...state,
                deleted: true,}
                break;
        case actionTypes.error:
            return{
                ...state,
                loading:false,
                error:true
            }
            break;
        case actionTypes.write:
            return{
                ...state,
                value: action.payload,
            }

            break;
        case actionTypes.check:
            return{
                ...state,
                loading:true
            }
            break;
        case actionTypes.reset:
            return{
                ...state,
                confirmed: false,
                deleted: false,
                value: '',
            }
            break;
        default:    
        return{
                ...state
            };
    }
}
export {UseReducer};


/* const initialState = {
    value: '',
    error: false,
    loading: false,
    confirmed: false,
    deleted: false,
}

//Primera Forma con if/Else
const reducerIf = (state,action)=>{
    if(action.type === 'ERROR'){
        return{
            ...state,
            error:true,
            loading:false,
        }
    }else if(action.type === 'CHECK'){
        return{
            ...state,
            loading:true
        };
    }else{
        return{
            ...initialState
        };
    }
}
// Segunda Forma con Switch
const reducerSwitch = (state,action) =>{
    
    switch(action.type){
        case 'ERROR':
            return{
                ...state,
                error:true,
                loading:false,
            }
        case 'CHECK':
            return{
                ...state,
                loading:true
            };
        default:    
            return{
                ...istate
            };
    }
}
// Tercera Forma ReducerObjects
const reducerObject = (state) =>({
    'ERROR': {
        ...state,
        error:true,
        loading:false,
    },
    'CHECK': {
        ...state,
        loading:true
    }
});
const reducer = (state, action) =>{
    if(reducerObject(state)[action.type]){
        return reducerObject(state)[action.type]
    }else{
        return state
    }

}  */