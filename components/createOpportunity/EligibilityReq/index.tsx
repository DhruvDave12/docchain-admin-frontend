import React from 'react'

import CustomInput from '../../CustomInput'

import styles from '../../../styles/Pages/create-form-step1.module.css'
import EligibilityCheckboxes from './EligibilityCheckboxes'

const EligibilityReq = ({states}: any) => {

	const branchData = [
		{
			value: 'cse',
			name: 'CSE',
		},
		{
			value: 'it',
			name: 'IT',
		},
		{
			value: 'ece',
			name: 'ECE',
		},
		{
			value: 'mech',
			name: 'Mechanical',
		},
		{
			value: 'aerospace',
			name: 'Aerospace',
		},
		{
			value: 'all',
			name: 'All',
		},
	]

	return (
		<div className={styles.create__form__body}>
			<div className={styles.form__element}>
				<EligibilityCheckboxes
					setSelectedCheckboxOptions={states.setSelectedCheckboxOptions}
				/>
				<div className={styles.form__input__wrapper}>
					<CustomInput
						data={undefined}
						label={'Minimum CPI Requirement'}
						placeholder={'Enter the Minimum CPI Requirement'}
						type={'text'}
						onChange={(e: any) => {
							states.setMinCPI(e.target.value)
						}}
					/>
				</div>
				<div className={styles.form__input__wrapper}>
					<CustomInput
						data={branchData}
						label={'Nature'}
						placeholder={'Select'}
						type={'drop-down'}
						onChange={(e: any) => {
							states.setBranch(e)
						}}
					/>
				</div>
			</div>
		</div>
	)
}

export default EligibilityReq
