import React from "react";
import styles from "../../styles/Components/top-card.module.css";

interface IProps {
    header: string,
    content: string,
    footer: string,
    color: string
}

const TopCards = ({header, content, footer, color}: IProps) => {
    return (
        <div style={{borderRadius: 10, backgroundColor: color, padding: 15, width: '30%', lineHeight: 0.8}}>
            <div className={styles.top__card__header}>
                <p className={styles.header__text}>{header}</p>
            </div>
            <div className={styles.top__card__content}>
                <p className={styles.content__text}>{content}</p>
            </div>
            <div className={styles.top__card__footer}>
                <p className={styles.footer__text}>{footer}</p>
            </div>
        </div>
    )
}

export default TopCards;