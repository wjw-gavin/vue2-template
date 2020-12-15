//获取url参数
export function getQueryString(name) {
  let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  let r = window.location.search.substr(1).match(reg)
  if (r !== null) return decodeURIComponent(r[2])
  return ''
}

// 两个数之间的随机数
export function random(min, max) {
  if (min >= 0 && max > 0 && max >= min) {
    let gab = max - min + 1
    return Math.floor(Math.random() * gab + min)
  } else {
    return 0
  }
}
