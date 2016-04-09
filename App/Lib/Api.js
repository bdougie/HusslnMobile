const apiRoot = 'http://hussln.herokuapp.com/events.json';

const api = {
  getEventData() {
    return fetch(apiRoot)
    .then((res) => {
      return res.json().then((jres) => {
        return jres.events;
      })
    })
    .catch((err) => console.log(`api error: ${err}`));
  }
};

export default api;
