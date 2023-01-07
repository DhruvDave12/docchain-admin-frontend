import React from 'react'
import styles from '../styles/Components/CustomButton.module.css'

interface IProps {
	title: string
	handleClick: () => void
	style?: {}
}

const CustomButton = ({ title, handleClick, style }: IProps) => {
	return (
		<div
			className={styles.button__container}
			onClick={handleClick}
			style={{ ...style }}
		>
			<div className={styles.button__text}>{title}</div>
		</div>
	)
}

export default CustomButton
