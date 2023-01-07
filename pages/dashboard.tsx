// @ts-nocheck

import React, { useState, useEffect } from 'react'
import CreateFormComp from '../components/dashboard/create-newform'
import TopCards from '../components/dashboard/top-cards'
import styles from '../styles/Pages/dashboard.module.css'
import { Pie } from '@ant-design/plots'
import CustomInput from '../components/CustomInput'
import { Line } from '@ant-design/plots'
import RightBottomModal from '../components/dashboard/rightBottomModal'

const Dashboard = () => {
	const [resdata, setResData] = useState([])

	useEffect(() => {
		asyncFetch()
	}, [])

	const asyncFetch = () => {
		fetch(
			'https://gw.alipayobjects.com/os/bmw-prod/1d565782-dde4-4bb6-8946-ea6a38ccf184.json'
		)
			.then((response) => response.json())
			.then((json) => setResData(json))
			.catch((error) => {
				console.log('fetch data failed', error)
			})
	}
	const data = [
		{
			type: 'Male',
			value: 60,
		},
		{
			type: 'Female',
			value: 40,
		},
	]

	const config = {
		appendPadding: 10,
		data,
		angleField: 'value',
		colorField: 'type',
		radius: 1,
		innerRadius: 0.6,
		label: {
			type: 'inner',
			offset: '-50%',
			content: '{value}',
			style: {
				textAlign: 'center',
				fontSize: 14,
			},
		},
		interactions: [
			{
				type: 'element-selected',
			},
			{
				type: 'element-active',
			},
		],
		statistic: {
			title: false,
			content: {
				style: {
					whiteSpace: 'pre-wrap',
					overflow: 'hidden',
					textOverflow: 'ellipsis',
				},
				content: '',
			},
		},
	}

	const formResData = [
		{
			value: 'form1',
			name: 'Form 1',
		},
		{
			value: 'form2',
			name: 'Form 2',
		},
		{
			value: 'form3',
			name: 'Form 3',
		},
		{
			value: 'form4',
			name: 'Form 4',
		},
	]

	const resConfig = {
		data: resdata,
		padding: 'auto',
		xField: 'Date',
		yField: 'scales',
		xAxis: {
			// type: 'timeCat',
			tickCount: 5,
		},
	}
	return (
		<div className={styles.main__wrapper}>
			<div className={styles.main__left__wrapper}>
				<div className={styles.top__card__wrapper}>
					<TopCards
						color="#FFEFE7"
						content="346"
						header="AY 2023 UG"
						footer="346 students registered"
					/>
					<TopCards
						color="#E8F0FB"
						content="107"
						header="AY 2023 PG"
						footer="107 students registered"
					/>
					<TopCards
						color="#FDEBF9"
						content="24"
						header="AY 2023 DIPLOMA"
						footer="24 students registered"
					/>
				</div>
				<div className={styles.student__composition}>
					<div className={styles.student__composition__inner__wrapper}>
						<div className={styles.composition__header}>
							<p className={styles.composition__text}>Student Composition</p>
						</div>
						<div className={styles.pie__chart__wrapper}>
							<Pie {...config} />
						</div>
					</div>
				</div>

				<div className={styles.frequency__wrapper}>
					<div className={styles.frequency__inner__wrapper}>
						<div className={styles.frequency__header}>
							<div>
								<p className={styles.frequency__text}>Form Reponse History</p>
							</div>
							<div style={{ width: '50%', marginTop: 5 }}>
								<CustomInput
									type="drop-down"
									data={formResData}
									placeholder={'Form Name'}
									label={''}
								/>
							</div>
						</div>
						<div className={styles.freq__response__wrapper}>
							{/* <Pie {...config} /> */}
							<Line {...resConfig} />
						</div>
					</div>
				</div>
			</div>
			<div className={styles.main__right__wrapper}>
				<div className={styles.create__form__wrapper}>
					<CreateFormComp />
				</div>
				<div className={styles.aicte__details__wrapper}>
					<RightBottomModal />
				</div>
			</div>
		</div>
	)
}

export default Dashboard
