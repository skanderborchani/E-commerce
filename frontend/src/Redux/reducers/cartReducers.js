import * as actionTypes from '../constants/cartConstants';
export const cartReducer = (state = { cartIteams: [] },action) => {
   switch (action.type) {
       case actionTypes.ADD_TO_CARD:
           const iteam =action.payload;
           const exititeam = state.cartIteams.find((x) => x.product ===iteam.product);
           if(exititeam){
               return{
               ...state,
               cartIteams:state.cartIteams.map((x) => x.product === exititeam.product ? iteam:x )
               };
           }else{
               return{
                   ...state,
                   cartIteams:[...state.cartIteams, iteam],

               }
           }
           case actionTypes.REMOVE_FROM_CART :
               return{
                   ...state,
                   cartIteams: state.cartIteams.filter((x) => x.product !== action.payload),
               }
           
           
           
   
       default:
         return state  
   }
}