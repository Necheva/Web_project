import React from 'react';
import { observer } from 'mobx-react';

import Card from '@src/components/common/Card/Card';
import styles from '@src/components/Content/StatisticCards/StatisticCards.scss';
import Leads from '@src/components/Content/StatisticCards/Leads/Leads';
import NewClients from '@src/components/Content/StatisticCards/NewClients/NewClients';
import NewCompanies from '@src/components/Content/StatisticCards/NewCompanies/NewCompanies';
import Task from '@src/components/Content/StatisticCards/Task/Task';
import TrafficSources from '@src/components/Content/StatisticCards/TrafficSources/TrafficSources';
import CompletedToDo from '@src/components/Content/StatisticCards/CompletedToDo/CompletedToDo';
import LeadsNoToDo from '@src/components/Content/StatisticCards/LeadsNoToDo/LeadsNoToDo';
import Email from '@src/components/Content/StatisticCards/Email/Email';
import Cals from '@src/components/Content/StatisticCards/Cals/Cals';
import SequentialSchedule from '@src/components/Content/StatisticCards/SequentialSchedule/SequentialSchedule';

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
                    <Card className={styles.completedToDo}>
                        <CompletedToDo/>
                    </Card>
                    <Card className={styles.leadsNoToDo}>
                        <LeadsNoToDo/>
                    </Card>
                    <Card className={styles.email}>
                        <Email/>
                    </Card>
                    <Card className={styles.cals}>
                        <Cals/>
                    </Card>
                    <Card className={styles.sequentialSchedule}>
                        <SequentialSchedule/>
                    </Card>
                    
            </div>
        );
    }
}

export default StatisticCards;
