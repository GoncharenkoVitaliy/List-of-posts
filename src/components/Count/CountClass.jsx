import React from 'react';
import styles from './Count.module.css';

export class CounterClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.decrement = this.decrement.bind(this)
    }

    increment = () => {
        this.setState({count: this.state.count + 1});
    }

    decrement() {
        this.setState({count: this.state.count - 1});
    }

    render () {
        return(
            <div className={styles.count_two}>
                <h1>{this.state.count}</h1>
                <div>
                    <button onClick={this.increment} className={styles.button}>Increment</button>
                    <button onClick={this.decrement} className={styles.button}>Decrement</button>
                </div>
            </div>
        )
    }
}