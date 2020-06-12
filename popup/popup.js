let btn = document.getElementById('switch_btn');

document.addEventListener("DOMContentLoaded",function(){
	
	chrome.storage.sync.get('darkModeOn',function(data){
		if(data.darkModeOn){
			btn.checked = true;
		}
	});

});


function execute_script(codeStr){

 	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		
  		chrome.tabs.executeScript(
	      tabs[0].id,
	      {code: codeStr }
	    );

	});

}

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




