const query = {
    search: 'Вася',
    take: 10,
}

function Query(query, param1, param2) {
  return `search=${query.param1}&take=${query.param2}`;
}
// search=Вася&take=10

console.log(Query(query, 'search', 'take'));
