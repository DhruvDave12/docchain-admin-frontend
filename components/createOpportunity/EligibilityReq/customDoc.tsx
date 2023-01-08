import React from 'react'

import { Button } from 'antd'
import { DeleteOutlined, SaveOutlined } from '@ant-design/icons'

// import useFormStore from '../formStore'

type CustomDocType = {
	title: string | null
	deleteCustomDocComponent: () => void
	index: number,
	flag: boolean,
    setCustomDocs: any
}

const CustomDocJ = ({
	title,
	deleteCustomDocComponent,
	index,
    setCustomDocs
}: CustomDocType) => {
	// const { changeCustomDocTitleByIndex } = useFormStore()
    const changeCustomDocTitleByIndex = (index: any, newVal: any) =>
    {
        // @ts-ignore
        setCustomDocs((prevcustomDocs: any) => {
            const newCustomDocs = [...prevcustomDocs]
            newCustomDocs[index].title = newVal
            return newCustomDocs;
        })
    }
    // set((state) => {
    //     const newCustomDocs = [...state.customDocs]
    //     newCustomDocs[index].title = newVal
    //     return { customDocs: newCustomDocs }
    // }),


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

export default CustomDocJ
