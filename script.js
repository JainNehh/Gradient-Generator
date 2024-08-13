let btn1=document.getElementById("mybtn");
let btn2=document.getElementById("mybtn2");
let copy=document.querySelector(".copycode");

let rgb1="#004773";
let rgb2="#54d542";
const hexvalues=()=>{
    let myhexavalues="0123456789abcdef";
    let colors="#";
    for(let i=0;i<6;i++)
    {
       colors=colors+myhexavalues[Math.floor(Math.random()*16)];
    }
return colors;
};



const handlebtn1=()=>{
rgb1=hexvalues();
console.log(rgb1);
document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},#444)`;
btn1.innerText=`${rgb1}`;
copy.innerHTML=`background-image: linear-gradient(to right,${rgb1},rgb(152,63,198))`;
btn1.style.backgroundImage=` linear-gradient(to right,${rgb1} , ${rgb1}`;
};

const handlebtn2=()=>{
 rgb2=hexvalues();
console.log(rgb2);
document.body.style.backgroundImage=`linear-gradient(to right,${rgb1},${rgb2})`;
btn2.innerText=`${rgb2}`;
copy.innerHTML=`background-image: linear-gradient(to right,${rgb1},${rgb2})`;
btn2.style.backgroundImage=`linear-gradient(to right,${rgb2},${rgb2})`;
 };

btn1.addEventListener("click",handlebtn1);
btn2.addEventListener("click",handlebtn2);

copy.addEventListener("click",()=>{
 navigator.clipboard.writeText(copy.innerText);
 alert("Text Copied ;)");
} );
