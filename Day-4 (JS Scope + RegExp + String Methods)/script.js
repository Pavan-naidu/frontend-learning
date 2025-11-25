// RegExp

const emailInput = document.getElementById('emailInput');
const validateBtn = document.getElementById('validateBtn');
const toast = document.getElementById('toast');

const emailPattern = /^[\d\D\w\W0-9]+@[\D]+.[\D]+$/;
// const result = pattern.test(email);
// console.log(result);

// function emailValidation(result){
//     if(result == true){
//         console.log("its a valid email");
//     }
//     else{
//         console.log("Please enter valid email ");
//     }
// }

// emailValidation()
function showToast(message, type = 'success') {
  toast.className = 'toast'; // reset
  toast.classList.add(type === 'success' ? 'success' : 'error');
  toast.textContent = message;
  toast.classList.remove('hidden');

  // Auto-hide after 3 seconds
  clearTimeout(showToast._timer);
  showToast._timer = setTimeout(() => {
    toast.classList.add('hidden');
  }, 3000);
}

// handle validation
function validateEmail() {
  const value = (emailInput.value || '').trim();

  if (value === '') {
    showToast('Please enter an email address', 'error');
    return;
  }

  const valid = emailPattern.test(value);

  if (valid) {
    showToast("It's a valid email ✅", 'success');
  } else {
    showToast('Please enter a valid email ✖', 'error');
  }
}

// Enter key also validates
emailInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') validateEmail();
});
validateBtn.addEventListener('click', validateEmail);