/* eslint-disable no-useless-escape */
/**
 * 验证电子邮箱格式
 */
function isEmail(value) {
  return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value)
}

/**
 * 验证手机格式
 */
function isMobile(value) {
  return /^1[23456789]\d{9}$/.test(value)
}

/**
 * 验证URL格式
 */
function isUrl(value) {
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w-.\/?%&=]*)?/.test(value)
}

/**
 * 验证日期格式
 */
function isDate(value) {
  return !/Invalid|NaN/.test(new Date(value).toString())
}

/**
 * 验证十进制数字
 */
function isNumber(value) {
  return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value)
}

/**
 * 验证整数
 */
function isDigits(value) {
  return /^\d+$/.test(value)
}

/**
 * 验证身份证号码
 */
function isID(value) {
  return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value)
}

/**
 * 是否车牌号
 */
function isCarNumber(value) {
  // 新能源车牌
  const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/
  // 旧车牌
  const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/
  if (value.length === 7) {
    return creg.test(value)
  } else if (value.length === 8) {
    return xreg.test(value)
  } else {
    return false
  }
}

/**
 * 验证是否包含某个值
 */
function contains(value, param) {
  return value.indexOf(param) >= 0
}

/**
 * 是否固定电话
 */
function isTel(value) {
  let reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/
  return reg.test(value)
}

/**
 * 判断是否为空
 */
function isEmpty(value) {
  switch (typeof value) {
    case 'undefined':
      return true
    case 'string':
      if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length === 0) return true
      break
    case 'boolean':
      if (!value) return true
      break
    case 'number':
      if (0 === value || isNaN(value)) return true
      break
    case 'object':
      if (null === value || value.length === 0) return true
      for (let i in value) {
        return false
      }
      return true
  }
  return false
}

/**
 * 是否数组
 */
function isArray(value) {
  if (typeof Array.isArray === 'function') {
    return Array.isArray(value)
  } else {
    return Object.prototype.toString.call(value) === '[object Array]'
  }
}

/**
 * 是否对象
 */
function isObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]'
}

export default {
  isEmail,
  isMobile,
  isUrl,
  isDate,
  isNumber,
  isDigits,
  isID,
  isCarNumber,
  contains,
  isEmpty,
  isTel,
  isArray,
  isObject
}
