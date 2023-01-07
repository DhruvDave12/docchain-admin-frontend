import React from "react";
import styles from "../../styles/Components/form-overview.module.css";
import CustomButton from "../CustomButton";
import { Card } from "antd";
import { useRouter } from "next/router";

const FormOverview = ({ form }: any) => {
  const router = useRouter();
  // function that navigate to other page using next js router
  const navigateToForm = () => {
    router.push(`/form-responses/${form.id}`);
  };

  return (
    // <div className={styles.form__overview__wrapper}>
    //     <div className={styles.form__title}>FORM #X</div>

    //     <div className={styles.form__view__button}>
    //         <div className={styles.form__view__inner__wrapper}>
    //             <CustomButton handleClick={() => {}} title={'View'} style={{
    //                 backgroundColor: '#F2F2F2',
    //                 color: '#000000',
    //                 width: '100%',
    //                 padding: '0.5rem 0',
    //                 fontSize: '1.2rem',
    //                 fontWeight: 500,
    //                 borderRadius: '0.5rem',
    //                 border: 'none',
    //                 cursor: 'pointer'
    //             }}/>
    //         </div>
    //     </div>
    // </div>
    <Card title= {form.title} bordered={false} style={{ width: "100%" }}>
      <div className={styles.form__view__button}>
        <p className={styles.form__overview__title2}>{form.description}</p>
        <p className={styles.form__overview__title3}>Academic Year: {form.academic_year}</p>
        <p className={styles.form__overview__title4}>Deadline: {form.deadline}</p>

        <div className={styles.form__view__inner__wrapper}>
          <CustomButton
            handleClick={navigateToForm}
            title={"View"}
          />
        </div>
      </div>
    </Card>
  );
};

export default FormOverview;
