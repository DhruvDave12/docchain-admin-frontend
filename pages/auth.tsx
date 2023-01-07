import React from 'react'
import AuthHeader from '../components/AuthHeader'

import { Typography } from 'antd'
import { Tabs } from 'antd'
import Login from '../components/Login'
import SignUp from '../components/SignUp'

// const { Content } = Layout
const { Title } = Typography
const { TabPane } = Tabs
import CustomLayout from '../components/Layout'
const onChange = (key: string) => {
	console.log(key)
}

const Auth = () => {
	return (
		<div>
			<AuthHeader />
			<Tabs
				size="large"
				defaultActiveKey="1"
				onChange={onChange}
				style={{ width: '30vw', margin: '2% auto 10% auto' }}
			>
				<TabPane tab="Login" key="1">
					<Login />
				</TabPane>
				<TabPane tab="Sign Up" key="2">
					<SignUp />
				</TabPane>
			</Tabs>
		</div>
	)
}

export default Auth
