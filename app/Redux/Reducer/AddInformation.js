const IntState={

    cartItems:[],
    image_url:'',
    
    status : false
  }
  
  
  
  
  const cartItems = (state = IntState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
           
            return addtocart1(action.payload,state)
           
           
        case 'FETCH_CART' :
            return {...state,cartItems : action.payload.data,image_url:action.payload.image_url}
  
       
        
     
        case 'REMOVE_FROM_CART':
          
         // console.log('kck',state.cartItems,action.payload)
          return {...state, cartItems : state.cartItems.filter((it)=> it.id !== action.payload)}
        default:
            return state
         
    } 
  }
  
  const addtocart1=(data,state)=>{
      return {...state,cartItems:state.cartItems.concat(data)}
  }
  

  
  
  
  export default cartItems
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // let updatedCart = this.state.cartItems; 
          // return(updatedCart.splice(cartItems.id, 1))
  
          //  this.setState(updatedCart);
          
          // return state.splice(...state.carItems(cartItems.id, action.payload.id))
           // return state.filter(cartItems=> cartItems.id !== action.payload.id)
          //  return{
          //    cartItems:[
          //     ...state.cartItems.filter(data=> data !== action.payload)
          //    ]
          //  }
           //   fruits.splice(2, 1, "Lemon", "Kiwi");
  
  
  
  
  
  
  
           

































// const IntState={

//     infos:[],
    
//     status : false
//   }
  
  
  
  
//   const infos = (state = IntState, action) => {
//     switch (action.type) {
//         case 'ADD_INFO':
           
//             return addinfo1(action.payload,state)
           
           
//         case 'FETCH_INFO' :
//             return {...state,infos : action.payload.data,}
  
       
//         default:
//             return state
         
//     } 
//   }
  
//   const addinfo1=(data,state)=>{
//       return {...state,infos:state.infos.concat(data)}
//   }
  
  
//   export default infos
  
  
  
  
  
  
  
  
  
  
  
  
  
  
 
  
  
  
  
  
  
           