import React from 'react';
import { observer } from 'mobx-react';

import Card from '@src/components/common/Card/Card';
import styles from '@src/components/Content/Content.scss';
import StatisticCards from '@src/components/Content/StatisticCards/StatisticCards';
import Statistic from '@src/components/Content/Statistic/Statistic';
import Graphics from '@src/components/Content/Graphics/Graphics';

@observer
class Content extends React.Component {
    render() {
        return(
            <div className={styles.container}>
                <div className={styles.frame}>
                    <Card className={styles.hederSearch}/>
                    <Card className={styles.separator}/>
                    <Card className={styles.statistic}>
                        <Statistic/>
                    </Card>
                    <Card className={styles.separator1}/>
                    <Card className={styles.statisticCards}>
                        <StatisticCards/>
                    </Card>
                    <Card className={styles.graphics}>
                        <Graphics/>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Content;
