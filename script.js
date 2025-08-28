let HeartBtns = document.querySelectorAll('.heartBtn');
let copys = document.querySelectorAll('.copy');
let calls = document.querySelectorAll('.call');


let copyCount = document.getElementById('heartCount');
let heartClick = 0;
let copyClick = 0;
for (let HeartBtn of HeartBtns) {
    HeartBtn.addEventListener('click', function() {
        let HeartIcon = HeartBtn.querySelector('.heartBtn i');
        HeartIcon.classList.remove('fa-regular');
        HeartIcon.classList.add('fa-solid');
        HeartBtn.style.color = "red";
        heartClick++;
        let heartCount = document.getElementById('heartCount');
        heartCount.innerText = heartClick;

    });
}
for (let copy of copys) {
    copy.addEventListener('click', function() {
        let card = copy.closest('.card');
        let copyTitle = card.querySelector('.copyTitle');
        let phnNo = card.querySelector('.phnNo');
        let copyPhnno = phnNo.innerText;
        navigator.clipboard.writeText(copyPhnno);
        alert(copyTitle.innerHTML + 'NO. Copy Successfull')
        copyClick++;
        let copyCount = document.getElementById('copyCount');
        copyCount.innerText = copyClick

    });
}

for (let call of calls) {
    call.addEventListener('click', function() {
        let card = call.closest('.card');
        let Subtitle = card.querySelector('.cardSubtitle');
        let phnNO = card.querySelector('.phnNo');
        alert(`Calling ${Subtitle.innerText} ${phnNO.innerText}...`)


    })
}