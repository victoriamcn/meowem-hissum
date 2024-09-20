import "server-only";

import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className='flex flex-row justify-between align-top bottom-0 p-5'>
			<p className='text-sm text-amber-700 font-bold'>
				&copy; {new Date().getFullYear()} Meowem Hissum. All rights reserved.
			</p>
			<div className='flex flex-row align-middle gap-5'>
				<Link href='https://github.com/victoriamcn/meowem-hissum'>
					<FaGithub className='text-amber-700' />
				</Link>

				<Link href='https://github.com/victoriamcn/meowem-hissum/issues/new/choose'>
					<p className='text-sm text-amber-700 font-bold'>Contribute</p>
				</Link>

				<Link href='https://github.com/victoriamcn/meowem-hissum/issues/new/choose'>
					<p className='text-sm text-amber-700 font-bold'>Request Feature</p>
				</Link>

				<Link href='https://github.com/victoriamcn/meowem-hissum/issues/new/choose'>
					<p className='text-sm text-amber-700 font-bold'>Report Bug</p>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
