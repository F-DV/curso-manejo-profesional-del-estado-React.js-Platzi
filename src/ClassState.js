import React from "react";

class ClassState extends React.Component{

    render(){
        return(
            <div>
                <h2>Eliminar ClassState</h2>
                
                <p>Por favor, Escribe le codigo de seguridad</p>
                
                <input placeholder="Código de Seguridad"/>
                <button>Comprobar</button>

            </div>
        )
    }
}

export {ClassState};