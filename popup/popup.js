let btn = document.getElementById('switch_btn');
var bgColorStr = "";
var txtColorStr = "";
var bgVal = 255;

let color_slider = document.getElementById('color_slider');
let target_txt = document.getElementById('target_text');

// Apply slider changes to target text
function apply_show_color( range ){

	txtRange = 255*( parseInt( (255-range)/128 ) );

	bgColorStr = "rgb("+String(range)+","+String(range)+","+String(range)+")";
	txtColorStr = "rgb("+String(txtRange)+","+String(txtRange)+","+String(txtRange)+")";
	target_txt.style.backgroundColor = bgColorStr;
	target_txt.style.color = txtColorStr;

}

// When popup is loaded, restore configurations
document.addEventListener("DOMContentLoaded",function(){
	
	chrome.storage.sync.get(['darkModeOn','backgroundColor','textColor'],function(data){
	
		bgColorStr = data.backgroundColor
		txtColorStr = data.textColor
	
		if(data.darkModeOn){
			btn.checked = true;
		}

		bgVal = parseInt(bgColorStr.split(',')[1]);
		color_slider.value = bgVal;
		apply_show_color( bgVal );
		

	});

});

// When slider is changed, we capture its value
color_slider.addEventListener('input',function(){
	
	bgColorRange = parseInt( color_slider.value );
	apply_show_color(bgColorRange)	

});

// Save the selected color setting, to sync storage.
let save_setting_btn = document.getElementById('save_setting');
save_setting_btn.addEventListener('click',function(){


	colorSettings ={
		"backgroundColor":bgColorStr,
		"textColor":txtColorStr
	}

	chrome.storage.sync.set(colorSettings,function(){
		chrome.tabs.reload();
	});


});

// Execute and Inject js command into loaded page.
function execute_script(codeStr){

 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		
  		chrome.tabs.executeScript(
	      tabs[0].id,
	      {code: codeStr }
	    );

	});

}

// Change Mode and the stored variable.
btn.onclick = function(){

	codeStr = "";
	chrome.storage.sync.get('darkModeOn', function(data) {
		
		if(data.darkModeOn){
			codeStr = "activateLight();";
			chrome.storage.sync.set({'darkModeOn':false},execute_script(codeStr));
		}
		else{
			codeStr = "activateDark();";
			chrome.storage.sync.set({'darkModeOn':true},execute_script(codeStr));
		}	

	});

}






















