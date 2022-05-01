import React from "react";

const SECURITY_CODE = 'paradigma';

function UseState({name}){
    const [state, setState] = React.useState({
        value: '',
        error: false,
        loading: false,
    })
    /* const [value , setValue] = React.useState('');
    const [error,setError] = React.useState(false);
    const [loading, setLoading] = React.useState(false); */
console.log(state.value);
    React.useEffect(()=> {
        //console.log('Empezando el efecto');

        if(state.loading){
            setTimeout(()=>{
                console.log('Haciendo la validación');
                
                if(state.value === SECURITY_CODE){
                    setState({
                        ...state,
                        loading:false,
                        error:false});

                }else {
                    setState({
                        ...state,
                        loading:false,
                        error:true});
                }
                
    
                console.log('Terminando la validación');
            },3000);
        }

        //console.log('Terminando el efecto');
    },[state.loading])
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

}

export {UseState};