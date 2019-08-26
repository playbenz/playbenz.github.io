function getUrlParameter(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&")
  let reg = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)", "i"),
    results = reg.exec(url)

  if (!results) return null
  if (!results[2]) return ''

  return decodeURIComponent(results[2].replace(/\+/g, " "))
}

function getdomain(str) {
	
	if(str==null)
		return null;
	
	str = str.parseUrl(str);
	if(str==null)
		return null;
	
    return str['host'].toLowerCase();
}

var r = {
    protocol: /([^\/]+:)\/\/(.*)/i,
    host: /(^[^\:\/]+)((?:\/|:|$)?.*)/,
    port: /\:?([^\/]*)(\/?.*)/,
    pathname: /([^\?#]+)(\??[^#]*)(#?.*)/
};
 
function parseUrl(url) {
    var tmp, res = {};
    res["href"] = url;
    for (p in r) {
        tmp = r[p].exec(url);
        res[p] = tmp[1];
        url = tmp[2];
        if (url === "") {
            url = "/";
        }
        if (p === "pathname") {
            res["pathname"] = tmp[1];
            res["search"] = tmp[2];
            res["hash"] = tmp[3];
        }
    }
    console.log(url);
    return res;
};
