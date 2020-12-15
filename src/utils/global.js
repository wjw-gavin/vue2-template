import { Toast } from 'vant'
export function loading(flag = true) {
  if (flag) {
    Toast.loading({
      message: '加载中...',
      forbidClick: true,
      duration: 0
    })
  } else {
    Toast.clear()
  }
}
