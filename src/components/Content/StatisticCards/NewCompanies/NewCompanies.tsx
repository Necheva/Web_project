import React from 'react';
import { observer } from 'mobx-react';

import styles from '@src/components/Content/StatisticCards/NewCompanies/NewCompanies.scss';

@observer
class NewCompanies extends React.Component {
    render() {
        return(
            <div className={styles.container}>
                <div className={styles.headers}>
                 <div>
                    <img src={require('./building-regular.svg')} width={25} height={25} />
                 </div>
                 <div className={styles.textColor}>+5%</div>
                </div>
                <div className={styles.count}>22</div>
                <div className={styles.title}>New Companies</div>
            </div>
        );
    }
}

export default NewCompanies;
