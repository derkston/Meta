

	var swiper = new Swiper(".master-section__swiper", {
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
	});
	var swiper = new Swiper(".team__swiper", {
		slidesPerView: 3,
		spaceBetween: 30,
		slidesPerGroup: 3,
		loop: true,
		loopFillGroupWithBlank: true,
	});

	const mrlContents = document.querySelectorAll('.mrl__content');
	const mrlList = document.querySelector('.mrl__list');
	mrlList.addEventListener('click' , e =>{
		let mrlClass = e.target.dataset['name'];
		
		mrlContents.forEach( elem => {
			elem.classList.remove('hide');
			if (!elem.classList.contains(mrlClass)){
				elem.classList.add('hide')
			}
		});
		
	});


