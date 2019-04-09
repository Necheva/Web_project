import React from 'react';
import { observer } from 'mobx-react';

import styles from '@src/components/Content/Statistic/Statistic.scss';


@observer
class Statistic extends React.Component {
    render() {
        return(
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.image}>
                        <img src={require('./chart-line-solid.svg')} width={25} height={25} />
                    </div>
                    <div className={styles.text}>Statistic of Leads and Users</div>
                </div>
                <div className={styles.wrapper}>
                        <div className={styles.box1}>Today</div>
                        <div className={styles.box2}>Week</div>
                        <div className={styles.box3}>Month</div>
                        <div className={styles.box4}>Quater</div>
                        <div className={styles.box5}>Year</div>

                        <div className={styles.boxData}>
                            <div className={styles.insideWrapper}>
                                <img src={require('./calendar-day-solid.svg')} width={25} height={25} />
                                <div className={styles.boxText}>24 Mar - 23 April 2019</div>
                            </div>
                        </div>
                </div>
            </div>
        );
    }
}

export default Statistic;
