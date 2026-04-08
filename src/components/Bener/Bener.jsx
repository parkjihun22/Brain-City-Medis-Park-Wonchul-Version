import React, { useEffect, useState } from "react";
import styles from "./Bener.module.scss";
import img from "../../assets/Bener/bener.jpg";

const Bener = ({ title }) => {
    const [isLoaded, setIsLoaded] = useState(false);

    // 이미지가 로드된 후 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true); // 이미지 로딩 후 애니메이션을 시작
        }, 100); // 0.1초 후에 애니메이션을 시작

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.container}>
            {/* 배너 이미지 */}
            <img
                className={`${styles.benerImage} ${isLoaded ? styles.showImage : ''}`}
                src={img}
                alt="평택 브레인시티 메디스파크 배너 이미지"
            />
            <div className={styles.overlay}></div>
            <div
                className={`${styles.contents} ${isLoaded ? styles.showContents : ''}`}
            >
                <div
                    className={`${styles.title} ${isLoaded ? styles.showTitle : ''}`}
                >
                    {title}
                </div>
                {contents(title, isLoaded)}
            </div>
        </div>
    );
};

export default Bener;

const contents = (text, isLoaded) => {
    if (text === '메디스파크' || text === '홍보영상' || text === '체크포인트' || text === '당첨자서류안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    미래가치를 먼저 누리는 브레인시티의 새로운 중심
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    아주대병원(예정) · 첨단산업 인프라를 가까이 누리는 프리미엄
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    평택 브레인시티 메디스파크에서 시작됩니다
                </div>
            </>
        );
    } else if (
        text === '사업개요' ||
        text === '세대안내' ||
        text === '인테리어' ||
        text === '청약안내' ||
        text === '모집공고안내' ||
        text === '인지세납부안내'
    ) {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    평택 브레인시티 공동 6BL에 들어서는 1,215세대 대단지
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    전용 59㎡ · 84㎡ · 101㎡ 구성의 브랜드 프리미엄
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    첨단산업 · 의료 · 교육 비전을 품은 미래 주거가치
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    평택 브레인시티 메디스파크
                </div>
            </>
        );
    } else if (text === '입지환경') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    아주대병원(예정), 카이스트 평택캠퍼스(예정), 산업 인프라가 모이는 중심 입지
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    평택지제역 광역교통망과 브레인시티 미래가치를 가까이 누립니다
                </div>
            </>
        );
    } else if (text === '단지안내') {
        return (
            <>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    지하 2층~지상 35층, 총 10개동의 스케일 있는 대단지 설계
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    다양한 커뮤니티와 쾌적한 생활 동선을 고려한 특화설계
                </div>
                <div className={`${styles.text} ${isLoaded ? styles.showText : ''}`}>
                    브레인시티의 새로운 주거 프리미엄, 평택 브레인시티 메디스파크
                </div>
            </>
        );
    }
};
