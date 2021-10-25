import React from 'react';
import { Link } from 'react-router-dom';
import Two from './two';

class One extends React.Component {
    render() {
        return (
            <div>
                test_one<br/>
                <Link to='/two'>to_two</Link>
            </div>
        )
    }
}

export default One;
