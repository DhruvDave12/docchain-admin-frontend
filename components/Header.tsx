import React from 'react'
import styles from '../styles/Components/CustomHeader.module.css'
import {
	BellOutlined,
	MessageOutlined,
	DownOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { Dropdown, Menu, Space } from 'antd'

let handleLogout = () => {};
const menu = (
	<Menu
		items={[
			{
				label: 'Logout',
				key: 0,
				onClick: () => {
					handleLogout();
				}
			}
		]}
	/>
)

const CustomHeader = ({user, onLogout}: any) => {
	console.log("USER: ", user);
	handleLogout = () => {
		onLogout();
	}
	return (
		<div className={styles.custom__header__wrapper}>
			<div className={styles.custom__part__1}>
				<div className={styles.custom__institute__name}>
					<div className={styles.insitute__title}>
						Indian Institute of Information Technology, Vadodara
					</div>
				</div>
			</div>
			<div className={styles.custom__part__2}>
				<div>
					<BellOutlined className={styles.header__icon__style} />
				</div>
				<div>
					{/* #B2B2B2 */}
					<MessageOutlined className={styles.header__icon__style} />
				</div>

				<div className={styles.admin__dropdown}>
					<div className={styles.admin__photo}>
						<UserOutlined className={styles.header__icon__style} />
					</div>
					<div>
						<Dropdown
							overlay={menu}
							trigger={['click']}
							className={styles.custom__dropdown}
						>
							<a onClick={(e) => e.preventDefault()}>
								<Space>
									{user?.first_name}{user?.last_name}
									<DownOutlined />
								</Space>
							</a>
						</Dropdown>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CustomHeader
