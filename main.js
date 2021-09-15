/*slider*/
let slidecontent = document.querySelectorAll('.slidecontent');
console.log(slidecontent);
let btnnext = document.querySelector('.Next');
let btnpre = document.querySelector('.Pre');
let Cate = document.querySelector('.category-box .categorycontent:first-child');
let btnCate = document.querySelector('.category button');
let status2 = 1;
btnCate.onclick = () => {
    Cate.style.opacity = (status2 == 1) ? '1' : '0';
    Cate.style.visibility = (status2 == 1) ? 'visible' : 'hidden';
    status2 = (status2 == 1) ? 2 : 1;
    console.log('hello');
}
// console.log(btnpre);
let i = 0;
let count = 0;
let trangthai = 'dungyen';
autoslide();
btnnext.onclick = () => {
    if (trangthai == 'chuyendong') {
        return false;
    }
    trangthai = 'chuyendong';
    let chisohientai = slidecontent[i];
    i = (i < slidecontent.length - 1) ? i + 1 : 0;
    console.log(i);
    chisohientai.classList.add('ani1');
    chisohientai.classList.remove('active');
    slidecontent[i].classList.add('ani2');
    // slidecontent[i].classList.add('active');
}
btnpre.onclick = () => {
    if (trangthai == 'chuyendong') {
        return false;
    }
    trangthai = 'chuyendong';
    let chisohientai = slidecontent[i];
    i = (i > 0) ? i - 1 : slidecontent.length - 1;
    console.log(i);
    chisohientai.classList.add('ani3');
    chisohientai.classList.remove('active');
    slidecontent[i].classList.add('ani4');
    // slidecontent[i].classList.add('active');
}
for (let a = 0; a < slidecontent.length; a++) {
    slidecontent[a].addEventListener('webkitAnimationEnd', () => {
        trangthai = 'dungyen';
        slidecontent[a].classList.remove('ani1');
        slidecontent[a].classList.remove('ani2');
        slidecontent[a].classList.remove('ani3');
        slidecontent[a].classList.remove('ani4');
        slidecontent[i].classList.add('active');
    })
}



function autoslide() {
    if (trangthai == 'chuyendong') {
        return false;
    }
    trangthai = 'chuyendong';
    let chisohientai = slidecontent[i];
    i = (i < slidecontent.length - 1) ? i + 1 : 0;
    console.log(i);
    chisohientai.classList.add('ani1');
    chisohientai.classList.remove('active');
    slidecontent[i].classList.add('ani2');
    setInterval(autoslide, 3000);
}