async function newPost(event) {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const body = document.querySelector('#post-body').value.trim();
    const deadline = document.querySelector('#post-deadline').value.trim();
    const requirements = document.querySelector('#post-requirements').value.trim();
    const tag = document.querySelector('#tag').value;

    if (title && body && tag) {
        const response = await fetch(`/helpPost`, {
            method: 'post',
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
        })
            .then(response => response.json())
            .then(data => {
                const id = data.post.id
                document.location.replace(`/helppost/${id}`)
            })
    } else {
        alert('Please fill out the appropriate fields')
    };
};
// link to post form
document.querySelector('#add-post-btn').addEventListener('click', newPost);