import "server-only";

import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/navigation";
import logo from "@/public/assets/meowem ipsum icon.png";

export default function Header() {
	return (
		<header className=' sticky top-0 flex flex-row justify-between bg-amber-700 py-3 px-8 text-lg text-zinc-100 font-semibold'>
			<Link href='/'>
				<Image src={logo} alt='Meowem Ipsum logo' width={65} height={65} />
			</Link>
			<Navigation />
		</header>
	);
}
