const query = {
    search: 'Вася',
    take: 10,
}

function Query(query) {
  return `search=${query.search}&take=${query.take}`
}
// search=Вася&take=10

