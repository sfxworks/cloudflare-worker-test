addEventListener('fetch', event => {
  event.respondWith(sendDate(event.request))
})

const _ = require("lodash")

async function sendDate(request) {
  return new Response(`${_.now()} Also hello`)
}