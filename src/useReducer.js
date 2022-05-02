const initialState = {
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

}