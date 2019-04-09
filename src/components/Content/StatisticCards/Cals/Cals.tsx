import React from 'react';
import { observer } from 'mobx-react';

import styles from '@src/components/Content/StatisticCards/Cals/Cals.scss';

@observer
class Cals extends React.Component {
    render() {
        return(
            <div className={styles.container}>
                <div className={styles.headers}>
                 <div>
                    <img src={require('./phone-volume-solid.svg')} width={25} height={25} />
                 </div>
                 <div className={styles.textColor}>+15%</div>
                </div>
                <div className={styles.count}>64</div>
                <div className={styles.title}>Cals</div>
            </div>
        );
    }
}

export default Cals;