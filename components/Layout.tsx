import React, { useState } from 'react'
import { useRouter } from 'next/router'
import {
	DownOutlined,
	FormOutlined,
	LaptopOutlined,
	NotificationOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
const { Content, Sider } = Layout
import styles from '../styles/Components/Layout.module.css'
import CustomHeader from '../components/Header'

interface IProps {
	children: React.ReactNode
}

const items1 = ['1', '2', '3'].map((key) => ({
	key,
	label: `nav ${key}`,
}))

const items2 = [
	UserOutlined,
	LaptopOutlined,
	NotificationOutlined,
	LaptopOutlined,
	NotificationOutlined,
]

const CustomLayout = ({ children }: IProps) => {
	const router = useRouter()
	const [collapsed, setCollapsed] = useState(false)

	const navItems = React.useMemo(
		() => [
			{
				key: 0,
				icon: React.createElement(UserOutlined),
				label: 'Login/Signup',
				onClick: () => router.push('/auth'),
			},
			{
				key: 1,
				icon: React.createElement(UserOutlined),
				label: 'Dashboard',
				onClick: () => router.push('/dashboard'),
			},
			{
				key: 2,
				icon: <FormOutlined />,
				label: 'Forms',
				children: [
					{
						key: 0,
						label: 'Create Form',
						onClick: () => router.push('/create-form'),
					},
					{
						key: 1,
						label: 'View Form Responses',
						onClick: () => router.push('/form-responses'),
					},
				],
			},
			{
				key: 3,
				icon: React.createElement(UserOutlined),
				label: 'Oppotunities',
				children: [
					{
						key: 0,
						label: 'Create Opportunity',
						onClick: () => router.push('/create-opportunity'),
					},
					{
						key: 1,
						label: 'View Applications',
					},
				],
			},
		],
		[router]
	)
	return (
		<Layout style={{ height: '100vh', overflowY: 'clip' }}>
			<Layout>
				<Sider
					width={230}
					className={styles.custom__style}
					collapsible
					collapsed={collapsed}
					onCollapse={(value) => setCollapsed(value)}
				>
					<div
						style={{
							height: '20%',
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							backgroundColor: 'white',
						}}
					>
						{!collapsed ? (
							<p className={styles.side__panel__title}>DOCCHAIN</p>
						) : null}
					</div>

					<Menu
						mode="inline"
						defaultOpenKeys={['sub1']}
						style={{
							height: '100%',
							borderRight: 0,
						}}
						items={navItems}
					/>
				</Sider>
				<Layout
					style={{
						padding: '0 24px 24px',
					}}
				>
					<CustomHeader />
					<Content className={styles.custom__content}>{children}</Content>
				</Layout>
			</Layout>
		</Layout>
	)
}

export default CustomLayout
