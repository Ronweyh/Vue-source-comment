function getType(fn) {
  const match = fn && fn.toString().match(/^\s*function (\w+)/)
  console.log(match[1])
  return match ? match[1] : ""
}

function isType(type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (let i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}
console.log(isType(Boolean, Number))