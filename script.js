function counter(str){
    let alphaCount = 0;
    let numberCount = 0;
    let charCount = 0;
    let spaceCount = 0;
    let linesCount = 0;
    for(let i=0; i<str.length; i++){
        if(str[i]!='' && str[i]!='\n'){
            charCount++;
        }
        if((str[i]>='a' && str[i]<='z') || (str[i]>='A' && str[i]<='Z')){
            alphaCount++;
        }
        if(str[i]>='0' && str[i]<='9'){
            numberCount++;
        }
    }

    document.getElementById("chars").value = charCount;
    document.getElementById("alphabets").value = alphaCount;
    document.getElementById("numbers").value = numberCount;
    document.getElementById("lines").value = str.split(/\r\n|\r|\n/).length;
    document.getElementById("space").value = str.split(" ").length - 1;
}

function getWordCount(str){
    let splited = str.trim().split(/\s+/);
    if(splited == ''){
        return 0;
    }
    return splited.length;
}
function wordCounter(){
    let inputText = document.getElementById("inputBox");
    let words = getWordCount(inputText.value);
    document.getElementById("words").value = words;
    counter(inputText.value);
}

const resets = document.querySelector("#resets");
    const inputs =document.querySelectorAll("textarea");
    resets.addEventListener("click",function(){
        inputs.forEach(input => input.value ='');
        document.getElementById("chars").value = 0;
        document.getElementById("alphabets").value = 0;
        document.getElementById("numbers").value = 0;
        document.getElementById("words").value = 0;
        document.getElementById("lines").value = 0;
    });

const copy = document.querySelector("#copy");
    copy.addEventListener("click",function(){
        const inputBox = document.querySelector(".txt"); 
        inputBox.select();
        document.execCommand("copy");
    });









































// var a = 0;
//     function count(){
//     a = a + 1;
//     document.getElementById("demo").innerHTML = a;

// const copy = document.querySelector("#copy");
// const paste = document.querySelector("#paste");
// const clear = document.querySelector("#resets");
// const inputs =document.querySelectorAll("input");

// copy.addEventListener("click",function(){
//     const txt = document.querySelector(".txt"); 
//     txt.select();
//     document.execCommand("copy");
// });

// paste.addEventListener("click",function(){
//     navigator.clipboard.readText().then(cliptext =>            
//     (document.getElementById("clipboard-paste").innerText = cliptext),
//     err => console.log(err)
//     );
// });

// clear.addEventListener("click",function(){
//      inputs.forEach(input => input.value ='');
// });