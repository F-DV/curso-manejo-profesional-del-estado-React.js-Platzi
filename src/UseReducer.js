import React from "react";

const SECURITY_CODE = 'paradigma';

function UseReducer({name}){
    const [state, dispatch] = React.useReducer(reducer, initialState);

    React.useEffect(()=> {
        if(state.loading){
            setTimeout(()=>{
                console.log('Haciendo la validación');
                if(state.value === SECURITY_CODE){
                    dispatch({
                        type:'CONFIRM',
                    })              
                }else {
                    dispatch({
                        type:'ERROR',
                    })   
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
                    onChange={(event) => {
                       dispatch({
                           type:'WRITE',
                           payload: event.target.value,
                       });
                    }}    
                />
                 <button
                    onClick={()=> dispatch({
                        type:'CHECK',
                    })}

                >Comprobar
                </button> 
            </div>
        );
    
    } else if(!state.deleted && state.confirmed){
        return(
            <React.Fragment>
                <p>Pedimos de confirmación ¿Tas Segurx?</p>
                <button
                    onClick={()=>dispatch({
                        type:'DELETE'
                    })}
                >
                    Si, Eliminar
                </button>
                <button
                    onClick={()=>dispatch({
                        type:'RESET'
                    })}
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
                    onClick={()=> dispatch({
                        type:'RESET'
                    })}
                >
                    Resetear
                </button>
            </React.Fragment>
        );
    } 
    
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
        case 'CONFIRM':    
            return{
                ...state,
                loading:false,
                error:false,
                confirmed: true,}
            break;
        case 'DELETE':
            return{
                ...state,
                deleted: true,}
                break;
        case 'ERROR':
            return{
                ...state,
                loading:false,
                error:true
            }
            break;
        case 'WRITE':
            return{
                ...state,
                value: action.payload,
            }

            break;
        case 'CHECK':
            return{
                ...state,
                loading:true
            }
            break;
        case 'RESET':
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