"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export default function Navigation() {
	return (
		<nav className='flex flex-row justify-between items-center gap-5 text-lg text-zinc-100 font-semibold'>
			<Link href='/#about'>
				<p>About</p>
			</Link>
			<Link href='/#generate'>
				<p>Generate</p>
			</Link>
			<Link href='https://github.com/victoriamcn/meowem-hissum'>
				<FaGithub size={20} />
			</Link>
		</nav>
	);
}
