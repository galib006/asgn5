let HeartBtns = document.querySelectorAll('.heartBtn');
let copys = document.querySelectorAll('.copy');
let calls = document.querySelectorAll('.call');
let clearSideHistory = document.getElementById('clearSideHistory');


let copyCount = document.getElementById('heartCount');
let heartClick = 0;
let copyClick = 0;
let coinCount = 100;
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
        let copyTitle = card.querySelector('.copyTitle');
        let phnNO = card.querySelector('.phnNo');
        let coin = document.getElementById('coin');

        console.log(coinCount);

        if (coinCount < 20) {
            alert("Insufficiant Coin");
            return;
        }

        alert(`Calling ${Subtitle.innerText} ${phnNO.innerText}...`)
        coinCount -= 20;

        coin.innerText = coinCount;
        let sideBody = document.querySelector('.rightContetBody');

        let singleContent = document.createElement('div');
        singleContent.classList.add('rightSideCont', 'mt-4');
        singleContent.innerHTML = `
        <div class="singleCont bg-[#fafafa] rounded-xl p-5 flex items-center justify-between">
                            <div class="rightcontHead">
                                <h3 class="text-lg font-semibold hind-madurai-semibold">
                                    ${copyTitle.innerHTML}
                                </h3>
                                <p class="phnNo text-lg text-[#5C5C5C]">${phnNO.innerHTML}</p>
                            </div>
                            <div class="contentArea">
                                <p class="time text-lg">${new Date().toLocaleTimeString('en-GB')}</p>
                            </div>
                        </div>
        
        
        `;
        sideBody.appendChild(singleContent)
    })
}
clearSideHistory.addEventListener('click', function() {
    let sideBody = document.querySelector('.rightContetBody');
    return sideBody.innerHTML = "";

})