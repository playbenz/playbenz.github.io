/**
 * Set URL Parameter
 * @param { String } key
 * @param { String } value
 * @param { String } url
 */
export function setUrlParameter(key, value, url = window.location.href) {
  let reg = new RegExp("([?&])" + key + "=.*?(&|$)", "i")
  let separator = url.indexOf('?') !== -1 ? "&" : "?"

  if (url.match(reg)) {
    window.history.pushState(null, null, url.replace(re, '$1' + key + "=" + value + '$2'))
  } else {
    window.history.pushState(null, null, url + separator + key + "=" + value)
  }
}


/**
 * Get URL Parameter
 * @param  { String } name
 * @param  { String } url
 * @return { String }
 */
export function getUrlParameter(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&")
  let reg = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
    results = reg.exec(url)

  if (!results) return null
  if (!results[2]) return ''

  return decodeURIComponent(results[2].replace(/\+/g, " "))
}


/**
 * Remove URL parameter
 * @param  { String } parameter
 * @param  { String } url
 * @link http://stackoverflow.com/a/1634841/2029790
 */
export function removeUrlParameter(parameter, url = window.location.href) {
  let urlparts = url.split('?')

  if (urlparts.length >= 2) {
    let prefix = encodeURIComponent(parameter) + '='
    let pars = urlparts[1].split(/[&]/g)
    
    //reverse iteration as may be destructive
    for (var i = pars.length i-- > 0) {
      if (pars[i].lastIndexOf(prefix, 0) !== -1) {
        pars.splice(i, 1)
      }
    }

    url = urlparts[0] + '?' + pars.join('&')
  }

  window.history.pushState(null, null, url)
}