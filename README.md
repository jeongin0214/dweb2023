<!DOCTYPE html>
<html>
<head>
<meta charset="EUC-KR">
<title> 위험성평가seo jeong in </title>
    <style href= "style">
       
    </style>
    
    <script>
        function collapse(element) {
            var before = document.getElementsByClassName("active")[0]              
            if (before && document.getElementsByClassName("active")[0] != element) {  
                before.nextElementSibling.style.maxHeight = null;  
                before.classList.remove("active");                 
            }
            element.classList.toggle("active");         

            var content = element.nextElementSibling;
            if (content.style.maxHeight != 0) {         
                content.style.maxHeight = null;         
            } else {
                content.style.maxHeight = content.scrollHeight + "px";  
            }
        }
    </script>
</head>

<body>
    <h2> 위험성평가 : for safety </h2>
    <button type="button" class="collapsible" onmouseover="collapse(this);"  onclick.window.location.href= " http://icrqa.com/icr/_system/system03.asp" >OHSMS 소개</button>
    <div class="content">
        <p>내용 1 입니다.</p>
    </div>
    
    <button  type="button" class="collapsible" onmouseover="collapse(this);">TBM</button>
    <div class="content">
        <p>내용 2 입니다.</p>
    </div>
    
    <button type="button" class="collapsible" onmouseover ="collapse(this);">위험성평가란</button>
    <div class="content">
        <p>내용 3 입니다.</p>
    </div>
    
    <button type="button" class="collapsible" onmouseover="collapse(this);">자료실</button>
    <div class="content">
        <p>내용 1 입니다.</p>
    </div>
</body>
</html>
