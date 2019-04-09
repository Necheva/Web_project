import React from 'react';
import { observer } from 'mobx-react';

import styles from '@src/components/Content/StatisticCards/Email/Email.scss';

@observer
class Email extends React.Component {
    render() {
        return(
            <div className={styles.container}>
                <div className={styles.headers}>
                 <div>
                    <img src={require('./envelope-regular.svg')} width={25} height={25} />
                 </div>
                 <div className={styles.textColor}>+11%</div>
                </div>
                <div className={styles.count}>87</div>
                <div className={styles.title}>Email</div>
            </div>
        );
    }
}

export default Email;