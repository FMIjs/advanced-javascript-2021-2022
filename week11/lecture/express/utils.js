module.exports.jsonReplacer = (key, value) => {
  if (key === 'password') { return undefined; }
  return value;
}
