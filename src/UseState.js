import React from "react";

const SECURITY_CODE = 'paradigma';

function UseState({name}){
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
        confirmed: false,
        deleted: false,
    })

    React.useEffect(()=> {
  
        if(state.loading){
            setTimeout(()=>{
                console.log('Haciendo la validación');
                
                if(state.value === SECURITY_CODE){
                    setState({
                        ...state,
                        loading:false,
                        error:false,
                        confirmed: true,
                    })
                }else {
                    setState({
                        ...state,
                        loading:false,
                        error:true});
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
                        setState({value: event.target.value})
                    }}    
                />
                <button
                    onClick={()=> setState({...state,loading:true})}

                >Comprobar</button>
            </div>
        );
    
    }else if(!state.deleted && state.confirmed){
        return(
            <React.Fragment>
                <p>Pedimos de confirmación ¿Tas Segurx?</p>
                <button
                    onClick={()=> setState({
                        ...state,
                        deleted: true,
                    })}
                >
                    Si, Estoy Segúro
                </button>
                <button
                    onClick={()=> setState({
                        ...state,
                        confirmed: false,
                        value: '',
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
                    onClick={() => setState({
                        ...state,
                        confirmed: false,
                        deleted: false,
                        value: '',
                    })}
                >
                    Resetear
                </button>
            </React.Fragment>
        );
    }
    
}

export {UseState};