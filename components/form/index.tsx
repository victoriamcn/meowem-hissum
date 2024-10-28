"use client";

import { useState } from "react";
export default function Form() {
	const [amount, setAmount] = useState<number>(1);
	const [type, setType] = useState<"Sentence" | "Paragraph">("Sentence");
	return (
		<form className='flex flex-col bg-zinc-300 py-3 px-8 gap-4 text-lg font-semibold rounded'>
			<div className='flex flex-col gap-3'>
				<label htmlFor='amount' className='rounded'>
					Amount
				</label>
				<input
					type='text'
					id='amount'
					name='amount'
					value={amount}
					onChange={(e) => {
						const newValue = e.target.value;
						let parsedValue;
						if (newValue === "") {
							parsedValue = 0;
						} else {
							parsedValue = parseInt(newValue, 10);
						}
						setAmount(parsedValue);
					}}
					className='rounded px-2'
				/>
				<label htmlFor='type' className='rounded'>
					Type
				</label>
				<select
					id='type'
					name='type'
					className='rounded p-1'
					value={type}
					onChange={(e) => setType(e.target.value as "Sentence" | "Paragraph")}
				>
					<option value='Sentence'>Sentence</option>
					<option value='Paragraph'>Paragraph</option>
				</select>
			</div>
			<button className='rounded p-1 bg-amber-700 text-white mt-3 mb-2'>
				Generate
			</button>
		</form>
	);
}
