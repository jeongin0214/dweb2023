<!DOCTYPE html>
<html>
<head>
  <meta charset="euc-kr">
  <title> 위험성평가seo jeong in </title>
  <link rel "stylesheet" href = "css/style.css">
<style>

@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');

* {
  margin :0 ; 
  padding 0 ; 
  box-sizing : borer-box;
}

ul {
  list-style : none ; 
} 

#container {
  margin : 0 auto ; 
  width : 100%;
}

header { 
  width : 100% ;
  height : 90px;
  background-color : #EFEEEF;
}

#logo { 
  float : left ; 
  width : 500px; 
  height : 80px ; 
  font-family: 'Lobster', cursive;
  line-height : 100px ; 
  padding-left : 50px ;  
}

# logo h1 { 
  font-family: 'Lobster', cursive;
  font-weight : 700; 
  font-size : 40px ; 
} 

nav { 
  float : left ; 
  width : 100%; 
  height : 0px; 
  padding-top : 0px; 
}

.collapsible {
            background-color: #777;
            color: white; 
            cursor: pointer;
            padding: 18px;
            width: 100%;
            border: none;
            text-align: center;
            outline: none;
            font-size: 22px;
        }
.active,
.collapsible:hover {
            background-color: #555;
        }
.content {
            padding: 0 18px;
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.2s ease-out;
            background-color: #f1f1f1;
        }
.collapsible:after {
            content: '\002B';
            color: white;
            font-weight: bold;
            float: right;
            margin-left: 5px;
        }
.active:after {
            content: "\2212";

#slideShow { 
  clear : both ; 
  width : 30% ;
  height : 300px ; 
  overflow : hidden; 
  positon : relative;
}
#slides {
  position : absolute ; 
}

#slides > img { 
  width : 60% ;
  float : center; 
  height : 300px; 
 
}

button {
  positon : absolute ; 
  height : 100% 
  top : 0; 
  border : none ; 
  padding : 20px ; 
  background-color : transparent ; 
  color : #000 ; 
  font-weight : 800 ; 
  font-size : 24px ; 
  opacity : 0.5 ; 
} 
#prev {
  left : 0 ; 
}

#next { 
   right :0 ; 
}
 
button : hover { 
  background-color : #222
  color : #fff;
  opacity : 0.6 ; 
  cursor : pointer ; 
}

button : focus {
  outline : 0 ; 
} 

# contents {
  width : 100% ; 
  height : 300px ; 
}
#tabMenu { 
  float : left ; 
  width : 600px ; 
  height : 100% ;
  background-color : #5F5969;
}

#links { 
  float : right ; 
  width : 600px ; 
  height : 100% ; 
}

#links ul {
padding : 0 ; 
overflos : hidden ; 
}
#links ul li {
 float : left ; 
 width : 100% 
 text-align : center; 
 margin : 10px 0 ; 
} 
#links ul li a span {
  display : block ; 
  margin : 0 auto ; 
  width : 150px ; 
  height : 150px ; 
  border-radius : 100%; 
  border : 1px solid #ddd; 
  line-height : 150px;
}
#quick-icon1{
  background-color : #816F9D;
}
#links ul li a p {
  margin-top : 15px; 
  font-weight : 600;
  color : #666; 
}
#prev { 
  left : 0 ; 
}
#next {
  right : 0 ; 
}
button: hover{
   background-color : #222; 
   color : #fff; 
   opacity : 0.5 ; 
   cursor : pointer; 
}
button: focus {
  outline : 0; 
} 
footer { 
   background-color :  #EFEEEF;
    width : 100% ; 
    height : 120px ; 
    border-top : 3.5px solid #969697; 
    bottom : 0px; 
    position :absolute; 
    font-size : 11px ;
    border-top : 1px
    solid: #c4c4c4 ; 
    font-size : 11px ;
} 
footer a { 
    display : inline-block; 
    margin : 0 60px 10px 60px; 
    width : 100% 
    color : #392656; 
    font-size : 15px ;
    font-weight : bold ;
  }
  
footer p {
    margin-top : 0;
    margin-bottom : 0; 
    font-size : 12px; 
    font-align : center;
    font-color : #0B0A0E; 
  }
  
footer p span{
    display: inline-block ; 
    margin-left : 60px ;
  }

  
        }
table {
  width : 100%;
  text-align : center; 
  font-size: 20px;
} 
tr {
   border : 1px solid #C6C5C8; 
   padding :100px ; 
} 
</style> 



<script> 
var slides = documents.querrySelectorAll("#slides > img") ; 
var prev = document.getElementById("prev"); 
var next = document.getElementById("next");
var current = 0; 

showSlides(current); 
prev.onclick = prevSlide ; 
next.onclick = nextSlide; 

function showSlides(n) { 
  for (var i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block"; 
} 

function prevSlide(){
  if (current > 0) current -= 1 ; 
  else current = slides.length - 1 ; 
  showSlides(current) ;  
}

function nextSlide() {
  if (current < slides.length - 1 ) current += 1 ; 
    else current = 0 ; 
      showSlides(current);
}
        function collapse(element) {
            var before = document.getElementsByClassName("active")[0]               // 기존에 활성화된 버튼
            if (before && document.getElementsByClassName("active")[0] != element) {  // 자신 이외에 이미 활성화된 버튼이 있으면
                before.nextElementSibling.style.maxHeight = null;   // 기존에 펼쳐진 내용 접고
                before.classList.remove("active");                  // 버튼 비활성화
            }
            element.classList.toggle("active");         // 활성화 여부 toggle

            var content = element.nextElementSibling;
            if (content.style.maxHeight != 0) {         // 버튼 다음 요소가 펼쳐져 있으면
                content.style.maxHeight = null;         // 접기
            } else {
                content.style.maxHeight = content.scrollHeight + "px";  // 접혀있는 경우 펼치기
            }
        }
</script> 

</head> 
<body>
<div id = "container">
<header>
  <div id = "logo">
    <a href = "#" > 
      <h1> TBM : for safety of human </h1> 
    </a> 
  </div> 
  
 <nav> 
    <ul id = "topMenu"> 
    <button type="button" class="collapsible" onmouseover="collapse(this);"> 
       &emsp; &emsp; &emsp; <a href = "#"> OHSMS란</a>  &emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <a href = "#"> TBM  </a> &emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        <a href = "#"> 자료실  </a> &emsp; &emsp; &emsp;
    </button> 
      <div class="content">
        <table> 
          <tr> </tr>
          <tr>  
            <td>관련법규 </td> <td>자율안전보건제도 </td> <td>예시 </td> 
          </tr> 
          <tr>  
            <td> 11 </td> <td>22 </td> <td> 사업장별 특성</td> 
          </tr> 
          <tr> </tr> 
        </table> 
      </div> 
       
  </nav> 
  
</header>

<div id = "slideShow">
  <div id = "slides">
    <img src ="C:\Users\jungi\OneDrive\바탕 화면\프로젝트\img01.jpg" alt=""> 
    <img src ="C:\Users\jungi\OneDrive\바탕 화면\프로젝트\img02.jpg" alt=""> 
    <img src ="C:\Users\jungi\OneDrive\바탕 화면\프로젝트\img03.jpg" alt=""> 
    
    <button id= "prev"> &lang; </button> 
    <button id = "next"> &rang; </button>
</div> 

<div id= "contents">
  <div id = "tabMenu">
  
  </div>
  
  <div id= "links"> 
   <ul> 
    <li> 
    <a href = "#"> 
      <span id = "quick-icon1"> </span> 
      <p> TBM 시작하기 </p> 
    </li>
   </ul> 
  </div>

</div>   
  
  
<footer>
 <div>      
    <a> | 관련 사이트 | </a> 
    <a href = "https://www.kosha.or.kr/kosha/index.do" target= "_blank"> 한국산업안전공단 </a>  
    <a href = "https://safety.seoultech.ac.kr" target= "_blank"> 서울과학기술대학교 안전공학과</a> 
    <a href = "https://www.safety1st.news/ " target= "_blank">세이프티퍼스트닷뉴스 </a> 
  </div> 

  <p>
    <span> 제작자 : 서정인 </span> <br/> 
    <span> 이메일 : jungin0214@naver.com </span> <br/>
    <span> &ensp; &emsp; &emsp; april021400@seoultech.ac.kr </span> <br/>
    <span> 동적웹사이트를위한웹프로그래밍 프로젝트 - 2023년도 </span> <br/>
  </p> 
</footer> 


</div>    
</body> 

<html> 
  
