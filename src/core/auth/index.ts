import { $http } from '@/utils/reuqest'
import { getLoginWay, setLoginWay } from './localStorage'
/**
 * 登录认证：表示用户当前登录的认证状态
 */

/**
 * 登陆请求数据类型
 */
export interface ILogin {
  userName: string;
  pwd: string;
}

/**
 * 返回数据类型
 */
export interface ILoginData extends Record<string, unknown> {
  code: number;
  message: string;
  token: string;
}

/**
 * 登陆接口
 */

const loginApp = (params: ILogin): Promise<ILoginData> => {
  return $http.get('/login', params)
}
export {
  getLoginWay,
  setLoginWay,
  loginApp
}