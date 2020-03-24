import React from 'react';



class ClearButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    //make clearall function that clears local storage and sets state
    handleClick(e) {
        this.props.parentFunction();
    }

    render() {
        return (
            <div>
                <div className='row mx-auto justify-content-center mt-3'>
                    <button type='button' className='btn btn-danger' onClick={this.handleClick}>Clear All</button>
                </div>
            </div>
        );
    }
}



export default ClearButton