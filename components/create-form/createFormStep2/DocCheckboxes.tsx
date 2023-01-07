import React from 'react'

import { Checkbox, Row } from 'antd'
import { CheckboxChangeEvent } from 'antd/lib/checkbox'

import useFormStore from '../formStore'
import AxiosInstance from '../../../services/AxiosInstance'

import inputStyles from '../../../styles/Components/CustomInput.module.css'

const DocCheckboxes = () => {
	const { selectCheckboxOption, unselectCheckboxOption } = useFormStore(
		(state) => ({
			selectCheckboxOption: state.selectCheckboxOption,
			unselectCheckboxOption: state.unselectCheckboxOption,
		})
	)

	const checkboxOptions = React.useMemo(
		() => [
			'SSC',
			'HSC',
			'AdhaarFile',
			'MigrationCertificate',
			'JEEmarksheet',
			'JEEallotmentLetter',
			'DisabilityCertificate',
			'DomicileCertificate',
			'PAN',
			'BirthCertificate',
			'SportsCertificate',
			'TransferCertificate',
			'CasteCertificate',
			'Passport',
			'IncomeCertificate',
			'MedicalCertificate',
			'NationalityCertificate',
		],
		[]
	)

	const checkboxChangeHandler = (e: CheckboxChangeEvent) => {
		const value = e.target.value

		if (e.target.checked) {
			selectCheckboxOption(value)
		} else {
			unselectCheckboxOption(value)
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
			}}
		>
			<label className={inputStyles.input__label}>Required Documents</label>
			<div
				style={{
					width: '60%',
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

export default DocCheckboxes
