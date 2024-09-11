let body=document.querySelector("body");
    let div=document.querySelector("div");
    let input=document.querySelector("input");
    let btn=document.querySelector("button");
    let italic=document.querySelector("i");
    let value="";
   
    btn.addEventListener("click",()=>{
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
       
    })