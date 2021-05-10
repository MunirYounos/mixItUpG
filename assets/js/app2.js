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

let productSlider = document.querySelector('.glider');
let dotsId = '#dots';
let productPrev = '.glider-prev';
let productNext = '.glider-next';


let blockQuoteSlider = document.querySelector('.trustpilot');
let trustpilotDotsId = '#trustpilot-dots';
let trustpilotPrev = '.trustpilot-prev';
let trustpilotNext = '.trustpilot-next';



const featureProducts = (params, slidesNumber,dots, prev, next, media) => {

	new Glider(params, {
		slidesToShow: slidesNumber,
		draggable: true, 
		dots: dots, 
		arrows: {
			prev: prev,
			next: next
		},
		responsive: [
			{
				// screens greater than >= 775px
				breakpoint: 775,
				settings: {
					// Set to `auto` and provide item width to adjust to viewport
					slidesToShow: 'auto',
					slidesToScroll: 'auto',
					itemWidth: 150,
					duration: 0.25
				}
			},{
				// screens greater than >= 1024px
				breakpoint: 1024,
				settings: {
					slidesToShow: media,
					slidesToScroll: 1,
					itemWidth: 150,
					duration: 0.25
				}
			}
		]
	})
}

featureProducts(productSlider, 2, dotsId, productPrev, productNext, 4);
featureProducts(blockQuoteSlider, 1, trustpilotDotsId, trustpilotPrev , trustpilotNext, 3 );




// // youtube custome player with image cover
// var tag = document.createElement('script');
// tag.src = "https://www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// //Make ready for morethan one video
// var playerInfoList = [
// {id:'player',height:'675',width:'1200',videoId:'A2rIGlsISZE', playerVars: { 'rel':0, 'controls': 0, 'showinfo': 0, 'theme': 'light', 'autohide': 1 }},
// {id:'playerFR',height:'675',width:'1200',videoId:'6awrdupRbEE', playerVars: { 'rel':0, 'controls': 0, 'showinfo': 0, 'theme': 'light', 'autohide': 1 }}, 
// {id:'playerUK',height:'675',width:'1200',videoId:'yAV5_mcwQ4I', playerVars: { 'rel':0, 'controls': 0, 'showinfo': 0, 'theme': 'light', 'autohide': 1 }}
// ];
// function onYouTubeIframeAPIReady() {
// if(typeof playerInfoList === 'undefined')
// return; 

// for(var i = 0; i < playerInfoList.length;i++) {
// var curplayer = createPlayer(playerInfoList[i]);
// }   
// }
// function createPlayer(playerInfo) {
// return new YT.Player(playerInfo.id, {
// height: playerInfo.height,
// width: playerInfo.width,
// videoId: playerInfo.videoId,
// playerVars:playerInfo.playerVars,
// events: {
// 'onReady': onPlayerReady, // on ready event below callback function "onPlayerReady" will be called.
// }

// });

// }

// youtube custome player with image cover
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player('player', { // "player" id of youtube player container where video comes using youtube iframe api.
height: '675',
width: '1200',
videoId:'A2rIGlsISZE',
playerVars: { 'controls': 0, 'showinfo': 0, 'theme': 'light', 'rel': 0 },
events: {
'onReady': onPlayerReady, // on ready event below callback function "onPlayerReady" will be called.
}
});
}
let playVid = document.getElementById('play_vid');
let vidId = document.getElementById('player');
let pulseVidBtn = document.getElementById('span-btn');

function onPlayerReady(event) { 
	playVid.addEventListener('click',function(){
		event.target.playVideo();
	});
}

window.addEventListener('load', function(){
	vidId.style.display = 'none';
});


pulseVidBtn.addEventListener('click', function(e){
	vidId.style.display = '';
	playVid.style.display = 'none';
	pulseVidBtn.style.display = 'none';
});

