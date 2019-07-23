function fetch(data) {
  return new Promise(resolve => {
    resolve(data);
  });
}

export default {
  queryList() {
    return fetch([
      {
        name: "John",
        age: 19,
        date: "2018-11-04"
      }
    ]);
  }
};
