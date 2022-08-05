var firstQuestion = prompt("1-savol. 'UTF-8' - ushbu qiymat nimani bildiradi? \n \n A. Kodirovka (html da belgilarni qo'llab-quvvatlash) \n B. Sarlavha qo'yishlik uchun \n C. Bilmadim");



var count = 0;


if(firstQuestion == "A" || firstQuestion == "a"){
  alert("to'g'ri")
  count = count + 1;
}
else{
  alert("Xato!")
}

var secondQuestion = prompt("2-savol. section`ga h2 berilmasa, validator`da qanday xatolik chiqadi? \n \n A. ReferenceError  \t \t B. Error! \t \t C. Warning")

if(secondQuestion == 'C'  || secondQuestion == 'c'){
  alert("to'g'ri");
  count = count + 1;
}
else{
  alert("Xato")
}

var thirdQuestion = prompt("3-savol. 'scroll-behavior: tmooth' - bu qanday qiymat? \n \n A. Bir qatorga sig'magan ma'lumotlarni qirqib, o'rniga 3 ta nuqta qo'yib beradi. \n B. Button, yoki link bosilganida kerakli joyga sekinroq yetkazib beradi. \n C. Bilmadim.");

if(thirdQuestion == 'B' || thirdQuestion == 'b'){
  alert("Ofarin! To'g'ri")
  count = count + 1;
}
else{
  alert("Afsuski, xato!")
}





var fourthQuestion = prompt("4-savol. Eng to'g'ri javobni belgilang;\n '<span></span>' va '<div></div>' teglarining farqi nima? \n \n A. span tegi inline element; \n B. div tegi block element \n  C. Ikkala javob ham to'g'ri" )

if(fourthQuestion == 'C' || fourthQuestion == 'c'){
  alert("Malades, to'g'ri");
  count = count + 1;
}
else{
  alert("Menimcha CSS ni takrorlaysiz shekilli, javobingiz xato")
}


var fivethQuestion = prompt("5-savol. \n content: '' property qaysi joyda qo'llaniladi? \n \n A. .tegNomi{align-content: center} \n B. Bilmadim, esimda yo'q \n C. .tegNomi::before{content: ''}")

if(fivethQuestion == 'C' || fivethQuestion == 'c'){
  alert("Judddda zo'r, to'g'ri")
  count = count + 1;

  alert("Jami to'plagan balingiz: " + count)
}
else{
  alert("Noto'g'ri")
  alert("Jami to'plagan balingiz: " + count)
}