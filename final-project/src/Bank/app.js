const cancelBtn = document.getElementById('cancelBtn');
const confirmBtn = document.getElementById('confirmBtn');

cancelBtn.addEventListener('click', () => {
    window.location.href ='http://localhost:3000/PaymentResult/fail'
})

confirmBtn.addEventListener('click', () => {
    window.location.href ='http://localhost:3000/PaymentResult/Success'
})
