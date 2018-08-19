import React, { Component } from 'react'; 

class Person extends Component{
    constructor(props){
        super(props)
        this.state = {
            tuoi:0
        }
    }

    _updateOld(){
        let randomNumber = Math.floor( Math.random()*30);
        this.setState({tuoi:randomNumber});
    }

    render(){
        return(
            <div className={"row mt-3"}>
                <div className={"col-md-12"}>
                    <div>Tôi tên là {this.props.name} và tôi {this.state.tuoi} tuổi 
                        và biệt danh của tôi là {this.props.children} 
                        <button className="btn btn-sm btn-primary ml-3" onClick={this._updateOld.bind(this)}>Change</button>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Person