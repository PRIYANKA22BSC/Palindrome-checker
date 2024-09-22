    let body=document.querySelector("body");
    let div=document.querySelector("div");
    let input=document.querySelector("input");
    let checkbtn=document.querySelector("#checkbtn");
    let italic=document.querySelector("i");
    let clearbtn=document.querySelector("#clearbtn");
    let value="";
   
    checkbtn.addEventListener("click",()=>{
      value=input.value;
      let rev="";
    for(i=value.length-1;i>=0;i--){
        rev+=value[i];
    }
    if(value==rev)
        {
            italic.innerText=`${value} is palindrome`;
        }
        else
        {
            italic.innerText=`${value} is  not palindrome`;
        }
    });
    clearbtn.addEventListener("click",()=>{
     input.value="";
     italic.innerText="";

    });
