import React from 'react';
import { observer } from 'mobx-react';

import Card from '@src/components/common/Card/Card';
import styles from '@src/components/Frame/Frame.scss';

@observer
class Frame extends React.Component {
    render() {
        return(
            <div className={styles.container}>
                <div className={styles.frame}>
                    <Card className={styles.headerMenu}/>
                    <Card className={styles.separator1}/>
                    <Card className={styles.dash}/>
                    <Card className={styles.separator2}/>
                    <Card className={styles.lastLeads}/>
                    <Card className={styles.separator3}/>
                    <Card className={styles.lastClient}/>
                    <Card className={styles.separator}/>
                </div>
            </div>
        );
    }
}

export default Frame;
