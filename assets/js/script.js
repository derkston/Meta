

	var swiper = new Swiper(".master-section__swiper", {
		spaceBetween: 30,
		centeredSlides: true,
		autoplay: {
			delay: 3000,
			disableOnInteraction: false,
		},
	});
	if (window.innerWidth < 577){
		var swiper = new Swiper(".team__swiper", {
			slidesPerView: 1,
			spaceBetween: 20,
			slidesPerGroup: 1,
			loop: true,
			loopFillGroupWithBlank: true,
		});
	}else {
		var swiper = new Swiper(".team__swiper", {
			slidesPerView: 3,
			spaceBetween: 30,
			slidesPerGroup: 3,
			loop: true,
			loopFillGroupWithBlank: true,
		});
	}

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

	const burger = document.querySelector('.burger');
	const navItems = document.querySelector('.nav__items')
	burger.addEventListener('click' , function(){
		burger.classList.toggle('active')
		navItems.classList.toggle('active')
	});


