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

export const getFollowedUsers = id => (
  $.ajax({
    url: 'api/followings',
    method: 'GET',
    data: { id, page: 'followed_users' }
  })
);

export const getFollowers = id => (
  $.ajax({
    url: 'api/followings',
    method: 'GET',
    data: { id, page: 'followers' }
  })
);