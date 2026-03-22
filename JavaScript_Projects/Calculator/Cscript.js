function calculator(operator){

   let num1=Number(document.getElementById("num1").value);
  let num2= Number(document.getElementById("num2").value);
  let resultBox=document.getElementById("result");
//validation
if(num1==="" || num2===""){
    resultBox.innerHTML="<span class'error'>Please enter both numbers</span>";
    return;
}
num1 = Number(num1);
num2=Number(num2);
let result;
    if(operator ==='+'){
        result= num1+num2;

    }else if(operator==='-'){
        result=num1-num2;
    }
    else if(operator==='*'){
        result= num1*num2;
    }
    else if(operator==='/'){
       if(num2===0){
        resultBox.innerHTML="<span class ='error'> Can not divide by 0</span>";
        return;
       }
       result=num1/num2;
    }
    resultBox.innerHTML="Result :  "+ result;

}
function clearData(){
    document.getElementById("num1").value="";
     document.getElementById("num2").value="";
      document.getElementById("result").innerHTML="";
}
