async function logout() {
    const response = await fetch('/user/logout', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}
// link to logout button
document.querySelector('#logout-btn').addEventListener('click', logout);