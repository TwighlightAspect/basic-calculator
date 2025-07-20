function inputChar(button)
{
    var inputfield = document.getElementById("tocalculate");
    if (validInput(inputfield.value,button.textContent)) inputfield.value = inputfield.value + button.textContent;
    //console.log("Added "+button.textContent+" to input field");
    //console.log("Current input field value: "+document.getElementsByClassName("tocalculate")[0].value);
    
}

function validInput(inp,newchar)
{
    var operations = "+-/*"
    //console.log(inp[inp.length-1]);
    if (operations.includes(inp[inp.length-1]) && operations.includes(newchar)||operations.includes(newchar)&&inp =="") return false;
    return true;
    
}

function applyOperator(add,sub,mult,div,num1,num2)
{
    if(add) {num1 = String(parseFloat(num1)+parseFloat(num2)); add =false;}
    else if(sub) {num1 = String(parseFloat(num1)-parseFloat(num2)); sub =false;}
    else if(mult) {num1 = String(parseFloat(num1)*parseFloat(num2)); mult =false;}
    else if(div) {num1 = String(parseFloat(num1)/parseFloat(num2)); div =false;}
    console.log("num after operator: "+num1);
    return num1;
}

function getResult(inp)
{
    if(!isNaN(inp.value)) return inp.value;
    if("+-*/".includes(inp.value.charAt(inp.value.length-1))) return "Invalid Input!";

    let nums ="";
    var final = 0;
    var firstnum = false;
    var add,sub,mult,div = false;

    for(let s of inp.value)
    {
        console.log(s);
        if((!isNaN(s))||s==".") 
        {
            nums += s;
            console.log("Adding to num string");
        }
        else
        {
            if(add||sub||mult||div)
            {
                // if(add) {final = String(parseFloat(final)+parseFloat(nums)); add =false;}
                // else if(sub) {final = String(parseFloat(final)-parseFloat(nums)); sub =false;}
                // else if(mult) {final = String(parseFloat(final)*parseFloat(nums)); mult =false;}
                // else if(div) {final = String(parseFloat(final)/parseFloat(nums)); div =false;}
                if(nums!="") final = applyOperator(add,sub,mult,div,final,nums);
                console.log("Post op: "+final);
            }
            if(firstnum == false)
            {
                firstnum = true;
                final = nums;
                nums="";
                console.log("Initial value: "+final);
                
            }
            if(s=="+"){add = true;nums="";console.log("will add in future");}
            else if(s=="-") {sub=true;nums="";}
            else if(s=="*") {mult = true;nums="";}
            else if(s=="/") {div = true;nums="";}
            
        }
        console.log("end of loop");
        
    }
    final = applyOperator(add,sub,mult,div,final,nums);
    console.log(final);
    return final;
    
}


function returnResult()
{
    var inputfield = document.getElementById("tocalculate");

    if(inputfield.value!=""){
        var resultfield = document.getElementById("answer");
        resultfield.innerHTML = "Result: " + String(getResult(document.getElementById("tocalculate")));
        inputfield.value ="";
    }
    

}