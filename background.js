chrome.runtime.onInstalled.addListener(function(){
	
	chrome.storage.sync.set({'color':'#3aa757'},function(){
		console.log("Color became Green");
	});

	// conditions: [new chrome.declarativeContent.PageStateMatcher({
        //   pageUrl: {hostEquals: 'developer.chrome.com'},
        // })
        // ],
	// chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
	// 	chrome.declarativeContent.onPageChanged.addRules([{
	// 	    actions: [new chrome.declarativeContent.ShowPageAction()]
	// 	}]);
 //    });

});

