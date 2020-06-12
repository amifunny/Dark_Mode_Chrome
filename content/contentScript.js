function activateDark(){

	let bgColor = 'black';
	let txtColor = 'white';
	all_elements = document.all;
	for (var j = all_elements.length - 1; j >= 0; j--) {
		all_elements[j].style.backgroundColor = bgColor;
		all_elements[j].style.color = txtColor;
	}

}

function activateLight(){

	let bgColor = 'white';
	let txtColor = 'black';
	all_elements = document.all;
	for (var j = all_elements.length - 1; j >= 0; j--) {
		all_elements[j].style.backgroundColor = bgColor;
		all_elements[j].style.color = txtColor;
	}

}

chrome.storage.sync.get('darkModeOn',function (data) {
	
	if(data.darkModeOn){
		activateDark();
	}
	else{
		activateLight();
	}

});




