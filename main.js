const mainMessage = document.getElementById("mainMessage");
const nextPageBtn = document.getElementById("nextPageBtn");

const messages = ["Happy Birthday!!!", "As you can see I have prepared something for you.", "BUT! just because it's your birthday, doesn't mean everything's gonna be easy today...", "To get your gift you're gonna have to complete 3 'challenges'.", "After each challenge you're receive a reward - your actual gift.", "I promise they aren't *very* hard.", "Without further ado, I wish you all the best and goodluck!!! <3"];

let msgId = 0;
mainMessage.innerHTML = messages[msgId];

function nextMessage(){
    msgId++;
    if(msgId == messages.length - 1){
        nextPageBtn.style.display = 'block';
    }
    mainMessage.innerHTML = messages[msgId];
}
function previousMessage(){
    nextPageBtn.style.display = 'none';
    if(msgId - 1 < 0){
        msgId = 0;
    }else{
        msgId--;
    }
    mainMessage.innerHTML = messages[msgId];
}
