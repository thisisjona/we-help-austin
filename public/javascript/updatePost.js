// async function updatePost(event) {
//     event.preventDefault();

//     const id = window.location.toString().split('/')[
//         window.location.toString().split('/').length -1
//     ];
//     const title = document.querySelector('#post-title').value;
//     const body = document.querySelector('#post-body').value.trim();
//     const deadline = document.querySelector('#post-deadline').value.trim();
//     const requirements = document.querySelector('#post-requirements').value.trim();
//     const tag = document.querySelector('#tag').value;

//     const response = await fetch(`/helpPosts/${id}`, {
//         method: 'Put',
//         body: JSON.stringify({
//             title,
//             body,
//             deadline,
//             tag,
//             requirements
//         }),
//         headers: {
//             'Content-Type': 'application/json'
//         }
//     });

//     if (response.ok) {
//         document.location.replace(`/post/${id}`);
//     } else {
//         alert(response.statusText);
//     }
// }
// link to post form
// document.querySelector('.new-post-form').addEventListener('click', updatePost);
const id = window.location.toString().split('/')[
    window.location.toString().split('/').length -1];

async function deleteTask () {
    const response = await fetch('/helpPost/', {
        method: 'delete',
        body: JSON.stringify({id: id}),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('The Task is now closed!')
            document.location.replace('/profile')
        } else {
            alert('Error')
        }
    })
};

async function taskCompleted() {
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
                deleteTask();
            } else {
                alert('Only the poster can close the Task!')
            }
            });
};

document.getElementById("chat").onclick = function () {
    location.href="/chat.html"
};

document.getElementById("issueClosed").addEventListener('click', taskCompleted);