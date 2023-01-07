import React from 'react'
import styles from '../../styles/Components/right-modal-dash.module.css'

const RightBottomModal = () => {
	return (
		<div className={styles.right__modal__wrapper}>
			<div className={styles.right__header}>
				<p className={styles.header__text}>Admin Details</p>
			</div>
			<div className={styles.section__container}>
				<p className={styles.section__text}>Insitute Name</p>
				<div className={styles.section__inner__container}>
					<p className={styles.content__txt}>IIIT Vadodara</p>
					<p className={styles.content__other__txt}>Vadodara</p>
				</div>
			</div>
			<div className={styles.section__container}>
				<p className={styles.section__text}>Admin Unique ID</p>
				<div className={styles.section__inner__container}>
					<p className={styles.content__txt}>9750473A2849</p>
				</div>
			</div>
			<div className={styles.section__container}>
				<p className={styles.section__text}>Insitute Type</p>
				<div className={styles.section__inner__container}>
					<p className={styles.content__txt}>Deemed to be university</p>
				</div>
			</div>
		</div>
	)
}

export default RightBottomModal
