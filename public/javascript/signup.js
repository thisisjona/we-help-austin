async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/user/signup', {
            method: 'post',
            body: JSON.stringify({
                username,
                email,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // check the response status
        if (response.ok) {
            alert('Signup was successful')
            document.location.replace('/dashboard')
        } else {
            alert(response.statusText);
        }
    }
}

document.querySelector('#signup-btn').addEventListener('click', signupFormHandler);