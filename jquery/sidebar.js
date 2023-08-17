
var menuids=["sidebarmenu1"] //메인ul에 id를 입력, 콤마에의해 분리시킴

function initsidebarmenu(){
for (var i=0; i<menuids.length; i++){
  var ultags=document.getElementById(menuids[i]).getElementsByTagName("ul")
    for (var t=0; t<ultags.length; t++){
    ultags[t].parentNode.getElementsByTagName("a")[0].className+=" subfolderstyle"
  if (ultags[t].parentNode.parentNode.id==menuids[i]) //if this is a first level submenu
   ultags[t].style.left=ultags[t].parentNode.offsetWidth+"px" // 첫번째 서브메뉴를 메인메뉴와 함께 있도록 위치시킴
  else //else if this is a sub level submenu (ul)
    ultags[t].style.left=ultags[t-1].getElementsByTagName("a")[0].offsetWidth+"px" //메뉴를 우측에 위치시킴
    ultags[t].parentNode.onmouseover=function(){
    this.getElementsByTagName("ul")[0].style.display="block"
    }
    ultags[t].parentNode.onmouseout=function(){
    this.getElementsByTagName("ul")[0].style.display="none"
    }
    }
  for (var t=ultags.length-1; t>-1; t--){          //스크롤바 발생방지용으로 메뉴를 안보이게함.
  ultags[t].style.visibility="visible"
  ultags[t].style.display="none"
  }
  }
}

if (window.addEventListener)
window.addEventListener("load", initsidebarmenu, false)
else if (window.attachEvent)
window.attachEvent("onload", initsidebarmenu)

