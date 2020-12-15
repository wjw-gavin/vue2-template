/**
 * @Description: 去除空格
 * @Author: wjw
 * @Date: 2020-12-10 15:37:04
 * @param : { String } str 去除空格的字符串
 * @param : { String } pos = both 两边空格
 * @param : { String } pos = left/right 左或者右边空格
 * @param : { String } pos = all 所有空格
 */
function trim(str, pos = 'both') {
  if (pos === 'both') {
    return str.replace(/^\s+|\s+$/g, '')
  } else if (pos === 'left') {
    return str.replace(/^\s*/, '')
  } else if (pos === 'right') {
    return str.replace(/(\s*$)/g, '')
  } else if (pos === 'all') {
    return str.replace(/\s+/g, '')
  } else {
    return str
  }
}

export default trim
