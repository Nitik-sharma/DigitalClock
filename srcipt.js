let hrs=document.getElementById("hrs");
let mins=document.getElementById("mins");
let sec=document.getElementById("sec");
let btn1=document.querySelector(".btn");
let show=document.getElementById("btn");
let container=document.querySelector(".container")
setInterval(()=>{
    let time=new Date();
// console.log(time);
let hr=time.getHours();
// console.log(hr)
let min=time.getMinutes();
let secs=time.getSeconds();
if(hr<10){
    hrs.innerHTML=`0${hr}`;
}else{
    hrs.innerHTML=`${hr}`;
}
if(min<10){
    mins.innerHTML=`0${min}`;
}else{
    mins.innerHTML=`${min}`;
}
if(secs<10){
    sec.innerHTML=`0${secs}`;
}else{
    sec.innerHTML=`${secs}`;
}
},1000)

show.addEventListener("click",()=>{
    console.log("hello")
    btn1.style.display="none";
    container.style.display="block";

})