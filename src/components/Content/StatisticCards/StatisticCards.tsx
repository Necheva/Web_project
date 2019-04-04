import React from 'react';
import { observer } from 'mobx-react';

import Card from '@src/components/common/Card/Card';
import styles from '@src/components/Content/StatisticCards/StatisticCards.scss';
import Leads from '@src/components/Content/StatisticCards/Leads/Leads';
import NewClients from '@src/components/Content/StatisticCards/NewClients/NewClients';
import NewCompanies from '@src/components/Content/StatisticCards/NewCompanies/NewCompanies';
import Task from '@src/components/Content/StatisticCards/Task/Task';
import TrafficSources from '@src/components/Content/StatisticCards/TrafficSources/TrafficSources';

@observer
class StatisticCards extends React.Component {
    render() {
        return(
            <div className={styles.container}>
                    <Card className={styles.leads}>
                        <Leads/>
                    </Card>
                    <Card className={styles.newClient}>
                        <NewClients/>
                    </Card>
                    <Card className={styles.newCompanies}>
                        <NewCompanies/>
                    </Card>
                    <Card className={styles.task}>
                        <Task/>
                    </Card>
                    <Card className={styles.trafficSources}>
                        <TrafficSources/>
                    </Card>
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
