 const changeText=function(){
    document.querySelector('h2').innerHTML="i love javascript";
 
 }
 const changeMe=setTimeout(changeText,3000);
 document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(changeMe);
    console.log("stopped");
 })

