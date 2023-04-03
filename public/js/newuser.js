// much of this is from Bootcamp Main/UR-VIRT-FSF-PT-10-2022-U-LOLC/14-MVC/01-Activities/19-Ins_Middleware/public/js/login.js
const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/');
    } else {
      alert('Failed to sign up.');
    }
  }
};


// not sure these pieces are neccessary - tbd
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);