import React from 'react'
import FormOverview from '../components/form-responses/FormOverview'
import JobOverview from '../components/jobOverview'
import AxiosInstance from '../services/AxiosInstance'
import styles from '../styles/Pages/form-responses.module.css';

const FormResponses = () => {
	const [jobs, setJobs] = React.useState([])

	React.useEffect(() => {
		const getJobs = async () => {
			
			const res = await AxiosInstance.get('adminpanel/form/college');
			// TODO -> Store it in the state
			console.log("RES: ", res.data);
			setJobs(res.data);
		}	

		getJobs();
	}, []);

	return (
		<div className={styles.form__responses__wrapper}>
			<p className={styles.form__responses_title}>Forms</p>

			<div className={styles.form__responses__grid}>
				{
					jobs.map((job) => (
						<JobOverview job={job} />
					))
				}
			</div>
		</div>
	)
}

export default FormResponses
