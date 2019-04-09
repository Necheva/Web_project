import React from 'react';
import { observer } from 'mobx-react';

import styles from '@src/components/Content/StatisticCards/NewClients/NewClients.scss';

@observer
class NewClients extends React.Component {
    render() {
        return(
            <div className={styles.container}>
                <div className={styles.headers}>
                 <div>
                    <img src={require('./user-alt-solid.svg')} width={25} height={25} />
                 </div>
                 <div className={styles.textColor}>+12%</div>
                </div>
                <div className={styles.count}>32</div>
                <div className={styles.title}>New Clients</div>
            </div>
        );
    }
}

export default NewClients;