export default function handleResponseFromAPI(promise) {
  promise.then(() => {
    if (promise) {
      console.log('Got a response from the API');
      return ({ status: 200, body: 'Success' });
    }
    return (Error());
  });
}
