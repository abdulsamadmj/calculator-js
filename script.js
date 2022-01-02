function buttonClick(val){
    if(document.getElementById("screen").value=="undefined"){
        document.getElementById("screen").value=null;
    }
    document.getElementById("screen").value+=val;

}

function clearScreen(){
    document.getElementById("screen").value=null;
}

function equalClick(){
   var text=document.getElementById("screen").value;
   try{
    var result=eval(text);
   }
   catch(err){
       document.getElementById("screen").value= err.message;
   }
   document.getElementById("screen").value=result; 
}