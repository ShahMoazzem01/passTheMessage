let messageIN = document.getElementById("messageInput");

messageIN.addEventListener("keydown",function(click){
  if(click.key == "Enter"){
    getMessage();
  }
});

function getMessage(){
  document.getElementById('messageOutput').innerHTML = messageIN.value;
  messageIN.value="";
}

