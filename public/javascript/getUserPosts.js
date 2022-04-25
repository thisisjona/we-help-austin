function format_date(date) {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
        date
    ).getFullYear()}`;
}

async function getUserPosts() {
    const postsContainer = document.querySelector('#posts');
    const response = await fetch('/helpPost/username', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' }
    })
        .then(response => response.json())
        .then(posts => {
            posts.map((post) => {
                //create container elements
                const listEl = document.createElement('li');
                const titleEl = document.createElement('a');
                const bodyEl = document.createElement('p');
                const createdAtEl = document.createElement('p');
                const requirementsEl = document.createElement('p');
                const tagEl = document.createElement('p');
                const deadlineEl = document.createElement('p');
                // add post values to elements
                titleEl.innerHTML = post.title;
                titleEl.setAttribute('href', `/helppost/${post.id}`)
                bodyEl.innerHTML = post.body;
                createdAtEl.innerHTML = format_date(post.createdAt);
                requirementsEl.innerHTML = post.requirements;
                tagEl.innerHTML = post.tag;
                deadlineEl.innerHTML = post.deadline;
                // add elements to page
                postsContainer.appendChild(listEl)
                listEl.appendChild(titleEl)
                listEl.appendChild(tagEl)
                listEl.appendChild(bodyEl)
                listEl.appendChild(requirementsEl)
                listEl.appendChild(deadlineEl)
                listEl.appendChild(createdAtEl)
            })
        }

        )
}
getUserPosts();