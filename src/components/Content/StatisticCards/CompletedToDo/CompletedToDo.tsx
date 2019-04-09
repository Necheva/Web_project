import React from 'react';
import { observer } from 'mobx-react';

import styles from '@src/components/Content/StatisticCards/CompletedToDo/CompletedToDo.scss';

@observer
class CompletedToDo extends React.Component {
    render() {
        return(
            <div className={styles.container}>
                <div className={styles.headers}>
                 <div>
                    <img src={require('./history-solid.svg')} width={25} height={25} />
                 </div>
                 <div className={styles.textColor}>-25%</div>
                </div>
                <div className={styles.count}>21</div>
                <div className={styles.title}>Completed To-Do</div>
            </div>
        );
    }
}

export default CompletedToDo;
