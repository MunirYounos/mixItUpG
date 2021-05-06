const sortButtons = document.querySelector('.mix-menu').children;
const sortItems = document.querySelector('.mix-item').children;

for(let i = 0; i<sortButtons.length; i++){
	sortButtons[i].addEventListener('click', function(){
		for(let j = 0; j < sortButtons.length; j++){
			sortButtons[j].classList.remove('active');
		}
		this.classList.add('active');

		let targetData = this.getAttribute('data-target');
		for (let l =0; l<sortItems.length; l++){
			sortItems[l].classList.remove('activated');
			sortItems[l].classList.add('deleted');
			if(sortItems[l].getAttribute('data-item') == targetData || targetData == 'all' ){
				sortItems[l].classList.remove('deleted');
				sortItems[l].classList.add('activated');
			}
		}
	})
}