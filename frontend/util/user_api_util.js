export const fetchUser = (userId, offset, date = new Date().toISOString()) => (
  $.get(`api/users/${userId}?offset=${offset || 0}&date=${date}`)
);