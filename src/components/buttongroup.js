import React from 'react';


//filter through different views depending on finished or unfinished
//all buttons shows all todos regardless of finished
//unfinished shows finished: false
//completed shows finished: true


class ButtonGroup extends React.Component {
    constructor(props) {
        super(props);
        this.handleAll = this.handleAll.bind(this);
        this.handleLeft = this.handleLeft.bind(this);
        this.handleDone = this.handleDone.bind(this);
    }

    //All button that shows every time regardless of status
    //Unfinished button that shows items with finished status of false
    //Completed button that shows items with finished status of true
    handleAll(e) {
        //parentfunction filter showAll
    }

    handleLeft(e) {
        //parentfunction filter showLeft
    }

    handleDone(e) {
        //parentfunction filter showDone
    }

    
    render() {
        return (
            <div>
                <div className='row mx-auto justify-content-center my-3'>
                    <button type='button' className='btn btn-primary' onClick={this.handleAll}>All</button>
                    <button type='button' className='btn btn-warning ml-2' onClick={this.handleLeft}>Unfinished</button>
                    <button type='button' className='btn btn-success mx-2' onClick={this.handleDone}>Completed</button>
                </div>
            </div>
        );
    }
}



export default ButtonGroup