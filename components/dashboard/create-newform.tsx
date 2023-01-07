import React from "react";
import styles from "../../styles/Components/create-newform.module.css";
import CustomButton from "../CustomButton";
const CreateFormComp = () => {
    return (
        <div className={styles.create__form__wrapper}>
            <div className={styles.create__form__header}>
                <p className={styles.create__header__text}>Create New Form</p>
            </div>
            <div className={styles.create__form__body}>
                <div className={styles.body__header}>
                    <p className={styles.body__header__text}>Create a new form for Student Admission</p>
                </div>
                <div className={styles.body__content}>
                    <p className={styles.body__content__text}>Kindly fill all the required details for the admission process</p>
                    <p className={styles.body__content__text}>*Once form is created changes cannot be made</p>
                </div>
                <div className={styles.body__footer__wrapper}>
                    <div className={styles.button__inner__wrapper}>
                        <CustomButton handleClick={() => {}} title={"Create"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateFormComp;