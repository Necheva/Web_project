import React from 'react';

import Frame from '@src/components/Frame/Frame';
import Content from '@src/components/Content/Content';
import styles from '@src/components/App/App.scss';
class App extends React.Component {
  public render() {
    return (
      <div className={styles.scrollDown}>
        <div className={styles.wrapper}>
          <Frame/>
          <Content/>
        </div>
       </div>
    )
  }
}

export default App;
