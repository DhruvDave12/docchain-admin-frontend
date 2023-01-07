import React from 'react'

import DocCheckboxes from '../create-form/createFormStep2/DocCheckboxes'
import CustomDoc from '../create-form/createFormStep2/CustomDoc'

import { Button } from 'antd'
import { MdLibraryAdd } from 'react-icons/md'

import inputStyles from '../../styles/Components/CustomInput.module.css'
import styles from '../../styles/Pages/create-form-step1.module.css'

const DocumentsReq = () => {
	const [selectedCheckboxOptions, setSelectedCheckboxOptions] = React.useState<
		string[]
	>([])

	const [customDocs, setCustomDocs] = React.useState<
		{
			title: string | null
			isDeleted: boolean
		}[]
	>([{ title: null, isDeleted: false }])

	const addCustomDocComponent = () => {
		setCustomDocs((prevCustomDocs) => {
			return [...prevCustomDocs, { title: null, isDeleted: false }]
		})
	}

	const deleteCustomDocComponent = (index: number) => {
		setCustomDocs((prevCustomDocs) => {
			const newCustomDocs = [...prevCustomDocs]
			newCustomDocs[index].isDeleted = true
			return newCustomDocs
		})
	}

	const customDocsComponents = React.useMemo(
		() =>
			customDocs.map((customDoc, index) => {
				if (customDoc.isDeleted) return null
				return (
					<CustomDoc
						title={customDoc.title}
						deleteCustomDocComponent={() => deleteCustomDocComponent(index)}
						key={index}
					/>
				)
			}),
		[customDocs]
	)

	return (
		<div className={inputStyles.create__form__body}>
			<DocCheckboxes setSelectedCheckboxOptions={setSelectedCheckboxOptions} />
			<div
				style={{
					display: 'flex',
					position: 'relative',
					marginTop: '2%',
					marginLeft: '2%',
				}}
			>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
						width: '75%',
					}}
				>
					{customDocsComponents}
				</div>
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						position: 'absolute',
						bottom: '0',
						right: '13vw',
					}}
				>
					<Button
						icon={<MdLibraryAdd size={30} />}
						style={{
							height: '65px',
							width: '65px',
							border: 'none',
							background: 'white',
							borderWidth: '1px',
							borderColor: 'black',
							borderRadius: '6px',
						}}
						onClick={addCustomDocComponent}
					/>
				</div>
			</div>
		</div>
	)
}

export default DocumentsReq
