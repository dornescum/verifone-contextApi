import React, {useEffect, useState} from "react";
import {useResultContext} from "./context/ProductContext";
import Basket from "./components/Basket";
import Products from "./components/Products";


function App() {
	const {onRemove, onAdd , products, setProducts, cartItems} =useResultContext();

	const URL = 'http://private-32dcc-products72.apiary-mock.com/product';
	const getData = async () => {
		const res = await fetch(URL);
		const data = await res.json();
		setProducts(data);

	};
	useEffect(() => {
		getData();
	}, []);




	return (
		<main className="pt-40 bg-slate-50 min-h-screen font-rubik">
			<section className="mx-12 md:mx-96  mt-4 mb-4 flex flex-col md:flex-row  justify-center items-center">
				<div className="basis-1/2">
					<Products products={products} onAdd={onAdd}/>
				</div>
				<div className="basis-1/2 ">
					<Basket
						cartItems={cartItems}
						onAdd={onAdd}
						onRemove={onRemove}
					/>
				</div>
			</section>
		</main>
	);
}

export default App;
