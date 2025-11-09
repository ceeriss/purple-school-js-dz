const query = {
  search: "Вася",
  take: 10,
};

function Query(obj, param1, param2) {
  return `${param1}=${obj[param1]}&${param2}=${obj[param2]}`;
}

console.log(Query(query, "search", "take")); // "search=Вася&take=10"
