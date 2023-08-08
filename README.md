
<head>
<meta charset=utf-8">
<title> 위험성평가seo jeong in </title>
    <style href= "style top">
        .collapsible {
            float : left; 
            background-color: #777;
            color: white;
            cursor: pointer;
            padding: 18px;
            width: 23%;
            height : 55px;
            border: none;
            justify-content : center;  
            outline: none;
            font-size: 15px;
            display : inline-block;
            
        }
        .active,
        .collapsible:hover {
            background-color: #555;
        }
        .content {
            padding: 0 18px;
            width : 100%; 
            max-height: 0;
            overflow: hidden;
            transition: max-height 0.2s ease-out;
            background-color: #F5F5F6;
        }
        .collapsible:after {
            float : left; 
            content: '\002B';
            color: white;
            font-weight: bold;
            float: left;
            margin-left: 5px;
        }
        .active:after {
            content: "\2212";
        }
        
 #wrap {
    position : relative ; 
    width : 100% 
    min-height : 100vh  ;
    background-color : #f2f2f2; 
  }
  
  footer { 
    background-color : #D6D5D9;
    width : 100% ; 
    height 90px ; 
    bottom : 0px; 
    position : absolute; 
    font-size : 11px ;
    border-top : 1px
    solid: #c4c4c4 ; 
    font-size : 11px ; 
  } 
  
  section {
    padding-bottom : 105px;
  }
  
  html,body{
    margin : 0; 
    padding : 0; 
  }

  footer a { 
    display : inline-block; 
    margin : 0 60px 10px 60px; 
    color : #392656; 
    font-size : 18px ;
    font-weight : bold ;
  }
  
  footer p {
    margin-top : 0;
    margin-bottom : 0; 
    font-size : 15px; 
    font-align : center;
    font-color : #0B0A0E; 
  }
  
  footer p span{
    display: inline-block ; 
    margin-left : 60px ;
  }
  
  </style>
    
 <script>
      
      function collapse(element) {
            var before = document.getElementsByClassName("active")[0]               // 기존에 활성화된 버튼
            if (before && document.getElementsByClassName("active")[0] != element) {  // 자신 이외에 이미 활성화된 버튼이 있으면
                before.nextElementSibling.style.maxHeight = null;   // 기존에 펼쳐진 내용 접고
                before.classList.remove("active");                  // 버튼 비활성화
            }
            element.classList.toggle("active");         // 활성화 여부 toggle

            var content = element.nextElementSibling;
            if (content.style.maxHeight != 0) {         // 버튼 다음 요소가 펼쳐져 있으면
                mzmcontent.style.maxHeight = null ;

                         // 접기
            } else {
             
                content.style.maxHeight = content.scrollHeight + "px";  // 접혀있는 경우 펼치기
              
            }
        }
      
    </script>
</head>

<body>
<div id = 'wrap'>
<section> 
    <h2> 위험성평가 : for safety </h2>
    
    <button type="button" class="collapsible"  onmouseover="collapse(this);" >
      OHSMS 소개</button>
    <div class="content">
        <li> ohsms의 정의 </li> 
        <li> 관련 법규 </li> 
        <li> 사업주 준수 사항  </li> 
        <li> 직원 준수 사항 </li> 
    </div>
    
    <button  type="button" class="collapsible"  onmouseover="collapse(this);"  >TBM</button>
    <div class="content">
        <li> TBM 정의 </li> 
        <li> TBM 효과 </li> 
        <li> TBM 예시 </li> 
    </div>
    
    <button type="button" class="collapsible" onmouseover ="collapse(this);" >위험성평가란</button>
    <div class="content">
        <li> 위험성평가의 개요 </li> 
        <li> 사업장 특징에 따른 위험성 평가 </li> 
        <li> 위험성평가 종류</li> 
    </div>
    
    <button type="button" class="collapsible" onmouseover="collapse(this);" >자료실</button>
    <div class="content">
        <li> 참고한 책 </li> 
        <li> 추천 강좌 </li> 
    </div>
  <h1  > footer 시험입니다. </h1>
  <h1> footer 시험입니다. </h1>
  <h1> footer 시험입니다. </h1>
  <h1> footer 시험입니다. </h1><h1> footer 시험입니다. </h1>
  <h1> footer 시험입니다. </h1>
  <h1> footer 시험입니다. </h1>
  <h1> footer 시험입니다. </h1>
  <h1> footer 시험입니다. </h1><h1> footer 시험입니다. </h1>
  <h1> footer 시험입니다. </h1>
  <h1> footer 시험입니다. </h1>
    
  </section> 
  
<footer> 
  <nav>      
    <a> | 관련 사이트 | </a> 
    <a href = "https://www.kosha.or.kr/kosha/index.do" target= "_blank"> 한국산업안전공단 </a>  
    <a href = "https://safety.seoultech.ac.kr" target= "_blank"> 서울과학기술대학교 안전공학과</a> 
  </nav> 

  <p>
    <span> 제작자 : 서정인 </span> <br/> 
    <span> 이메일 : jungin0214@naver.com </span> <br/>
    <span> &ensp; &emsp; &emsp; april021400@seoultech.ac.kr </span> <br/>
    <span> 동적웹사이트를위한웹프로그래밍 프로젝트 - 2023년도 </span> <br/>
  </p> 

</footer> 
</div> 
</body>
</html>
