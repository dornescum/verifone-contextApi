import {useContext, createContext, useState} from "react";

export const ProductContext =createContext();

export const ProductContextProvider =({children})=>{
	const [cartItems, setCartItems] = useState([]);
	const [products, setProducts] = useState([]);

	const onAdd = (product) => {
		const exist = cartItems.find((x) => x.id === product.id);
		if (exist) {
			setCartItems(
				cartItems.map((x) =>
					x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
				)
			);
		} else {
			setCartItems([...cartItems, { ...product, qty: 1 }]);
		}
	};
	const onRemove = (product) => {
		const exist = cartItems.find((x) => x.id === product.id);
		if (exist.qty === 1) {
			setCartItems(cartItems.filter((x) => x.id !== product.id));
		} else {
			setCartItems(
				cartItems.map((x) =>
					x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
				)
			);
		}
	};


	return <ProductContext.Provider value={{onRemove, onAdd, products, setProducts, cartItems}}>
		{children}
	</ProductContext.Provider>
}
export const useResultContext = () => useContext(ProductContext);
