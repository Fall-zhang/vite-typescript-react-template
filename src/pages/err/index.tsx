import React, { FC } from 'react'
import { Result, Button } from 'antd'
import { useHistory } from 'react-router-dom'
import './index.module.less'
const ErrPage: FC = () => {
  const logged = sessionStorage.token
  const history = useHistory()
  const TypeButton = (
    <Button type="primary" key="login" onClick={() => { history.push('/login') }}>
      跳转到登陆
    </Button>
  )
  return (
    <Result
      status="404"
      title="404"
      subTitle={'当前页面不存在'}
      extra={
        [
          <Button key='back' type="primary" onClick={() => { history.go(-1) }}>
            回到上一页
          </Button>, logged ? '' : TypeButton
        ]
      }
    />
  )
}

export default ErrPage