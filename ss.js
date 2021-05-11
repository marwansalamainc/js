 	var meta=document.createElement('meta');
 	meta.httpEquiv = "Content-Security-Policy";
 	meta.content = "upgrade-insecure-requests";
 	window.parent.document.getElementsByTagName('head')[0].appendChild(meta);
