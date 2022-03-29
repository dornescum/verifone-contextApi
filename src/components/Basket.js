import React from 'react';
import ReactTooltip from 'react-tooltip';
import {BsFillInfoCircleFill} from "react-icons/bs";
import {MdKeyboardArrowUp, MdKeyboardArrowDown} from "react-icons/md";


const Basket = (props) => {
	const {cartItems, onAdd, onRemove} = props;
	const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);

	return (
		<div className="">
			{cartItems.length === 0 &&
				<div className="h-96 mt-16 bg-slate-100 p-8 m-4 border">No products in your shopping cart</div>}
			{/*=====*/}
			{cartItems.length !== 0 && <div className="py-8 px-2 md:p-8 m-0 md:m-4 bg-slate-100 border">
				<h3 className='text-stone-500 font-thin text-2xl'>Products in your shopping cart</h3>

				<table className="table-auto w-full">
					<thead className="border-b">
					<tr className="text-zinc-500 text-sm">
						<th className="text-left">Product</th>
						<th className="text-left">Quantity</th>
						<th className="text-right">Value</th>
					</tr>
					</thead>
					<tbody className="border-b-4 border-b-gray-500">
					{cartItems.map((item) => (
						<tr className="" key={item.id}>
							<td className="flex items-center">{item.name}
								<BsFillInfoCircleFill
									data-tip={item.name}
									className="ml-6"
									data-background-color="#ccc"
									color="#ccc" data-place="right"/>
								<ReactTooltip/>
							</td>
							<td className="text-center">
								<div className="flex">
								<span className="bg-white px-4 flex items-center">
									{item.qty}
								</span>
									<div className="flex flex-col">
										<button onClick={() => onAdd(item)} className="remove">
											<MdKeyboardArrowUp/>
										</button>
										<button onClick={() => onRemove(item)} className="remove">
											<MdKeyboardArrowDown/>
										</button>
									</div>
								</div>
							</td>
							<td className="text-right">$ {item.price}</td>
						</tr>
					))}
					</tbody>
				</table>

				{cartItems.length !== 0 && (
					<>
						<hr></hr>
						<div className="flex flex-row justify-between py-8">
							<div className=""></div>
							<div className="col-1 text-right">Total: ${itemsPrice.toFixed(2)}</div>
						</div>

						<hr/>
						<button className="bg-green-400 hover:bg-green-600 transition duration-300
				 text-white py-2 px-4 flex items-center justify-center w-full text-2xl">
							Continue
						</button>
					</>
				)}
			</div>}
		</div>
	);
};

export default Basket;
