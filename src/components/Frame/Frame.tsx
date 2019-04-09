import React from 'react';
import { observer } from 'mobx-react';

import Card from '@src/components/common/Card/Card';
import styles from '@src/components/Frame/Frame.scss';
import Dash from '@src/components/Frame/Dash/Dash';
import LastLeads from '@src/components/Frame/LastLeads/LastLeads';
import HeaderMenu from '@src/components/Frame/HeaderMenu/HeaderMenu';
import LastClient from '@src/components/Frame/LastClient/LastClient';

@observer
class Frame extends React.Component {
    render() {
        return(
            <div className={styles.container}>
                <div className={styles.frame}>
                    <Card className={styles.headerMenu}>
                        <HeaderMenu/>
                    </Card>
                    <Card className={styles.separator1}/>
                    <Card className={styles.dash}>
                        <Dash/>
                    </Card>
                    <Card className={styles.separator2}/>
                    <Card className={styles.lastLeads}>
                        <LastLeads/>
                    </Card>
                    <Card className={styles.separator3}/>
                    <Card className={styles.lastClient}>
                        <LastClient/>
                    </Card>
                    <Card className={styles.separator}/>
                </div>
            </div>
        );
    }
}

export default Frame;
