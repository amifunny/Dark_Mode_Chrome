// Adds `dark-mode` class to every DOM element
function activateDark(){

	all_elements = document.all;
	for (var j = all_elements.length - 1; j >= 0; j--) {
		all_elements[j].classList.add("dark-mode");
	}

}

// Remove `dark-mode` class to every DOM element
function activateLight(){

	all_elements = document.all;
	for (var j = all_elements.length - 1; j >= 0; j--) {
		all_elements[j].classList.remove("dark-mode");
	}

}

// Create a Dynamic CSS class with
// User's stored color setting
function createDarkClass(rgbColorTxt,rgbColorBg,_callback){
	var styleSheet = document.createElement('style');
	styleSheet.type = 'text/css';

	styleSheet.innerHTML = '.dark-mode{ '+
								'color:'+rgbColorTxt+' !important;'+
								'background-color:'+rgbColorBg+' !important;'+
							'}';

	// Append to the `head` tag
	document.getElementsByTagName('head')[0].appendChild(styleSheet);
	_callback();
}

// Executed when any page is loaded in browser,
// Fetches stored variables and decide which mode to apply
chrome.storage.sync.get(['darkModeOn','backgroundColor','textColor'],function (data) {
	
	createDarkClass(data.textColor,data.backgroundColor,function(){

		if(data.darkModeOn){
			activateDark();
		}
		else{
			activateLight();
		}

	});


});




