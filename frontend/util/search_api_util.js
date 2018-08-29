export const search = query => (
  $.get({
    url: `api/users/search${query}`
  })
)