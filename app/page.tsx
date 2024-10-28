import "server-only";

import Form from "@/components/form";

export default function Home() {
	return (
		<section
			className='flex flex-col p-5 items-center justify-center h-fit bg-zinc-100 '
			style={{ gap: "10px" }}
		>
			<h1 className='text-3xl font-extrabold'>Meowem Hissum</h1>
			<div className='flex flex-row w-3/4 justify-between'>
				<Form />
				<p className='text-lg'>Generated Text Here</p>
			</div>
		</section>
	);
}
