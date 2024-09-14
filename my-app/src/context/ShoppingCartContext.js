import { useContext, createContext, useState } from "react";
import ShoppingCart from "../component/ShoppingCart";



const ShoppingCartContext=createContext({});

const ShoppingCartProvider = ({children}) => {
    const[cartItems,setCartItems]=useState([]);
  
    const[isOpend,setOpend]=useState(false)
      const openCart=()=>{
        setOpend(true);
    };
    const closeCart=()=>{
        setOpend(false);
    }
    const cartQuantity=cartItems.reduce((quntity,item)=>(
item.quntity+quntity
    ),0)
        const getItemQuntity=(id)=>{
return cartItems.find((item)=>item.id===id)?.quntity||0;
    }

    const increaseCartQuntity=(id)=>{
        setCartItems((currItems)=>{
            if(currItems.find( (item) => item.id === id  )==null) 
            {
                return[...currItems, { id ,quntity:1 } ];
            }
            else
            {
                return currItems.map((item)=>{
                    if(item.id === id)
                    {
                        return{ ...item,quntity:item.quntity+1 }
                    }
                    else
                    {
                        return item ;
                    }
                });
            }

        })
    };
    
    const decreaseCartQuntity=(id)=>{
        setCartItems((currItems)=>{
            if(currItems.find( item=>item.id===id  )===null){
                return currItems.filter((item)=>item.id!==id);
            }
            else
            {
                return currItems.map((item)=>{
                    if(item.id===id){
                        return{...item,quntity:item.quntity-1}
                    }
                    else{
                        return item;
                    }
                })
            }

        })

    }
    const removeItemFromCart=(id)=>{
        setCartItems((currItems)=>currItems.filter((item)=>item.id!==id));

    }

    
    return (
        <ShoppingCartContext.Provider 
        value={{cartItems,
                getItemQuntity,
                increaseCartQuntity,
                decreaseCartQuntity,
                removeItemFromCart,
                closeCart,
                openCart,
                cartQuantity,
                }}>
            {children}
<ShoppingCart isOpend={isOpend}/>
        </ShoppingCartContext.Provider>



    );
};

export default ShoppingCartProvider;
export const useShoppingCart=()=>{
    return useContext(ShoppingCartContext);
    

} 