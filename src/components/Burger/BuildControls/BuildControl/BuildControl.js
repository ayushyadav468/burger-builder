import React from 'react';
import styles from './BuildControl.module.css';

const buildControl = (props) => (
  <div className={styles.BuildControl}>
    <div className={styles.Label}>{props.label}</div>
    <button className={styles.More} onClick={props.addIngredient}>
      More
    </button>
    <button
      className={styles.Less}
      onClick={props.removeIngredient}
      disabled={props.disabled}
    >
      Less
    </button>
  </div>
);

export default buildControl;
