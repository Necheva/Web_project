import React from 'react';
import { observer } from 'mobx-react';

import styles from '@src/components/Content/StatisticCards/Task/Task.scss';

@observer
class Task extends React.Component {
    render() {
        return(
            <div className={styles.container}>
                <div className={styles.headers}>
                 <div>
                    <img src={require('./Capture.JPG')} width={25} height={25} />
                 </div>
                 <div className={styles.textColor}>+17%</div>
                </div>
                <div className={styles.count}>78</div>
                <div className={styles.title}>Task</div>
            </div>
        );
    }
}

export default Task;
