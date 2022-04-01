
let val = 0;

function sub(){
  
  val = val-1;
  console.log(val)
  document.getElementById("display").innerHTML = val
}

function add(){
  
  val = val+1;
  console.log(val)
  document.getElementById("display").innerHTML = val
}

function buy(){
  let amount = document.getElementById("display").innerHTML;
  document.getElementById("cartValue").innerHTML = amount;
}




// 





