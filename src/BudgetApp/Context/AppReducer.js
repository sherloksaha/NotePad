export default (state,action)=>{
    switch(action.type){
        case 'DELETE':
            return{
               ...state,
               transaction: state.transaction.filter((tra)=>tra.id!==action.payload)
            }

        case 'Add_Data':
            return{
                ...state,
                transaction : [action.payload,...state.transaction]
            }
        default :
        return state;
    }
}