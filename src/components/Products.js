import Product from "./Product";

export default function Products(props) {
	const { products, onAdd } = props;
	return (
		<article className="block">
			<h2 className='m-2 text-lg' id='title'>Checkout page</h2>
			<div className="flex flex-col drop-shadow-md" >
				{products.map((product) => (
					<Product key={product.id} product={product} onAdd={onAdd} />
				))}
			</div>
		</article>
	);
}
