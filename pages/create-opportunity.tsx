import React from 'react'
import styles from '../styles/Pages/create-form.module.css'

import CustomButton from '../components/CustomButton'
import CreateJobStatus from '../components/CreateJobStatus'
import OpportunityDetails from '../components/createOpportunity/OpportunityDetails'
import EligibilityReq from '../components/createOpportunity/EligibilityReq'
import DocumentsReqJ from '../components/createOpportunity/DocumentsReq'
import AxiosInstance from '../services/AxiosInstance'
import { useRouter } from 'next/router'

const CreateJob = () => {
	const router = useRouter();
	const [step, setStep] = React.useState(1)
	const [jobIDD, setJobIDD] = React.useState()
	// step 1 states
	const [title, setTitle] = React.useState('');
	const [nature, setNature] = React.useState('');
	const [deadline, setDeadline] = React.useState('');
	const [stipend, setStipend] = React.useState('');
	const [location, setLocation] = React.useState('');
	const [description, setDescription] = React.useState('');

	// step 2 states
	const [selectedCheckboxOptions, setSelectedCheckboxOptions] = React.useState<
		string[]
	>([])
	const [minCPI, setMinCPI] = React.useState('');
	const [branch, setBranch] = React.useState('');
	const [selectedCheckboxOptionsJ, setSelectedCheckboxOptionsJ] = React.useState<
		string[]
	>([])
	// step 3 states
	const [customDocsJ, setCustomDocsJ] = React.useState<
		{
			title: string | null
			isDeleted: boolean
		}[]
	>([{ title: null, isDeleted: false }])

	const addCustomDocComponent = () => {
		setCustomDocsJ((prevCustomDocs) => {
			return [...prevCustomDocs, { title: null, isDeleted: false }]
		})
	}

	const deleteCustomDocComponent = (index: number) => {
		setCustomDocsJ((prevCustomDocs) => {
			const newCustomDocs = [...prevCustomDocs]
			newCustomDocs[index].isDeleted = true
			return newCustomDocs
		})
	}

	const [loading, setLoading] = React.useState(false)
	const handleStep = () => {
		switch (step) {
			case 1:
				return <OpportunityDetails 
			      states={
					{setTitle,
					setNature,
					setDeadline,
					setStipend,
					setLocation,
					setDescription}
				  }
				/>
			case 2:
				return <EligibilityReq states={{setSelectedCheckboxOptions, setMinCPI, setBranch}}/>
			case 3:
				return <DocumentsReqJ states={{customDocs: customDocsJ, setCustomDocs: setCustomDocsJ, addCustomDocComponent, deleteCustomDocComponent, setSelectedCheckboxOptions: setSelectedCheckboxOptionsJ, selectedCheckboxOptions: selectedCheckboxOptionsJ}}/>
			default:
				return null
		}
	}

	const OWNER_ID = 2;
	const submitHandler = async () => {
		setLoading(true);
		const res = await AxiosInstance.post(
			'/adminpanel/form/job/',
			{
				title,
				nature: 'intern',
				deadline: deadline,
				salary_range_min: parseInt(stipend.split('-')[0]),
				salary_range_max: parseInt(stipend.split('-')[1]),
				job_location: 'andhra-pradesh',
				jd: description,
				eligibilty: "d",
				owner: OWNER_ID,
			}
		)

		console.log("RES OF MINOR DATA: ", res.data);
		console.log("SELECTED CHECKBOX OPTIONS: ", selectedCheckboxOptionsJ);
		const jobId = res.data.id
		setJobIDD(jobId)
		console.log("JOB ID: ", jobIDD);
		const ress1 = await Promise.all(
			selectedCheckboxOptionsJ.map(
				async (selectedCheckboxOption: any) =>
					await AxiosInstance.post(
						'/adminpanel/questions/text/job/',
						{
							job: jobId,
							title: selectedCheckboxOption,
							technique: 'pre_verified',
						}
					)
			)
		)

		console.log(customDocsJ)
			const ress2 = await Promise.all(
				customDocsJ.map(async (customDoc: any) => {
					if (!customDoc.isDeleted && customDoc.title) {
						return await AxiosInstance.post(
							'/adminpanel/questions/file/job/',
							{
								job: jobId,
								title: customDoc.title,
								technique: 'file_upload',
							}
						)
					}
				})
			)
			setLoading(false);
			router.push('/view-responses');
	}

	return (
		!loading ? 
		<div
			className={styles.form__components}
			style={{
				height: '80vh',
				overflowY: 'scroll',
			}}
		>
			<p className={styles.create__form__title}>Create New Opportunity</p>
			<div className={styles.create__form__status__wrap}>
				<CreateJobStatus currentStep={step} />
			</div>
			{handleStep()}
			<div className={styles.button__wrapper}>
				<div className={styles.button__internal__wrapper}>
					{step >= 2 ? (
						<CustomButton
							handleClick={() => setStep(step - 1)}
							title={'Back'}
						/>
					) : null}
				</div>
				<div className={styles.button__internal__wrapper}>
					{step < 3 ? (
						<CustomButton
							handleClick={() => setStep((prevStep) => prevStep + 1)}
							title={'Next'}
						/>
					) : (
						<CustomButton handleClick={submitHandler} title={'Submit'} />
					)}
				</div>
			</div>
		</div>
		: 
		<h1>LOADING....</h1>

	)
}

export default CreateJob
