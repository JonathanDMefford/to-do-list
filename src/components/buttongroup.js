import React from 'react';



class ButtonGroup extends React.Component {
    render() {
        return (
            <div>
                <div className='row mx-auto justify-content-center mt-3'>
                    <button type='button' className='btn btn-primary'>All</button>
                    <button type='button' className='btn btn-primary mx-2'>Completed</button>
                    <button type='button' className='btn btn-primary'>Clear All</button>
                </div>
            </div>
        )
    }
}



export default ButtonGroup