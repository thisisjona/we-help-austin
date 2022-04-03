async function newPost(event) {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const body = document.querySelector('#post-body').value.trim();
    const deadline = document.querySelector('#post-deadline').value.trim();
    const requirements = document.querySelector('#post-requirements').value.trim();
    const tag = document.querySelector('#tag').value;

    const response = await fetch(`/helpPost/`, {
        method: 'POST',
        body: JSON.stringify({
            title,
            body,
            deadline,
            tag,
            requirements
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (response.ok) {
        console.log(response)
        id = response.id
        document.location.replace(`/post/${id}`);
    } else {
        alert(response.statusText);
    }
}
// link to post form
document.querySelector('.new-post-form').addEventListener('submit', newPost);