import { createContext, useState } from "react";

export const CartContext = createContext ( {cart: []})

export const CartProvider = ({children})  => {
    const [cart, setCart] = useState([])

    const addItem = (pizza) => {
        if(!isInCart(pizza.id))  {
            setCart(prev=> [...prev, {...pizza, cantidad: 1}])
        } else {
            console.error ('Ya se agregó la pizza al carrito')
        }
    }
    const increaseQuantity = (pizza) => {
        let nuevaPizza = {
          id: pizza.id,
          name: pizza.name,
          price: pizza.price,
          cantidad: 1,
        };
        let encontrarPizza = cart.find((item) => item.id === pizza.id);
    
        if (encontrarPizza) {
          setCart(
            cart.map((item) =>
              item.id === encontrarPizza.id
                ? { ...item, cantidad: item.cantidad + 1 }
                : item
            )
          );
        } else {
          setCart([...cart, nuevaPizza]);
        }
      };
    
      const decreaseQuantity = (pizza) => {
        let encontrarPizza = cart.findIndex((item) => item.id === pizza.id);
        let nuevoCarrito = [...cart];
        if (encontrarPizza >= 0) {
          if (nuevoCarrito[encontrarPizza].cantidad > 1) {
            nuevoCarrito[encontrarPizza].cantidad--;
          } else {
            nuevoCarrito.splice(encontrarPizza, 1);
          }
          setCart(nuevoCarrito);
        }
      };    

    const getTotal = () => {
        return cart.reduce((acc, pizza) => acc += (pizza.cantidad * pizza.price), 0)
    }

    const total = getTotal()

    const getTotalQuantity = () => {
        let accu = 0

        cart.forEach(pizza => {
            accu += pizza.cantidad
        })

        return accu
    }

    const totalQuantity = getTotalQuantity()

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(pizza => pizza.id === itemId)
    }

    return (
        <CartContext.Provider value ={{cart, addItem, clearCart, total, getTotal, getTotalQuantity, totalQuantity, increaseQuantity, decreaseQuantity}}>
            {children}
        </CartContext.Provider>
    )
}