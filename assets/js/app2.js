const sortButtons = document.querySelectorAll('.mix-li');
const sortItems = document.querySelectorAll('.item');

sortButtons.forEach(btn => {
	btn.addEventListener('click', ()=> {
		removeActiveClass()
			btn.classList.add('active');
			let targetData = btn.getAttribute('data-target');
			sortItems.forEach(item => {
				item.classList.remove('activated');
				item.classList.add('deleted');
				if(item.getAttribute('data-item') == targetData || targetData == 'all'){
					item.classList.remove('deleted');
					item.classList.add('activated');
				}
			})
	})
})
const  removeActiveClass = () => {
	sortButtons.forEach(btn => {
		btn.classList.remove('active')
	})
}

// relief tabs
const tabBtns = document.querySelectorAll('.relief__wrapper-btns-btn');
const tabItems= document.querySelectorAll('.relief__wrapper-content-img');

function selectTabContents (e) {
	removeActiveTabClass();
	removeActiveTabItemClass();
	this.classList.add('active');
	const tabContentItems = document.querySelector(`#${this.id}-content`);
	tabContentItems.classList.add('active');
}

tabBtns.forEach(tab => tab.addEventListener('click', selectTabContents));

const  removeActiveTabClass = () => {
	tabBtns.forEach(tab => {
		tab.classList.remove('active')
	})
}
const  removeActiveTabItemClass = () => {
	tabItems.forEach(tabItem => {
		tabItem.classList.remove('active')
	})
}

// pusle tabs
const pulseBtns = document.querySelectorAll('.posture__figure-circle');
const pulseItems= document.querySelectorAll('.posture__content-item');

function selectPulseContents (e) {
	removeActivePulseClass();
	removeActivePulseItemClass();
	this.classList.add('show');
	console.log(this.id)
	const pulseContentItems = document.querySelector(`#${this.id}-content`);
	pulseContentItems.classList.add('show');
}

pulseBtns.forEach(pb => pb.addEventListener('click', selectPulseContents));

const  removeActivePulseClass = () => {
	pulseBtns.forEach(pulse => {
		pulse.classList.remove('show')
	})
}
const  removeActivePulseItemClass = () => {
	pulseItems.forEach(pulseItem => {
		pulseItem.classList.remove('show')
	})
}