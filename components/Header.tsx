import React from 'react'
import styles from '../styles/Components/CustomHeader.module.css'
import {
	BellOutlined,
	MessageOutlined,
	DownOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { Dropdown, Menu, Space } from 'antd'

const menu = (
	<Menu
		items={[
			{
				label: <a href="https://www.antgroup.com">1st menu item</a>,
				key: '0',
			},
			{
				label: <a href="https://www.aliyun.com">2nd menu item</a>,
				key: '1',
			},
			{
				type: 'divider',
			},
			{
				label: '3rd menu item',
				key: '3',
			},
		]}
	/>
)

const CustomHeader = () => {
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
									Dhruv Dave
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
