import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

export default function Repo(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false);
    return (
        <React.Fragment>
        <div className="repo-card">
                <a href="#"><h3 className="repo-card-title" onClick={() => setModalIsOpen(true)} >{props.name}</h3></a>
            <div className="repo-card-content">
                <div className="repo-card-stars">
                    <i className="fa fa-star" aria-hidden="true"></i><span> {props.stars}</span>
                </div>
                <span className="date">Last updated at: {props.commits}</span>
            </div>
            <div className="repo-card-link">
                <i className="fa fa-github" aria-hidden="true"></i>
                <a href={props.link} className="btn" target="_blank" rel="noopener noreferrer">View Page</a>
            </div>
        </div>
        <Modal isOpen={modalIsOpen}>
            <div className="modal-page">
                <h1>{props.name}</h1>
                <i className="fa fa-star" aria-hidden="true"></i><span> {props.stars}</span>
            </div>
        </Modal>
        </React.Fragment>
    )
}
