const tracks = document.querySelectorAll('.carousel__track');
tracks.forEach((track) => {
	const slides = Array.from(track.children);
	const nextBtns = document.querySelectorAll('.carousel__button--next');
	const prevBtns = document.querySelectorAll('.carousel__button--previous');

	const slideWidth = slides[0].getBoundingClientRect().width;

	const setSlidePosition = (slide, index) => {
		slide.style.left = slideWidth * index + 'px';
	}
	slides.forEach(setSlidePosition);

	const moveToSlide = (track, currentSlide, targetSlide) => {
		track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
		currentSlide.classList.remove('current-slide');
		targetSlide.classList.add('current-slide');
	}

	prevBtns.forEach(prevBtn => {
		prevBtn.addEventListener('click', e => {
			const currentSlide = track.querySelector('.current-slide');
			const prevSlide = currentSlide.previousElementSibling;  
			moveToSlide(track, currentSlide, prevSlide);
		});
	});

	nextBtns.forEach(nextBtn => {
		nextBtn.addEventListener('click', e => {
			const currentSlide = track.querySelector('.current-slide');
			const nextSlide = currentSlide.nextElementSibling;  
			moveToSlide(track, currentSlide, nextSlide);
		});
	});
});
