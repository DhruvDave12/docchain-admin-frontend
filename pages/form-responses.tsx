import React from 'react'
import CustomButton from '../components/CustomButton'
import CustomTable from '../components/table'
import styles from '../styles/Pages/form-response.module.css'

const FormResponses = () => {
	return (
		<div className={styles.form__response__wrapper}>
			<div className={styles.form__response__header}>
				<div className={styles.container__part1}>
					<p className={styles.form__response__title}>Form Responses</p>
				</div>
				<div className={styles.button__container}>
					<CustomButton handleClick={() => {}} title={'Download'} />
				</div>
			</div>

			<CustomTable />
		</div>
	)
}

export default FormResponses
