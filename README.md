<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title> 위험성평가seo jeong in </title>
    <style href= "style">
        .collapsible {
            float : left; 
            background-color: #777;
            color: white;
            cursor: pointer;
            padding: 18px;
            width: 25%;
            height : 55px;
            border: none;
            justify-content : center;  
            outline: none;
            font-size: 15px;
            display : inline-flex;
            
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
                content.style.maxHeight = null;         // 접기
            } else {
                content.style.maxHeight = content.scrollHeight + "px";  // 접혀있는 경우 펼치기
            }
        }
    </script>
</head>

<body>
    <h2> 위험성평가 : for safety </h2>
    <button type="button" class="collapsible"  onmouseover="collapse(this);"
     window.location.href= " http://icrqa.com/icr/_system/system03.asp" >OHSMS 소개</button>
    <div class="content">
        <p>내용 1 입니다.</p>
    </div>
    
    <button  type="button" class="collapsible"  onmouseover="collapse(this);">TBM</button>
    <div class="content">
        <p>내용 2 입니다.</p>
    </div>
    
    <button type="button" class="collapsible" onmouseover ="collapse(this);">위험성평가란</button>
    <div class="content">
        <p>내용 3 입니다.</p>
    </div>
    
    <button type="button" class="collapsible" onmouseover="collapse(this);">자료실</button>
    <div class="content">
        <p>내용 4 입니다.</p>
    </div>
</body>
</html>
