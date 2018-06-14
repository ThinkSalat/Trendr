export const fetchUser = userId => $.get(`api/users/${userId}`);

export const unfollowUser = (follow) => (
  $.ajax({
    url: 'api/followings',
    method: 'DELETE',
    data: follow
  })
);

export const followUser = (follow) => (
  $.ajax({
    url: 'api/followings',
    method: 'POST',
    data: follow
  })
);