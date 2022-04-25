async function updateButton() {
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1];
    document.location.assign(`/helppost/update/${id}`)
}

document.querySelector('#update-btn').addEventListener('click', updateButton);