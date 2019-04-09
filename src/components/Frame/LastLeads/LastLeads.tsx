import React from 'react';
import { observer } from 'mobx-react';

import styles from '@src/components/Frame/LastLeads/LastLeads.scss';
import { Link } from 'react-router-dom';

@observer
class LastLeads extends React.Component {
    render() {
        return(
            <div className={styles.container}>
                <div className={styles.text}>Last Leads</div>
                <div className={styles.wrapper}>
                    <div className={styles.image}>
                        <img src={require('./toolbox-solid.svg')} width={25} height={25} />
                    </div>
                    <Link to="/page6/">
                        <div className={styles.title}>Bryce Canyon a stunnin...</div>
                    </Link>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.image}>
                        <img src={require('./toolbox-solid.svg')} width={25} height={25} />
                    </div>
                    <Link to="/page7/">
                        <div className={styles.title}>What makes a hotel boy...</div>
                    </Link>
                </div>
                <Link to="/page8/">
                    <div className={styles.wrapper}>
                        <div className={styles.button}>
                            <div className={styles.button1}>Show More</div>
                        </div>
                    </div>
                </Link>
            </div>
        );
    }
}

export default LastLeads;
