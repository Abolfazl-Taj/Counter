let counter = document.querySelector("#saver");
let mines = document.getElementById("nagetive");
let reset = document.getElementById("reset");
let pluse = document.getElementById("pluse");
let adad = 0;
mines.addEventListener("click" , () =>{
  adad--;
  counter.innerHTML = `${adad}`;
  counter.style.color = `rgb(61, 0, 0)`
  if(adad < 0) counter.style.backgroundColor= "red"; 
    else if(adad > 0) counter.style.backgroundColor= "green";
    else{
      counter.style.color= "white";
      counter.style.backgroundColor= "transparent";
    }
})
reset.addEventListener("click" , () =>{
  adad = 0;
  counter.innerHTML = `${adad}`;
  if(adad < 0) counter.style.backgroundColor= "red"; 
  else if(adad > 0) counter.style.backgroundColor= "green";     
  else{
    counter.style.color= "white";
    counter.style.backgroundColor= "transparent";
  }
})
pluse.addEventListener("click" , () =>{
  adad++;
  counter.innerHTML = `${adad}`;
   counter.style.color= "  rgb(1, 37, 1)"; 
  if(adad < 0) counter.style.backgroundColor= "red"; 
  else if(adad > 0) counter.style.backgroundColor= "green";
  else{
    counter.style.color= "white";
    counter.style.backgroundColor= "transparent";
  }
})

