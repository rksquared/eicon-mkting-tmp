export function encode(data: Object) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(typeof data[key] === 'boolean' ? '' + data[key] : data[key]))
    .join("&")
}
