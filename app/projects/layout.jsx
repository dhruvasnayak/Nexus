const ContentLayout = ({ children }) => {
	return (
		<main className="mx-2 sm:mx-14 md:mx-28 flex flex-col gap-y-10 md:gap-y-14">
			{children}
		</main>
	);
};

export default ContentLayout;
