<!-- // NETSCAPE RESIZE FIX
function MM_reloadPage(init) {  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);
//-->


<!-- // DISABLES SELECTION
function disableselect(e)	{return false}
function reEnable()		{return true}
document.onselectstart=new Function ("return false")
if (window.sidebar)
{document.onmousedown=disableselect
document.onclick=reEnable}
-->