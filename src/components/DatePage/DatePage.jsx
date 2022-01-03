import React from 'react';

class DatePage extends React.Component {
    state = {
        myCurrentTime: new Date().toLocaleString(),
    }
    render() {
        return (
            <div className="App">
                <p>Current Date and Time: {this.state.myCurrentTime}</p>
            </div>
        );
    }
}

export default DatePage;