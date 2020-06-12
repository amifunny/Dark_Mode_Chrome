chrome.runtime.onInstalled.addListener(function(){
	
	// Initially dark mode is "off" i.e stored `false`
	//  and Background is black and font is white
	settings = {
				'darkModeOn':false,
				'backgroundColor':'rgb(0,0,0)',
				'textColor':'rgb(255,255,255)'
			 	}

	chrome.storage.sync.set(settings,function(){
		console.log("Dark Mode Installed");
	});

});

