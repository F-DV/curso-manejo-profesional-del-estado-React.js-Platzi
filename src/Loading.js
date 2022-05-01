import React from "react";

class Loading extends React.Component{
    
    componentWillUnMount(){
        console.log("componentWillUnMount")
    }
    
    render(){
        return(
            <p>Cargando...</p>
        )
    }
}

export {Loading};