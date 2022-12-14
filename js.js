const Get=document.querySelectorAll("select");
const move=document.querySelector("#change");
const input=document.querySelector("#inpute");
const output=document.querySelector("#output_ans");
  function solve(...dat)
  {
     if(dat[2]!=="")
     {
      const a=parseInt(dat[2],dat[0]);
     const data=a.toString(dat[1]);
     return data;
     }
     else
     {
      return "first enter value";
     }

  }
const s=()=>{
    const from_value=Get[0].value;
    const to_value=Get[1].value;
    const user_input=input.value;
    move.classList.add("move");
    output.innerHTML=solve(from_value,to_value,user_input);
     setTimeout(()=>{
      move.classList.remove("move");
     },1000);

}
document.querySelector(".btn").addEventListener("click",s);

