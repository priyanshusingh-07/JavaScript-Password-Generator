const txt=document.getElementById('txt');
const btn=document.getElementById('btn')
const len=document.getElementById('txt-1')

function generatePassword(length){
    const char='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const num='1234567890'
    const symbol='!@#$%&*'
    let password='';
    for(let i=0; i<length;i++){
        const index1=Math.floor(Math.random()*char.length)
        const index2=Math.floor(Math.random()*num.length)
        const index3=Math.floor(Math.random()*symbol.length)
        password+=char[index1]
        password+=num[index2]
        password+=symbol[index3]
    }
    return password.slice(0,8)
}


function hello(){
    let result=generatePassword(8);
    console.log(result);
    txt.innerText=result;
    
}
