if (window.location.pathname.includes('signup.html')) {
  const signupBtn = document.querySelector('button');
  signupBtn.addEventListener('click', () => {
    const name = document.querySelector('input[placeholder="Name"]').value;
    const email = document.querySelector('input[placeholder="Email"]').value;
    localStorage.setItem('user', JSON.stringify({ name, email }));
    alert('Signed up as: ' + name);
    window.location.href = 'home.html';
  });
}

if (window.location.pathname.includes('login.html')) {
  const loginBtn = document.querySelector('button');
  loginBtn.addEventListener('click', () => {
    const email = document.querySelector('input[placeholder="Email"]').value;
    const name = email.split('@')[0]; // Fake it for now
    localStorage.setItem('user', JSON.stringify({ name, email }));
    alert('Logged in as: ' + name);
    window.location.href = 'home.html';
  });
}
