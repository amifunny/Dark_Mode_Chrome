chrome.runtime.onInstalled.addListener(function(){
	
	chrome.storage.sync.set({'darkModeOn':false},function(){
		console.log("Dark Mode Installed");
	});

});

