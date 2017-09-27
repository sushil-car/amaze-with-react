import React from 'react';
// import {Form, Input, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/style.less';

export const Todo = (props) => {
    return (
        <div className="header">
            <h6>ReAcT - rEduX</h6>
            <div className="row" style={{marginBottom: '10px'}}>
                <div className="col-md-2">
                    <button className="btn btn-primary" onClick={() => props.addproperty()}>Add Property
                    </button>
                </div>
                <div className="col-md-4">
                    <div className="input-group">
                        <span className="input-group-addon" id="basic-addon1">@</span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="tu color favorito aquí.."
                            aria-describedby="basic-addon1"/>
                    </div>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-primary" onClick={() => props.addUser()}>Paint
                    </button>
                </div>
                <div className="col-md-2">
                    <button className="btn btn-primary" onClick={() => props.clearAll()}>Remove
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div>{props
                            .usernameArr
                            .map((item, index) => {
                                return <div style={{background: item}} key={index} className="alert alert-success" role="alert">
                                    <strong style={{color: 'black'}}>{item}</strong>
                                </div>
                    })}</div>
                </div>
            </div>
        </div>
    );
};
