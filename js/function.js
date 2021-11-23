function humber(){
    dropdwon = document.getElementsByClassName("navDropdwon");
    l1 = document.getElementById("line-1");
    l2 = document.getElementById("line-2");
    l3 = document.getElementById("line-3");
    if (dropdwon[0].style.display === 'none') {
        dropdwon[0].style.display = 'block';
        l1.style.marginTop = '3px';
        l1.style.transform = 'rotate(45deg)';
        l2.style.display = 'none';
        l3.style.marginTop = '-3px';
        l3.style.transform = 'rotate(-45deg)';
    }else{
        dropdwon[0].style.display = 'none';
        l1.style.marginTop = '0px';
        l1.style.transform = 'rotate(0deg)';
        l2.style.display = 'block';
        l3.style.marginTop = '10px';
        l3.style.transform = 'rotate(0deg)';
    }
}