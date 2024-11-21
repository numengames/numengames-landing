const steps = [
	{
		number: "01",
		title: "Act",
		description:
			"Provide your requirements and employee persona to help us design a solution perfectly suited to your team's needs.",
	},
	{
		number: "02",
		title: "Infer",
		description:
			"We thoroughly assess your needs. Our specialists will evaluate and develop tailored simulation solutions designed to align perfectly with your employees' skill sets.",
	},
	{
		number: "03",
		title: "Serv",
		description:
			"Receive tailored solutions that meet your goals. Finally, select from our diverse range of gamified solutions to enhance and elevate your employee training program.",
	},
];

const WorkProcessMain = () => {
	useEffect(() => {
		const handleScroll = () => {
			const elements = document.querySelectorAll(".work-process-step");
			elements.forEach((element, index) => {
				const rect = element.getBoundingClientRect();
				if (rect.top < window.innerHeight && rect.bottom >= 0) {
					element.classList.add("visible");
					element.style.opacity = 1;
				} else {
					element.classList.remove("visible");
					element.style.opacity = 0;
				}
			});
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div className="flex flex-col w-[45%] max-w-[722px] relative">
			<div className="h-[600px] sticky top-[100px] flex flex-col items-center z-20">
				<header className="flex items-center gap-1.5 tracking-[0.1em] font-extralight font-IBMPlexMono">
					<span className="text-primary-coralRed text-[1.2rem]">[</span>
					<span className="text-base">WORK PROCESS</span>
					<span className="text-primary-coralRed text-[1.2rem]">]</span>
				</header>
				<h2 className="text-[3rem] font-medium leading-[3.6rem] tracking-[-0.03em] text-center mt-3">
					How We Collaborate
				</h2>
			</div>
			<div className="space-y-96">
				{steps.map((step, index) => (
					<div
						className={`work-process-step sticky opacity-0 transition-opacity duration-700 p-6 bg-gradient-to-tr from-[#2C2C2C] via-[#3B2C36] to-[#1F2C2C] rounded-lg shadow-lg overflow-hidden mx-12 pr-20`}
						style={{
							top: `${280 + index * 120}px`, // Aumentar el espacio entre las tarjetas
							zIndex: `${10 + index}`,
							transform: `rotate(${index % 2 === 0 ? "-3deg" : "3deg"})`,
							marginBottom: `${[144, 0, -144][index] || 0}px`,
						}}>
						<p className="step-number px-5 mt-2 text-[1.5rem] font-light text-primary-coralRed font-IBMPlexMono">
							{step.number}
						</p>
						<div className="step-content p-6 mt-2">
							<h3 className="step-title text-white text-[2.5rem] font-medium leading-[3rem] tracking-[-0.03em] text-left mb-3">
								{step.title}
							</h3>
							<p className="step-description text-primary-beige/70 font-thin mt-6">
								{step.description}
							</p>
							{index === steps.length - 1 && (
								<div className="relative inline-block">
									<button className="text-base px-6 py-3 rounded-md border border-solid border-[#F350594D] backdrop-blur-[25px] shadow-[0_0_20px_0_#F35059] mt-10">
										Digital Team Readiness Assessment
									</button>
									<span className="absolute top-10 right-0 text-xs font-bold text-white bg-red-500 rounded-md px-2 py-1 transform translate-x-1/2 -translate-y-1/2">
										FREE
									</span>
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default WorkProcessMain;
