let inputText = document.querySelector('input[type="text"]'),
    submitBtn = document.querySelector('.submit'),
    chatsDiv = document.querySelector('.typed');

inputText.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
    const paragraph = `
        <p class="outgoing">${inputText.value}</p>
    `
    chatsDiv.insertAdjacentHTML('beforeend', paragraph);
    inputText.value = '';    
    }
});

submitBtn.addEventListener("click", function(){
    const paragraph = `
        <p class="outgoing">${inputText.value}</p>
    `
    chatsDiv.insertAdjacentHTML('beforeend', paragraph);
    inputText.value = '';    
});