const newFormHandler = async (event) => {
  event.preventDefault();

  const commentmessages = document.querySelector('#comment-message').value.trim();

  console.log(commentmessages, "Comment")
  const id = event.target.getAttribute("data-blogid")
  if (commentmessages) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ commentmessages, blogpost_id: id }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      console.log(response)
     document.location.reload()
    } else {
      alert('Failed to create blogpost')
    }
  }
};

document
  .querySelector('.add-comment')
  .addEventListener('submit', newFormHandler);