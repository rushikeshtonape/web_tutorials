let screen = document.getElementById("input");
buttons = document.querySelectorAll("button");
let screenValue = " ";


for(item of buttons){
    item.addEventListener("click",(e)=>{
        buttonText = e.target.innerText;


        if(buttonText == "X"){
            buttonText = "*";
            screenValue = screenValue + buttonText;
           
            screen.value = screenValue;

        }
        else if(buttonText == "C"){
            screenValue = " ";
            screen.value = screenValue;
        }
        else if(buttonText == "←"){
            screenValue = " ";
            screen.value = screenValue;
        }
        else if (buttonText == "="){
            screen.value = eval(screenValue);
            // screenValue = screenValue + buttonText;
            
        }
        else {
            screenValue = screenValue + buttonText;
            screen.value = screenValue;
        }
    })
}