async function updateButton() {
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1];

    const response = await fetch(`/helpPost/checkUser`, {
        method: 'post',
        body: JSON.stringify({id}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
      if (data.check) {
        document.location.assign(`/helppost/update/${id}`)
      } else {
        alert('Not your post to change!')
      }
    });
}

document.querySelector('#update-btn').addEventListener('click', updateButton);