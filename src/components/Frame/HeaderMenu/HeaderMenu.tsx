import React from 'react';
import { observer } from 'mobx-react';

import styles from '@src/components/Frame/HeaderMenu/HeaderMenu.scss';

@observer
class HeaderMenu extends React.Component {
    render() {
        return(
            <div className={styles.container}>
                <div className={styles.image}>
                    <img src={require('./bars-solid.svg')} width={25} height={25} />
                </div>
                <div className={styles.title}>Menu</div>
                <div className={styles.image}>
                    <img src={require('./times-solid.svg')} width={25} height={25} />
                </div>
            </div>
        );
    }
}

export default HeaderMenu;
