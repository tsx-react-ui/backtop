import * as React from 'react'
import Backtop from '../dist/index'
import './index.scss'

export default class App extends React.Component {

    constructor(props, context){
        super(props);
    }


    render() {
        const lists = Array(60).fill(1).map((item, index) => <li key={index}>{index}</li>);

        return (
            <div className="container">
                <h3>Lists</h3>
                <ul id="target">{lists}</ul>
                <Backtop className="custom-back-top" showHeight={300} target={() => document.getElementById('target')} >
                    <div className="custom-back-top-icon">UP</div>
                </Backtop>
            </div>
        )
    }
}
