import React from 'react'

import { Button } from 'antd'
import { DeleteOutlined, SaveOutlined } from '@ant-design/icons'

import useFormStore from '../formStore'

type CustomDocType = {
	title: string | null
	deleteCustomDocComponent: () => void
	index: number
}

const CustomDoc = ({
	title,
	deleteCustomDocComponent,
	index,
}: CustomDocType) => {
	const { changeCustomDocTitleByIndex } = useFormStore()

	return (
		<div
			style={{
				backgroundColor: 'white',
				borderRadius: '6px',
				padding: '2% 4%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				marginTop: '2%',
			}}
		>
			<div style={{ width: '45%' }}>
				{title !== null ? (
					<input
						value={title}
						style={{ width: '100%', border: '0', fontSize: '1.2rem' }}
						onChange={(e) => {
							changeCustomDocTitleByIndex(index, e.target.value)
						}}
					/>
				) : (
					<input
						placeholder="Custom Document Name"
						style={{ width: '100%', border: '0', fontSize: '1.2rem' }}
						onChange={(e) => {
							changeCustomDocTitleByIndex(index, e.target.value)
						}}
					/>
				)}
				<div
					style={{ height: '1px', width: '100%', backgroundColor: '#A39797' }}
				/>
			</div>
			<Button
				icon={<DeleteOutlined size={50} style={{ color: 'white' }} />}
				style={{
					border: 'none',
					width: '50px',
					background: 'red',
					borderRadius: '6px',
				}}
				onClick={deleteCustomDocComponent}
			/>
		</div>
	)
}

export default CustomDoc
