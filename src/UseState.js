import React from "react";

function UseState({name}){
    const [error,setError] = React.useState(false);

    return(
        <div>
                <h2>Eliminar {name}</h2>
                
                <p>Por favor, Escribe le codigo de seguridad</p>
                
                {error && (
                    <p>Error: El codigo es incorrecto</p>
                )}

                <input placeholder="Código de Seguridad"/>
                <button
                    onClick={()=> setError(!error)}
                >Comprobar</button>

            </div>
    );

}

export {UseState};