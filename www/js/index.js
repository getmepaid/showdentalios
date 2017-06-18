var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
	/*Using ajax*/
	$.ajax({
	  dataType:'html',
	  url:'http://www.showdental.com',
	  success:function(data) {
	    $('#ajax').html($(data).children());
	    alert("success");
	  }
	});
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
		document.addEventListener('offline', mustbeonline, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
       $('#Load').load('http://www.showdental.com');

	/*Using ajax*/
	$.ajax({
	  dataType:'html',
	  url:'http://www.showdental.com',
	  success:function(data) {
	    $('#ajax').html($(data).children());
	    alert("success");
	  }
	});
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};


function mustbeonline(event) {
	 navigator.notification.activityStop();
	 alert('Cannot connect to internet, you must be connected to use this application');
	 if(navigator.app){
        navigator.app.exitApp();
	}else if(navigator.device){
        navigator.device.exitApp();
	}
	exit(0);
}

function inAppBrowserbLoadStart(event) {
	
	 navigator.notification.activityStart("Please Wait", "Loading... Please wait");
	 //alert(event.type + ' - ' + event.url);
	
}
 
function inAppBrowserbLoadStop(event) {
	 navigator.notification.activityStop();
	 //alert(event.type );//+ ' - ' + event.url);
	
}

function inAppBrowserbLoadError(event) {
	 navigator.notification.activityStop();
	 alert(event.type + ' - ' + event.message);
}

function inAppBrowserbClose(event) {
	 //navigator.notification.activityStop();
	 //alert(event.type);
	 inAppBrowserbRef.removeEventListener('loadstart', iabLoadStart);
	 inAppBrowserbRef.removeEventListener('loadstop', iabLoadStop);
	 inAppBrowserbRef.removeEventListener('loaderror', iabLoadError);
	 inAppBrowserbRef.removeEventListener('exit', iabClose);
	 if(navigator.app){
        navigator.app.exitApp();
	 }else if(navigator.device){
        navigator.device.exitApp();
	 }
	 exit(0);
}
