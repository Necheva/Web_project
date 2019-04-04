import React from 'react';
import { observer } from 'mobx-react';

import styles from '@src/components/Content/StatisticCards/Leads/Leads.scss';

@observer
class Content extends React.Component {
    render() {
        return(
            <div className={styles.container}>
                <div className={styles.headers}>
                 <div>
                    <img src={require('./box.jpeg')} width={25} height={25} />
                 </div>
                 <div className={styles.textColor}>-5%</div>
                </div>
                <div className={styles.count}>64</div>
                <div className={styles.title}>Leads</div>
            </div>
        );
    }
}

export default Content;
