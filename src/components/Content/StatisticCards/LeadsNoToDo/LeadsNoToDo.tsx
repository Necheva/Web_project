import React from 'react';
import { observer } from 'mobx-react';

import styles from '@src/components/Content/StatisticCards/LeadsNoToDo/LeadsNoToDo.scss';

@observer
class LeadsNoToDo extends React.Component {
    render() {
        return(
            <div className={styles.container}>
                <div className={styles.headers}>
                 <div>
                    <img src={require('./history-solid.svg')} width={25} height={25} />
                 </div>
                 <div className={styles.textColor}>+12%</div>
                </div>
                <div className={styles.count}>11</div>
                <div className={styles.title}>Leads No To-Do</div>
            </div>
        );
    }
}

export default LeadsNoToDo;
