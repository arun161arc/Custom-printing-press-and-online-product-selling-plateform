
document.querySelector('.cta:nth-child(1)').addEventListener('click', function() {
    window.location.href = 'upload.html';
});

document.querySelector('.cta:nth-child(2)').addEventListener('click', function() {
    window.location.href = 'orderNow.html';
});


// function of login btn
// const btn = document.getElementsByClassName('btn-login')
// const loginbtn = btn[0]
// const logininterface = document.getElementById('login-interface')

// loginbtn.addEventListener('click', function(e){
//     console.log(e);
//     if(logininterface.style.display == 'none' || logininterface.style.display==''){
//         logininterface.style.display = 'block';
//     }else{
//         logininterface.style.display = 'none'
//     }
// });


// document.querySelector('.wrapper').addEventListener('click',function(e){
//     let removeit = e.target.parentNode;
//     const toberemoved = document.querySelector('.wrapper');
//     if(e.target.tagName =='DIV' || e.target.tagName =='SPAN' || e.target.tagName =='H2' || e.target.tagName=='ION-ICON' ){
//     toberemoved.style.display='none';}
// })


// // Toggle FAQ answers on click
// document.querySelectorAll('.faq-item h3').forEach((question) => {
//     question.addEventListener('click', () => {
//         const answer = question.nextElementSibling;
//         answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
//     });
// });


// // Navigation for 'Upload Files' and 'Start Order' buttons
// document.querySelector('.cta:nth-child(1)').addEventListener('click', function() {
//     window.location.href = 'upload.html';
// });

// document.querySelector('.cta:nth-child(2)').addEventListener('click', function() {
//     window.location.href = 'orderNow.html';
// });

// Function of login btn
const btn = document.getElementsByClassName('btn-login');
const loginbtn = btn[0];
const logininterface = document.getElementById('login-interface');

loginbtn.addEventListener('click', function(e) {
    console.log(e);
    if (logininterface.style.display === 'none' || logininterface.style.display === '') {
        logininterface.style.display = 'block';
    } else {
        logininterface.style.display = 'none';
    }
});


document.addEventListener('click', function(e) {
    if (logininterface.style.display === 'block' && !logininterface.contains(e.target) && e.target !== loginbtn) {
        logininterface.style.display = 'none';
    }
});

document.querySelector('.wrapper .icon-close').addEventListener('click', function() {
    logininterface.style.display = 'none';
});


document.querySelectorAll('.faq-item h3').forEach((question) => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
