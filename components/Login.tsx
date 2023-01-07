import { Button, Form, Input, Select } from 'antd'
import React from 'react'

import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
const { Option } = Select

// const layout = {
// 	labelCol: { span: 8 },
// 	wrapperCol: { span: 16 },
// }
// const tailLayout = {
// 	wrapperCol: { offset: 8, span: 16 },
// }

const Login = ({onLogin, loading, setLoading}: any) => {
	const [form] = Form.useForm()
	const router = useRouter();

	const onFinish = async (values: any) => {
		console.log(values)
		setLoading(true);
		const res = await onLogin(values.username, values.password);
		setLoading(false);
		if(res && res.status == 200) {
			router.push('/dashboard');
		}
	}

	const onReset = () => {
		form.resetFields()
	}

	return (
		<Form form={form} name="control-hooks" onFinish={onFinish}>
			<Form.Item name="username" rules={[{ required: true }]}>
				<Input
					size="large"
					placeholder="Username"
					style={{ marginTop: '4%' }}
					prefix={
						<UserOutlined
							style={{
								marginRight: '5px',
								color: '#2697ff',
							}}
						/>
					}
				/>
			</Form.Item>
			<Form.Item name="password" rules={[{ required: true }]}>
				<Input.Password
					size="large"
					placeholder="Password"
					prefix={
						<LockOutlined
							style={{
								marginRight: '5px',
								color: '#2697ff',
							}}
						/>
					}
				/>
			</Form.Item>
			<Form.Item>
				<Button
					type="primary"
					htmlType="submit"
					style={{ width: '6vw', marginRight: '3%', marginTop: '0.8rem' }}
				>
					Login
				</Button>
				<Button
					htmlType="button"
					onClick={onReset}
					style={{ width: '6vw', marginTop: '0.8rem' }}
				>
					Reset
				</Button>
			</Form.Item>
		</Form>
	)
}

export default Login
