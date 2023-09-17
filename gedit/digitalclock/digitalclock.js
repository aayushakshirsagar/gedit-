const clock =document.querySelector('#clock')
//Alternate Method
//const clock = document.getElementById('clock')
//let date = new Date()
//console.log(date.toLocaleTimeString());//timestamp is visible on the console if added here
//give method and interval to the setinterval, it will run the function
setInterval(function(){
    let date = new Date()
    clock.innerHTML = date.toLocaleTimeString();
   

}, 1000);//The value will be printed after every 1000ms i.e 1s
