import React from 'react';
import { observer } from 'mobx-react';

import styles from '@src/components/Frame/LastClient/LastClient.scss';
import { Link } from 'react-router-dom';

@observer
class LastClient extends React.Component {
    render() {
        return(
            <div className={styles.container}>
             <div className={styles.text}>Last Client</div>
                <div className={styles.wrapper}>
                    <div className={styles.image}>
                        <img src={require('./user-alt-solid.svg')} width={25} height={25} />
                    </div>
                    <Link to="/page9/">
                        <div className={styles.title}>Leila Estrada</div>
                    </Link>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.image}>
                        <img src={require('./user-alt-solid.svg')} width={25} height={25} />
                    </div>
                    <Link to="/page10/">
                        <div className={styles.title}>Melvin Valdez</div>
                    </Link>
                </div>
                <div className={styles.wrapper}>
                        <div className={styles.button}>
                            <div className={styles.button1}>Show More</div>
                        </div>
                    </div>
            </div>
        );
    }
}

export default LastClient;
