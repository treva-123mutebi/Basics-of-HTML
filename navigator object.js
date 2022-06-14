// JavaScript Document
function display_browser() {
	document.write("browser name " +navigator.appName+ " " <br/>);
	document.write("browser version " +navigator.appVersion+ " " <br/>);
	document.write("browser language " +navigator.browserLanguage+ " " <br/>);
	document.write("Platform " +navigator.platform+ " " <br/>);
	if(navigator.cookieEnabled) {
		document.write("Cookie is enabled in the broswer.");
	}
}