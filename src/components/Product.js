import {BsFillCartCheckFill} from "react-icons/bs";

export default function Product(props) {
	const { product, onAdd } = props;
	return (
		<div className='flex flex-row items-center bg-white my-4 p-4'>
			<div className="basis-1/2">
				<h3>{product.name}</h3>
			</div>
			<div className="basis-1/4">
				<div>Price : <span className={`text-blue-400 ${product.price < 20 ? 'text-red-900': ''}`}> ${product.price}</span></div>
			</div>
			<div className="basis-1/4 ">
				<button onClick={() => onAdd(product)} className='bg-green-400 hover:bg-green-600 transition duration-300
				 text-white py-2 px-4 flex items-center w-40'>
					<span className='mb-1 pr-4'>
						<BsFillCartCheckFill />
					</span>
					Add To Cart
				</button>
			</div>
		</div>
	);
}
