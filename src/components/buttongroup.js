import React from 'react';



class ButtonGroup extends React.Component {
    render() {
        return (
            <div>
                <div className='row mx-auto justify-content-center my-3'>
                    <button type='button' className='btn btn-primary'>All</button>
                    <button type='button' className='btn btn-success mx-2'>Completed</button>
                </div>
            </div>
        );
    }
}



export default ButtonGroup