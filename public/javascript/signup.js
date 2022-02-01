async function signupFormHandler(event) {
    event.preventDefault();
    const username = document.querySelector('#username-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    // checks to see if username is already in use
    if (username && password) {
      const response = await fetch('api/users/signup', {
        method: 'post',
        body: JSON.stringify({
        username,
        password
        }),
        headers: { 'Content-Type': 'application/json' }
        });

      // check the response status
      if (response.ok) { // if in use, ask user to select another username
        alert("That username is taken. Please select another.");
      } else {  // add username and password to user table
        const response = await fetch('api/users', {
          method: 'post',
          body: JSON.stringify({
          username,
          password
          }),
          headers: { 'Content-Type': 'application/json' }
          });
        document.location.replace('/dashboard');        
      }
    }   
  }

document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);  