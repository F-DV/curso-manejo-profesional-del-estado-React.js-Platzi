import React from "react";

function UseState({name}){
    const [error,setError] = React.useState(false);
    const {loading, setLoading} = React.useState(false);

    React.useEffect(()=> {
        console.log('Empezando el efecto');

        if(loading){
            setTimeout(()=>{
                console.log('Haciendo la validación');
    
                setLoading(false);
    
                console.log('Terminando la validación');
            },3000);
        }

        console.log('Terminando el efecto');
    },[loading])
    return(
        <div>
                <h2>Eliminar {name}</h2>
                
                <p>Por favor, Escribe le codigo de seguridad</p>
                
                {error && (
                    <p>Error: El codigo es incorrecto</p>
                )}
                {loading && (
                    <p>Cargando...</p>
                )}

                <input placeholder="Código de Seguridad"/>
                <button
                    onClick={()=> setError(!error)}
                >Comprobar</button>

            </div>
    );

}

export {UseState};