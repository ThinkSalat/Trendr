export const fetchPosts = filter => (
  $.get({
    url: 'api/posts',
    date: { filter }
  })
);

export const fetchPost = id => $.get(`api/posts/${id}`);

export const createPost = post => (
  $.post({
    url: `api/posts`,
    data: { post }
  })
);

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


