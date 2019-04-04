import React from 'react';
import { observer } from 'mobx-react';

import Card from '@src/components/common/Card/Card';
import styles from '@src/components/Content/StatisticCards/StatisticCards.scss';
import Leads from '@src/components/Content/StatisticCards/Leads/Leads';

@observer
class StatisticCards extends React.Component {
    render() {
        return(
            <div className={styles.container}>
                    <Card className={styles.leads}>
                        <Leads/>
                    </Card>
                    <Card className={styles.newClient}/>
                    <Card className={styles.newCompanies}/>
                    <Card className={styles.task}/>
                    <Card className={styles.trafficSources}/>
                    <Card className={styles.completedToDo}/>
                    <Card className={styles.leadsNoToDo}/>
                    <Card className={styles.email}/>
                    <Card className={styles.cals}/>
                    <Card className={styles.sequentialSchedule}/>
                    
            </div>
        );
    }
}

export default StatisticCards;
