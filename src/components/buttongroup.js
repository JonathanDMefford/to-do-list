import React from 'react';


//filter through different views depending on finished or unfinished
//all buttons shows all todos regardless of finished
//unfinished shows finished: false
//completed shows finished: true


class ButtonGroup extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <div className='row mx-auto justify-content-center my-3'>
                    <button type='button' className='btn btn-primary'>All</button>
                    <button type='button' className='btn btn-warning ml-2'>Unfinished</button>
                    <button type='button' className='btn btn-success mx-2'>Completed</button>
                </div>
            </div>
        );
    }
}



export default ButtonGroup