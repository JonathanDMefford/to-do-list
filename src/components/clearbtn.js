import React from 'react';



class ClearButton extends React.Component {
    constructor(props) {
        super(props);
        this.clearAll = this.clearAll.bind(this);
    }

    clearAll(e) {
        window.localStorage.clear();
        this.setState()
    }

    render() {
        return (
            <div>
                <div className='row mx-auto justify-content-center mt-3'>
                    <button type='button' className='btn btn-danger'>Clear All</button>
                </div>
            </div>
        );
    }
}



export default ClearButton