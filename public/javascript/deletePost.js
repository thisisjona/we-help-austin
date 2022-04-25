async function deletePost(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[window.location.toString().split('/').length - 1];

    const response = await fetch('/helpPosts/', {
        method: 'delete',
        body: JSON.stringify({ id }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
}
// link to delete button
document.querySelector('.delete-post-btn').addEventListener('click', deletePost);