const item = document.querySelector('.container')
console.log(item);
const item2 = document.getElementsByTagName('li')
console.log(item2);
const item3 = document.querySelector('.list')
item3.style.color='green'
console.log(item3);

const item4 = document.querySelectorAll('li')
// item4.hover.style.cursor = 'pointer'


for(let i=0; i<item4.length ;i++){
    item4[i].addEventListener('mouseover',()=>{
        item4[i].style.cursor='pointer'
    })
//    item4[i].style.color='blue'
}
item3.style.color='white'
console.log(item3);

const butt = document.querySelector('.bt')

// butt.style.backgroundColor= 'wheat'
butt.style.border = '0px solid red'; 

const ft = document.querySelector('#football')
function fb(){
    ft.innerText='football Clicked'
    console.log(ft)
    setTimeout (function(){
        ft.innerText='football'
    },4000)
}

const bas = document.querySelector('#basketball')
bas.addEventListener('click',()=>{
    bas.innerText='basketball Click'
    console.log(bas)
    setTimeout (function(){
        bas.innerText='basketball'
    },4000)
})
const golf = document.querySelector('#golf')
golf.addEventListener('click',()=>{
    golf.innerText='golf Clicked'
    console.log(golf)
    setTimeout (function(){
            golf.innerText='golf'
        },4000)
    })
    
const item5 = document.createElement('li')
item5.innerText='boxing'
item3.append(item5)
item5.setAttribute('id' ,'boxing')
const boxing = document.getElementById('boxing')
boxing.addEventListener('click',()=>{
    boxing.innerText='boxing Clicked'
    console.log(boxing)
    setTimeout (function(){
            boxing.innerText='boxing'
    },4000)
})

boxing.addEventListener('mouseover',()=>{
    boxing.style.cursor='pointer'
})
// const bton= document.getElementById()

// const 
// function bas(){
//     bas.innerText='basketball Click'
//     console.log(bas)
//     setTimeout (function(){
//             ft.innerText='basketball'
//     },4000)}




// onsole.log(item5);
butt.innerText='tennis'
butt.style.fontFamily = "Arial, Helvetica, sans-serif";
butt.addEventListener('click',()=>{
    butt.innerText='tennis Clicked'
    setTimeout(function(){
        butt.innerText='tennis'
    },4000);
})
const box=document.querySelector('.container')
// box.style.backgroundColor='wheat'
box.style.textAlign='center'


butt.setAttribute('id', 'murtaz')
butt.removeAttribute('id')
item5.setAttribute('class','lis')
butt.getAttribute('class')
console.log(butt.getAttribute('class'));









