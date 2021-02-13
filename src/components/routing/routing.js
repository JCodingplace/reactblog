const mapParamsToURL = (getParams) => {
  var str = "";
  for (var key in getParams) {
      if (str !== "") {
          str += "&";
      }
      str += key + "=" + encodeURIComponent(getParams[key]);
  }
  return str;
}

export const getRoute = (path, getParams) => {
  const url = process.env.REACT_APP_API_URL;
  const params = mapParamsToURL(getParams);
  return `${url}${path}?${params}`;
}
