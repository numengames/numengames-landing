const TestimonialsMain = () => {
	const testimonials = [
		{
			quote:
				'Receive tailored solutions that meet your goals. Finally, select from our diverse range of gamified solutions to enhance and elevate your employee training program."',
			author: "Leandro Carelenda Silva",
			position: "",
			hueRotate: "hue-rotate-180",
			animationDelay: "",
		},
		{
			quote:
				'My favorite part of this training is the immersive learning ability for students is really incredible and the instructor was great!"',
			author: "Manuel Castro",
			position: "Program Specialist at Hayward Unified School District Office",
			hueRotate: "hue-rotate-90",
			animationDelay: "[animation-delay:-4s]",
		},
		{
			quote:
				'Receive tailored solutions that meet your goals. Finally, select from our diverse range of gamified solutions to enhance and elevate your employee training program."',
			author: "Leandro Carelenda Silva",
			position: "",
			hueRotate: "hue-rotate-[25deg]",
			animationDelay: "[animation-delay:-8s]",
		},
		{
			quote: 'This is a test."',
			author: "Leandro Carelenda Silva",
			position: "",
			hueRotate: "hue-rotate-[45deg]",
			animationDelay: "[animation-delay:-12s]",
		},
	];

	return (
		<div class="w-[100%] h-[675px]">
			<header class="flex items-center gap-1.5 tracking-[0.1em] font-light font-IBMPlexMono">
				<span class="text-primary-coralRed text-2xl">[</span>
				<span class="text-base">TESTIMONIALS</span>
				<span class="text-primary-coralRed text-2xl">]</span>
			</header>
			<div class="flex justify-between items-start mt-5 mb-12">
				<h3 class="text-5xl font-medium">Why People Love Us</h3>
				<p class="text-primary-beige/70 max-w-lg font-[84] text-xl">
					Our clients’ stories reflect our commitment to excellence and results.
					See how we’ve helped them achieve success.
				</p>
			</div>
			<div
				class="flex justify-center space-x-6 h-full overflow-x-auto p-5 relative"
				style="perspective: 100px;">
				{testimonials.map((testimonial, index) => (
					<div
						key={index}
						className={`absolute flex flex-col bg-white text-primary-panther rounded-lg p-6 shadow-lg w-[30vw] max-w-[459px] h-[514px] ${testimonial.hueRotate} animate-[carousel_16s_infinite_ease-in-out] ${testimonial.animationDelay} font-[84]`}
						style={{ transformStyle: "preserve-3d" }}>
						<blockquote className="relative text-lg font-light mb-4 h-full flex flex-col justify-center">
							<p className="text-4xl font-bold text-primary-coralRed leading-none">
								“
							</p>
							<div className="flex-grow text-2xl">{testimonial.quote}</div>
						</blockquote>
						<p className="text-primary-panther text-xl">{testimonial.author}</p>
						{testimonial.position && (
							<p className="text-base opacity-75 text-primary-panther">
								{testimonial.position}
							</p>
						)}
					</div>
				))}
			</div>
		</div>
	);
};

export default TestimonialsMain;
