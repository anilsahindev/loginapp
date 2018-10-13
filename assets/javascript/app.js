function setFullImageSource(e) {
    e = e || window.event;
    e = e.target || e.srcElement;
    var url = e.getAttribute('data-full-url');
	document.getElementById("full-image").setAttribute("src", url);
}