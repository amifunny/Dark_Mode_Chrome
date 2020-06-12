chrome.runtime.onInstalled.addListener(function(){
	
	settings = {
				'darkModeOn':false,
				'backgroundColor':'rgb(0,0,0)',
				'textColor':'rgb(255,255,255)'
			 	}

	chrome.storage.sync.set(settings,function(){
		console.log("Dark Mode Installed");
	});

});

