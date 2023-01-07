import React from 'react'

import { Checkbox, Row } from 'antd'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'

import inputStyles from '../../../styles/Components/CustomInput.module.css'

type EligibilityCheckboxes = {
	setSelectedCheckboxOptions: React.Dispatch<React.SetStateAction<string[]>>
}

const EligibilityCheckboxes = ({
	setSelectedCheckboxOptions,
}: EligibilityCheckboxes) => {
	const [checkboxOptions, setCheckboxOptions] = React.useState<string[]>([
		'First Year',
		'Second Year',
		'Third Year',
		'Fourth Year',
		'Passout',
	])

	// fetch the document names from API

	const checkboxChangeHandler = (e: CheckboxChangeEvent) => {
		if (e.target.checked) {
			setSelectedCheckboxOptions((prevCheckboxOptions) => [
				...prevCheckboxOptions,
				e.target.value,
			])
		} else {
			setSelectedCheckboxOptions((prevCheckboxOptions) =>
				prevCheckboxOptions.filter((option) => option !== e.target.value)
			)
		}
	}

	const checkboxItems = checkboxOptions.map((option) => (
		<Checkbox
			style={{
				width: '23%',
				margin: '1.5% 2%',
			}}
			key={option}
			value={option}
			onChange={checkboxChangeHandler}
		>
			{option}
		</Checkbox>
	))

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				width: '100%',
				justifyContent: 'flex-start',
				marginBottom: '2%',
				marginTop: '2%',
				marginLeft: '1%',
			}}
		>
			<label className={inputStyles.input__label} style={{ marginRight :"4.5%"}}>
				Eligible Years
			</label>
			<div
				style={{
					width: '55.5%',
					background: 'white',
					padding: '0.5% 3%',
					marginLeft: '9%',
					borderRadius: '6px',
				}}
			>
				<Checkbox.Group
					style={{
						width: '90%',
					}}
				>
					<Row>{checkboxItems}</Row>
				</Checkbox.Group>
			</div>
		</div>
	)
}

export default EligibilityCheckboxes
