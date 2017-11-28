import 'whatwg-fetch'
import 'es6-promise'

function objToParam(paramsObj) {
  let result = '';
  for (let item in paramsObj) {
    result += `&${item}=${encodeURIComponent(paramsObj[item])}`
  }
  if (result) {
    result = result.slice(1)
  }
  return result
}

export function post(url, paramsObj) {
  let result = fetch(url, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Accept': 'application/json, text/plain, */*'
    },
    body: objToParam(paramsObj)
  })
  return result
}