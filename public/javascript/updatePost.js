async function updatePost(event) {
    event.preventDefault();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];
    const title = document.querySelector('#post-title').value;
    const body = document.querySelector('#post-body').value.trim();
    const deadline = document.querySelector('#post-deadline').value.trim();
    const requirements = document.querySelector('#post-requirements').value.trim();
    const tag = document.querySelector('#tag').value;

    const response = await fetch(`/helpPosts/${id}`, {
        method: 'Put',
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
        document.location.replace(`/post/${id}`);
    } else {
        alert(response.statusText);
    }
}
// link to post form
document.querySelector('.new-post-form').addEventListener('submit', updatePost);