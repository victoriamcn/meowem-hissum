import "server-only";

export default function Home() {
	return (
		<section
			className='flex flex-col p-5 items-center h-screen bg-zinc-100 '
			style={{ gap: "10px" }}
		>
			<p className='text-lg'>Content A</p>
			<p className='text-lg'>Content B</p>
			<p className='text-lg'>Content C</p>
		</section>
	);
}
