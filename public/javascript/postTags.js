function postByTag(event) {
    event.preventDefault();
    const tag = document.querySelector('#tag-options').value;
    document.location.assign(`/dashboard/${tag}`)
}
document.querySelector('#find-post-btn').addEventListener('click', postByTag);