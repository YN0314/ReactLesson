import React from 'react';
import { Link } from 'react-router-dom';
import One from './one';

class Two extends React.Component {
    render() {
        return (
            <div>
                test_two<br/>
                <Link to='/'>to_one</Link>
            </div>
        )
    }
}

export default Two;
