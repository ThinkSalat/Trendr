export const likePost = (userId, postId) => {
  return(
  $.ajax({
    url: `api/likes`,
    method: "POST",
    data: { user_id: userId, id: postId }
  })
)}

export const unlikePost = (userId, id) => {
  return(
  $.ajax({
    url: `api/likes/${id}`,
    method: "DELETE",
    data: { user_id: userId }
  })
)}