export const fetchPosts = filter => (
  $.get({
    url: 'api/posts',
    date: { filter }
  })
);

export const fetchPost = id => $.get(`api/posts/${id}`);

export const createPost = post => {
  return(
    $.post({
      url: `api/posts`,
      contentType: false,
      processData: false,
      dataType: 'json',
      data: post
    })
  );
};

// for photos


//update this to match createPost
export const updatePost = post => (
  $.ajax({
    method: "PATCH",
    url: `api/posts/${post.id}`,
    data: { post }
  })
);

export const deletePost = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/posts/${id}`
  })
);

export const fetchRandomPosts = numPosts => (
  $.ajax({
    method: 'GET',
    url: 'api/explore',
    data: { num_posts: numPosts }
  })
)