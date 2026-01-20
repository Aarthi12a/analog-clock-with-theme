const showtime = document.querySelector('.time');
const btn =  document.querySelector('button');
const html = document.querySelector('html');
btn.addEventListener('click',()=>{
 btn.classList.toggle('dark');
 html.classList.toggle('dark');
if(btn.classList.contains('dark')){
    btn.innerText='light mode';
}else{
        btn.innerText='dark mode';

}


})
setTime();
function setTime() {
const time = new Date();
const hrs = time.getHours();
hr = hrs>=12? hrs-12 : hrs;
const min = time.getMinutes();
const sec= time.getSeconds();
const ampm = hrs>=12? 'PM' :'AM';

showtime.innerHTML = `${hr>9 ? hr : '0'+hr} : ${min>9 ?min :'0'+min} : ${sec>9 ?sec:'0'+sec} ${ampm}`
}

setInterval( setTime,1000)