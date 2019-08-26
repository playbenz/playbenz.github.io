function getUrlParameter(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&")
  let reg = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
    results = reg.exec(url)

  if (!results) return null
  if (!results[2]) return ''

  return decodeURIComponent(results[2].replace(/\+/g, " "))
}
