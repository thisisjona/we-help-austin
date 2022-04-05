async function updateButton() {
    // const updateBtn = document.querySelector('#update-btn');
    // const postUser = document.querySelector('#postUser');
    // const id = window.location.toString().split('/')[
    //     window.location.toString().split('/').length -1];

    // const response = await fetch(`/helpPost/${id}`, {
    //     method: 'get',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }).then(response => response.json())
    // .then(data => {
    //     console.log(data)
    // })
    document.location.replace('/postUpdate')
  }

  document.querySelector('#update-btn').addEventListener('click', updateButton);