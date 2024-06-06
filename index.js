const captcha = document.querySelector('.captcha');
reloadBtn = document.querySelector('.reload-button');
inputField = document.querySelector('.input');
checkBtn = document.querySelector('.check-btn');
statusTxt = document.querySelector('.status-txt');



let allCharacters =[1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f','g','h','i','j','k','l',
                    'm','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K',
                     'L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];


function getCaptcha(){
for(let i = 0 ; i<6 ; i++) {
    let randomChar=allCharacters[Math.floor(Math.random()*allCharacters.length)];
    captcha.innerText += ` ${randomChar}`;
}
}
getCaptcha();
reloadBtn.addEventListener('click',()=>{
    captcha.innerText = '';
    getCaptcha();
});
checkBtn.addEventListener('click', e => {
    e.preventDefault();
    statusTxt.style.display = 'block';
    let inputVal = inputField.value.trim(); 
    console.log("Input Value:", inputVal);
    console.log("Captcha:", captcha.innerText);
    if (inputVal === captcha.innerText.trim()) { 
        statusTxt.style.color = '#4db2ec';
        statusTxt.innerText = 'Nice! You don\'t appear to be a robot.';
        setTimeout(() => {
            statusTxt.style.display = '';
            inputField.value = '';
            captcha.innerText = '';
        }, 3000);
        getCaptcha();
    } else {
    
        statusTxt.style.color = '#4db2ec';
        statusTxt.innerText = 'Captcha not matched. Please try again!';
    }
    setTimeout(() => {
        statusTxt.style.display = '';
        inputField.value = '';
        statusTxt.innerText = '';
    }, 3000);
});


