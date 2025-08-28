
let HeartBtn = document.querySelectorAll('.heartBtn');
let heartCount = document.getElementById('heartCount');
let heartClick = 0;
HeartBtn.addEventListener('click',function(){
    HeartBtn.style.color="red";
    heartClick++;
    heartCount.innerText = heartClick
    
})

