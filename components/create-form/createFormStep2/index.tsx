import React from 'react'

import DocCheckboxes from './DocCheckboxes'
import CustomDoc from './CustomDoc'

import useFormStore from '../formStore'

import { Button } from 'antd'
import { MdLibraryAdd } from 'react-icons/md'

import inputStyles from '../../../styles/Components/CustomInput.module.css'
import styles from '../../../styles/Pages/create-form-step1.module.css'

const CreateFormStep2 = () => {
	const { customDocs, addCustomDocComponent, deleteCustomDocComponent } =
		useFormStore()

	const customDocsComponents = React.useMemo(
		() =>
			customDocs.map(
				(
					customDoc: { isDeleted: any; title: string | null },
					index: number
				) => {
					if (customDoc.isDeleted) return null
					return (
						<CustomDoc
							key={index}
							index={index}
							title={customDoc.title}
							deleteCustomDocComponent={() => deleteCustomDocComponent(index)}
						/>
					)
				}
			),
		[customDocs, deleteCustomDocComponent]
	)

	return (
		<div className={inputStyles.create__form__body}>
			<DocCheckboxes />
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

export default CreateFormStep2
