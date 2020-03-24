import React from 'react';



class ClearButton extends React.Component {
    constructor(props) {
        super(props);
        this.clearAll = this.clearAll.bind(this);
    }
    //make clearall function that clears local storage and sets state
    clearAll(e) {
        e.preventDefault();
        window.localStorage.clear();
    }

    render() {
        return (
            <div>
                <div className='row mx-auto justify-content-center mt-3'>
                    <button type='button' className='btn btn-danger' onClick={() => {console.log('clear works')}}>Clear All</button>
                </div>
            </div>
        );
    }
}



export default ClearButton