import React, { useState, useEffect } from 'react'
import { Table, Tag, Dropdown, Menu, Space } from 'antd'
import AxiosInstance from '../services/AxiosInstance'
import useFormStore from './create-form/formStore'
const imageLink =
	'https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=785&q=80'

const menu = (
	<Menu
		items={[
			{
				label: <a href="https://www.antgroup.com">Edit</a>,
				key: '0',
			},
			{
				label: <a href="https://www.aliyun.com">Delete</a>,
				key: '1',
			},
		]}
	/>
)

const columns = [
	{
		title: 'Image',
		dataIndex: 'image',
		key: 'image',
		render: (image: any) => (
			<img
				src={image}
				alt="image"
				style={{ height: 40, width: 40, borderRadius: '50%' }}
			/>
		),
		width: '5%',
	},
	{
		title: 'Name',
		dataIndex: 'name',
		sorter: true,
		render: (name: any) => (
			<p style={{ fontWeight: '400', fontSize: 16, color: '#6C757D' }}>
				{name}
			</p>
		),
		width: '20%',
	},
	{
		title: 'Applied On',
		dataIndex: 'appliedOn',
		render: (appliedOn: any) => (
			<p style={{ fontWeight: '400', fontSize: 16, color: '#6C757D' }}>
				{appliedOn}
			</p>
		),
		width: '30%',
	},
	{
		title: 'Branch',
		dataIndex: 'branch',
		width: '10%',
		sorter: true,
		render: (branch: any) => (
			<p style={{ fontWeight: '400', fontSize: 16, color: '#6C757D' }}>
				{branch}
			</p>
		),
		filters: [
			{
				text: 'CSE',
				value: 'cse',
			},
			{
				text: 'IT',
				value: 'it',
			},
			{
				text: 'Electrical',
				value: 'ee',
			},
			{
				text: 'Electronics',
				value: 'ece',
			},
			{
				text: 'Mechanical',
				value: 'me',
			},
			{
				text: 'Chemical',
				value: 'chm',
			},
		],
	},
	{
		title: 'Degree',
		dataIndex: 'degree',
		render: (degree: any) => (
			<p style={{ fontWeight: '400', fontSize: 16, color: '#6C757D' }}>
				{degree}
			</p>
		),
		width: '10%',
	},
	{
		title: 'Status',
		dataIndex: 'status',
		render: (status: any) => (
			<span>
				{status === 'Peassesment' ? (
					<Tag color={'gold'} key={status}>
						{status}
					</Tag>
				) : null}
				{status === 'Verified' ? (
					<Tag color={'green'} key={status}>
						{status}
					</Tag>
				) : null}
				{status === 'Rejected' ? (
					<Tag color={'volcano'} key={status}>
						{status}
					</Tag>
				) : null}
				{status === 'Unverified' ? (
					<Tag color={'volcano'} key={status}>
						{status}
					</Tag>
				) : null}
			</span>
		),
		width: '10%',
	},
	{
		title: 'Action',
		dataIndex: 'action',
		render: (action: any) => (
			<span style={{ display: 'flex', justifyContent: 'center' }}>
				<Dropdown overlay={menu} trigger={['click']}>
					<a onClick={(e) => e.preventDefault()}>
						<Space>...</Space>
					</a>
				</Dropdown>
			</span>
		),
		width: '5%',
	},
]
const data = [
	{
		id: 1,
		image: imageLink,
		name: 'Dhruv Dave',
		appliedOn: 'August 22, 2022',
		branch: 'CSE',
		degree: 'B.Tech',
		status: 'Verified',
		action: '...',
	},
	{
		id: 2,
		image: imageLink,
		name: 'Dhruv Dave',
		appliedOn: 'August 22, 2022',
		branch: 'CSE',
		degree: 'B.Tech',
		status: 'Unverified',
		action: '...',
	},
	{
		id: 3,
		image: imageLink,
		name: 'Dhruv Dave',
		appliedOn: 'August 22, 2022',
		branch: 'CSE',
		degree: 'B.Tech',
		status: 'Verified',
		action: '...',
	},
	{
		id: 4,
		image: imageLink,
		name: 'Dhruv Dave',
		appliedOn: 'August 22, 2022',
		branch: 'CSE',
		degree: 'B.Tech',
		status: 'Verified',
		action: '...',
	},
	{
		id: 5,
		image: imageLink,
		name: 'Dhruv Dave5',
		appliedOn: 'August 22, 2022',
		branch: 'CSE',
		degree: 'B.Tech',
		status: 'Rejected',
		action: '...',
	},
	{
		id: 6,
		image: imageLink,
		name: 'Dhruv Dave6',
		appliedOn: 'August 22, 2022',
		branch: 'Mechanical',
		degree: 'M.Tech',
		status: 'Peassesment',
		action: '...',
	},
	{
		id: 7,
		image: imageLink,
		name: 'Dhruv Dave7',
		appliedOn: 'August 22, 2022',
		branch: 'Mechanical',
		degree: 'M.Tech',
		status: 'Peassesment',
		action: '...',
	},
	{
		id: 8,
		image: imageLink,
		name: 'Dhruv Dave8',
		appliedOn: 'August 22, 2022',
		branch: 'Mechanical',
		degree: 'M.Tech',
		status: 'Peassesment',
		action: '...',
	},
	{
		id: 9,
		image: imageLink,
		name: 'Dhruv Dave9',
		appliedOn: 'August 22, 2022',
		branch: 'Mechanical',
		degree: 'M.Tech',
		status: 'Peassesment',
		action: '...',
	},
	{
		id: 10,
		image: imageLink,
		name: 'Dhruv Dave10',
		appliedOn: 'August 22, 2022',
		branch: 'Mechanical',
		degree: 'M.Tech',
		status: 'Peassesment',
		action: '...',
	},
]

const CustomTable = () => {
	const formId = useFormStore((state) => state.formId)

	const [data, setData] = useState([])
	const [loading, setLoading] = useState(false)
	const [pagination, setPagination] = useState({
		current: 1,
		pageSize: 6,
		total: 10,
	})

	// API REQUEST FROM BACKEND
	useEffect(() => {
		console.log('FORM ID', formId)
		const ACCESS_TOKEN =
			'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc4Nzc5NDEzLCJpYXQiOjE2NjE0OTk0MTMsImp0aSI6IjdiM2E2NzYzNWIxYjRkYWZiMTljYTg1NmI3NGQ0MWI1IiwidXNlcl9pZCI6Mn0.dzHFep_buR6XWpNCkrOkGEuh7Ah1H3M0M1sfL85XogM'
		AxiosInstance.post(
			'/adminpanel/view-responses/',
			{
				form: formId,
			},
			{
				headers: {
					Authorization: `Bearer ${ACCESS_TOKEN}`,
				},
			}
		).then((res) => console.log(res.data))
	}, [formId])

	// const fetchData = (params: any) => {
	// 	setLoading(true)
	// 	fetch(
	// 		`https://randomuser.me/api/`
	// 	)
	// 		.then((res) => res.json())
	// 		.then(({ results }) => {
	// 			setData(results)
	// 			setLoading(false)
	// 			setPagination({
	// 				...params.pagination,
	// 				total: 200, // 200 is mock data, you should read it from server
	// 				// total: data.totalCount,
	// 			})
	// 		})
	// }
	// useEffect(() => {
	// 	fetchData({
	// 		pagination,
	// 	})
	// }, [])

	// const handleTableChange = ({ newPagination, filters, sorter }: any) => {
	// 	fetchData({
	// 		sortField: sorter.field,
	// 		sortOrder: sorter.order,
	// 		pagination: newPagination,
	// 		...filters,
	// 	})
	// }
	const handleChange = (newPagination: any) => {
		setPagination(newPagination)
	}
	return (
		<Table
			columns={columns}
			rowKey={(record) => record.id}
			dataSource={data}
			pagination={pagination}
			loading={loading}
			onChange={handleChange}
		/>
	)
}

export default CustomTable
