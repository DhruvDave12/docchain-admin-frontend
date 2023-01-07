import React from 'react'
import styles from '../styles/Pages/create-form.module.css'

import CustomButton from '../components/CustomButton'
import CreateJobStatus from '../components/CreateJobStatus'
import OpportunityDetails from '../components/createOpportunity/OpportunityDetails'
import EligibilityReq from '../components/createOpportunity/EligibilityReq'
import DocumentsReq from '../components/createOpportunity/DocumentsReq'

const CreateJob = () => {
	const [step, setStep] = React.useState(1)

	const handleStep = () => {
		switch (step) {
			case 1:
				return <OpportunityDetails />
			case 2:
				return <EligibilityReq />
			case 3:
				return <DocumentsReq />
			default:
				return null
		}
	}

	const submitHandler = () => {}

	return (
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
	)
}

export default CreateJob
