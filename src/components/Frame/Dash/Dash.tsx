import React from 'react';
import { observer } from 'mobx-react';

import styles from '@src/components/Frame/Dash/Dash.scss';
import { Link } from 'react-router-dom';

@observer
class Dash extends React.Component {
    render() {
        return(
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div className={styles.image}>
                        <img src={require('./columns-solid.svg')} width={25} height={25} />
                    </div>
                    <Link to="/page1/">
                        <div className={styles.title}>Dashboard</div>
                    </Link>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.image}>
                        <img src={require('./user-circle-solid.svg')} width={25} height={25} />
                    </div>
                    <Link to="/page2/">
                        <div className={styles.title}>Deals</div>
                    </Link>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.image}>
                        <img src={require('./star-solid.svg')} width={25} height={25} />
                    </div>
                    <Link to="/page3/">
                        <div className={styles.title}>Contact</div>
                    </Link>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.image}>
                        <img src={require('./chart-line-solid.svg')} width={25} height={25} />
                    </div>
                    <Link to="/page4/">
                        <div className={styles.title}>Stats</div>
                    </Link>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.image}>
                        <img src={require('./cog-solid.svg')} width={25} height={25} />
                    </div>
                    <Link to="/page5/">
                        <div className={styles.title}>Settings</div>
                    </Link>
                </div>
            </div>
        );
    }
}

export default Dash;
