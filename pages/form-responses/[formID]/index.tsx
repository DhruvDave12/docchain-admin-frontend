import React, { useEffect, useState } from "react";
import CustomButton from "../../../components/CustomButton";
import CustomTable from "../../../components/table";
import styles from "../../../styles/Pages/form-response.module.css";
import AxiosInstance from "../../../services/AxiosInstance";
import { useRouter } from "next/router";

const FormResponses = () => {
    const router = useRouter();
    const [responses, setResponses] = useState([]);
    const [loading, setLoading] = useState(false);

    const { formID } = router.query;
    useEffect(() => {
        const getResponses = async () => {
            setLoading(true);
            
            const res = await AxiosInstance.post(`/adminpanel/view-responses/`,{
                form: formID
            });
            console.log("FORM RESPONSES: ", res.data);
            setResponses(res.data);
            setLoading(false);
        }
        getResponses();
    }, []);
    return (
        <div className={styles.form__response__wrapper}>
            <div className={styles.form__response__header}>
                <div className={styles.container__part1}>
                    <p className={styles.form__response__title}>Form #{formID}</p>
                </div>
                <div className={styles.button__container}>
                    <CustomButton handleClick={() => {}} title={"Download"} />
                </div>
            </div>

            <CustomTable data={responses} loading={loading}/>
        </div>
    )
}

export default FormResponses;