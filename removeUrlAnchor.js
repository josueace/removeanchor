function removeUrlAnchor(url){
  let parts=url.split('#');
  return parts[0];
}