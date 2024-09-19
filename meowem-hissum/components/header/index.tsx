import "server-only";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/assets/meowem ipsum icon.png";

export default function Header() {
	return (
		<header className='bg-amber-700 flex flex-row p-5'>
			<Link href='/'>
				<Image src={logo} alt='Meowem Ipsum logo' width={100} height={100} />
			</Link>
		</header>
	);
}
