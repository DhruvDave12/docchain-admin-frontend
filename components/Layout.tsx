import React, { useState, useContext } from 'react'
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
import { AuthContext } from '../context/auth.context'
import { toast } from "react-toastify";

interface IProps {
	children: React.ReactNode
}

const items1 = ['1', '2', '3'].map((key) => ({
	key,
	label: `nav ${key}`,
}));

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
	const {isLoggedIn, user, onLogout} = useContext(AuthContext);

	const handleNotLoggedIn = (route_name: any) => {
		toast("Please login to access this feature", { hideProgressBar: false, autoClose: 2000, type: 'error' });
		router.push(`/${route_name}`);
	}
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
				onClick: () => isLoggedIn ? router.push('/dashboard') : handleNotLoggedIn('auth'),
			},
			{
				key: 2,
				icon: <FormOutlined />,
				label: 'Forms',
				children: [
					{
						key: 0,
						label: 'Create Form',
						onClick: () => isLoggedIn ? router.push('/create-form') : handleNotLoggedIn('auth'),
					},
					{
						key: 1,
						label: 'View Form Responses',
						onClick: () => isLoggedIn ? router.push('/form-responses') : handleNotLoggedIn('auth'),
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
						onClick: () => isLoggedIn ? router.push('/create-opportunity') : handleNotLoggedIn('auth'),
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
					{
						isLoggedIn ? 
						<CustomHeader user={user} onLogout={onLogout}/>
						: null
					}
					<Content className={styles.custom__content}>{children}</Content>
				</Layout>
			</Layout>
		</Layout>
	)
}

export default CustomLayout
