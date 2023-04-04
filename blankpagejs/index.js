var x = window.open('','_blank');
var doc = x.document;
var ifrSrc =''


if(window.location.href.includes('?url=')){
    ifrSrc=window.location.href.substring(window.location.href.indexOf("?url=") + 5)
}


var iframe = doc.createElement('iframe');
iframe.src=ifrSrc
iframe.style.height='100%'
iframe.style.width='100%'
iframe.style.border='none'
doc.body.appendChild(iframe)
