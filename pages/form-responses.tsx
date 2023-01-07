import React from 'react'
import FormOverview from '../components/form-responses/FormOverview'
import CustomTable from '../components/table'
import AxiosInstance from '../services/AxiosInstance'
import styles from '../styles/Pages/form-responses.module.css'

const TEMP_FORM_RESPONSES = [
	{
		id: 1,
		name: 'John Doe',
	},
	{
		id: 2,
		name: 'Jane Doe',
	},	
	{
		id: 3,
		name: 'John Doe',
	},
	{
		id: 4,
		name: 'Jane Doe',
	}
]
const FormResponses = () => {
	const [forms, setForms] = React.useState([])

	React.useEffect(() => {
		const getForms = async () => {
			
			const res = await AxiosInstance.get('adminpanel/form/college');
			
			// TODO -> Store it in the state
			console.log("RES: ", res.data);
			setForms(res.data);
		}	

		getForms();
	}, []);

	return (
		<div className={styles.form__responses__wrapper}>
			<p className={styles.form__responses_title}>Forms</p>

			<div className={styles.form__responses__grid}>
				{
					forms.map((form) => (
						<FormOverview form={form} />
					))
				}
			</div>
		</div>
	)
}

export default FormResponses
