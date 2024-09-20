import "server-only";

import Link from "next/link";
import { FaGithub, FaBug, FaCodePullRequest, FaCat } from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className='flex flex-row justify-between items-center bottom-0 p-5 text-sm text-amber-700 font-semibold'>
			<div className='flex flex-row gap-5 text-sm text-amber-700 font-semibold'>
				<Link
					href='https://github.com/victoriamcn/meowem-hissum'
					className='flex flex-row align-middle gap-1 items-center'
				>
					<FaGithub size={13} />
					<p>Github</p>
				</Link>

				<Link
					href='https://github.com/victoriamcn/meowem-hissum/issues/new/choose'
					className='flex flex-row align-middle gap-1 items-center'
				>
					<FaCodePullRequest size={12} />
					<p>Contribute</p>
				</Link>

				<Link
					href='https://github.com/victoriamcn/meowem-hissum/issues/new/choose'
					className='flex flex-row align-middle gap-1 items-center'
				>
					<FaCat size={13} />
					<p>Request Feature</p>
				</Link>

				<Link
					href='https://github.com/victoriamcn/meowem-hissum/issues/new/choose'
					className='flex flex-row align-middle gap-1 items-center'
				>
					<FaBug size={12} />
					<p>Report Bug</p>
				</Link>
			</div>

			<Link href='https://www.britannica.com/topic/Lorem-ipsum'>
				<p>What is Lorem ipsum?</p>
			</Link>

			<p>
				&copy; {new Date().getFullYear()} Meowem Hissum. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
