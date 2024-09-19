import "server-only";

const Footer = () => {
	return (
		<footer className='flex flex-row justify-center bottom-0 p-5'>
			<p className='text-sm text-amber-700'>
				&copy; {new Date().getFullYear()} Meowem Hissum. All rights reserved.
			</p>
		</footer>
	);
};

export default Footer;
