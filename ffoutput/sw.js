let token

self.addEventListener('install', event => {
  const params = new URL(location);
  token = params.searchParams.get('token');
})

self.addEventListener("fetch", event => {
  if (new URL(event.request.url).origin == "https://www.googleapis.com") { //only add header to the endpoint i want
    event.respondWith(customHeaderRequestFetch(event));
  }
});

function customHeaderRequestFetch(event) {
  const newRequest = new Request(event.request, {
    mode: "cors",
    credentials: "omit",
    //also supports partial content (seeking)
    headers: { 
      range:
      event.request.headers.get("range") != undefined
      ? event.request.headers.get("range")
      : "0-",
      Authorization: "Bearer " + token
    }
  });
  return fetch(newRequest);
}
