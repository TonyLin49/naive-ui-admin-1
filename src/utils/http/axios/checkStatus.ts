export function checkStatus(status: number, msg: string): void {
  const $message = window['$message'];
  switch (status) {
    case 400:
      $message.error(msg);
      break;
    // 401: 未登录
    // 未登录则跳转登录页面，并携带当前页面的路径
    // 在登录成功后返回当前页面，这一步需要在登录页操作。
    case 401:
      $message.error('用户没有權限（令牌、用户名、密碼錯誤）!');
      break;
    case 403:
      $message.error('用户得到授權，但是訪問是被禁止的。!');
      break;
    // 404请求不存在
    case 404:
      $message.error('網絡請求錯誤，未找到該資源!');
      break;
    case 405:
      $message.error('網絡請求錯誤，請求方法未允許!');
      break;
    case 408:
      $message.error('網絡请求超時');
      break;
    case 500:
      $message.error('服務器錯誤,請連系管理员!');
      break;
    case 501:
      $message.error('網絡未實現');
      break;
    case 502:
      $message.error('網絡錯誤');
      break;
    case 503:
      $message.error('服務不可用，服務器暫時過載或維護!');
      break;
    case 504:
      $message.error('網絡超時');
      break;
    case 505:
      $message.error('http版本不支持该请求!');
      break;
    default:
      $message.error(msg);
  }
}
