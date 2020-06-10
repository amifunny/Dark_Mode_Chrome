let btn = document.getElementById('switch_btn')

// var isClicked = false;


btn.onclick = function(){

	// Code injected into page
	code_Str = ""+
	"let bgColor = 'black';"+
	"let txtColor = 'white';"+
	"all_elements = document.all;"+
	"for (var j = all_elements.length - 1; j >= 0; j--) {"+
		"all_elements[j].style.backgroundColor = bgColor;"+
		"all_elements[j].style.color = txtColor;"+
	"}"

    // let color = changeactiveTabColor.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
	  		chrome.tabs.executeScript(
		      tabs[0].id,
		      {code: code_Str	}
		    );
	});


	// if(isClicked){
	// 	chrome.storage.sync.get('color', function(data) {
	// 		changeColor.style.backgroundColor = data.color;
	// 		changeColor.style.color = 'white';
	// 		changeColor.setAttribute('value', data.color);
	// 	});
	// 	isClicked=false;
	// }
	// else{
	// 	chrome.storage.sync.get('color', function(data) {
	// 		changeColor.style.backgroundColor = 'white';
	// 		changeColor.style.color = data.color;
	// 		changeColor.setAttribute('value', data.color);
	// 	});
	// 	isClicked=true;

	// }
		
}	
