import React from 'react'
import axios from 'axios'

import CustomInput from '../CustomInput'

import styles from '../../styles/Pages/create-form-step1.module.css'
import moment from 'moment'
const OpportunityDetails = ({states}: any) => {
	const opportunityNatureData = [
		{
			value: 'full-time',
			name: 'Full Time',
		},
		{
			value: 'full-time-intern',
			name: 'Internship + Full Time',
		},
		{
			value: 'internship',
			name: 'Internship',
		},
		{
			value: 'fellow-ship',
			name: 'Fellowship',
		},
		{
			value: 'grant',
			name: 'Grant',
		},
	]

	const locationData = [
		{
			value: 'Bengaluru',
			name: 'Bengaluru',
		},
		{
			value: 'Hyderabad',
			name: 'Hyderabad',
		},
		{
			value: 'Gurugram',
			name: 'Gurugram',
		},
	]

	// const [locationData, setLocationData] = React.useState<
	// 	{
	// 		value: string
	// 		name: string
	// 	}[]
	// >([])

	// React.useEffect(() => {
	// 	const config = {
	// 		method: 'get',
	// 		url: 'https://api.countrystatecity.in/v1/countries/IN/cities',
	// 		headers: {
	// 			'X-CSCAPI-KEY': process.env.CITY_API_KEY || '',
	// 		},
	// 	}
	// 	axios(config)
	// 		.then((res) => {
	// 			setLocationData(
	// 				res.data.map(({ name }: { name: string; id: number }) => ({
	// 					value: name,
	// 					name: name,
	// 				}))
	// 			)
	// 		})
	// 		.catch((error) => {
	// 			console.log(error)
	// 		})
	// }, [])

	return (
		<div className={styles.create__form__body}>
			<div className={styles.form__element}>
				<div className={styles.form__input__wrapper}>
					<CustomInput
						data={undefined}
						label={'Title'}
						placeholder={'Enter the Title'}
						type={'text'}
						onChange={(e: any) => {
							states.setTitle(e.target.value);
						}}
					/>
				</div>
				<div className={styles.form__input__wrapper}>
					<CustomInput
						data={opportunityNatureData}
						label={'Nature'}
						placeholder={'Select'}
						type={'drop-down'}
						onChange={(e: any) => {
							states.setNature(e);
						}}
					/>
				</div>
				<div className={styles.form__input__wrapper}>
					<CustomInput
						data={undefined}
						label={'Deadline'}
						placeholder={'Select a date'}
						type={'date'}
						onChange={(e: any) => {
							states.setDeadline(moment(e._d).format('YYYY-MM-DD'));
						}}
					/>
				</div>
				<div className={styles.form__input__wrapper}>
					<CustomInput
						data={undefined}
						label={'Salary/Stipend Range'}
						placeholder={'Enter Estimated Salary'}
						type={'text'}
						onChange={(e: any) => {
							states.setStipend(e.target.value);
						}}
					/>
				</div>
				<div className={styles.form__input__wrapper}>
					<CustomInput
						data={locationData}
						label={'Location'}
						placeholder={'Select'}
						type={'drop-down'}
						onChange={(e: any) => {
							states.setLocation(e);
						}}
					/>
				</div>
				<div className={styles.form__input__wrapper}>
					<CustomInput
						data={undefined}
						label={'Description'}
						placeholder={'Enter the Description'}
						type={'textarea'}
						onChange={(e: any) => {
							states.setDescription(e.target.value);
						}}
					/>
				</div>
			</div>
		</div>
	)
}

export default OpportunityDetails
