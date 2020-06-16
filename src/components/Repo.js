import React, { useState } from 'react';
import Modal from 'react-modal';

export default function Repo(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <React.Fragment>
        <div className="repo-card">
            <a><h3 className="repo-card-title" onClick={() => setModalIsOpen(true)} >{props.name}</h3></a>
            <div className="repo-card-content">
                <div className="repo-card-stars">
                    <i className="fa fa-star" aria-hidden="true"></i><span> {props.stars}</span>
                </div>
                <div className="last-commit">
                    <span className="date">Last updated at: {props.commits}</span>
                </div>
            </div>
            <div className="repo-card-link">
                <i className="fa fa-github" aria-hidden="true"></i>
                <a href={props.link} className="btn" target="_blank" rel="noopener noreferrer">View Page</a>
            </div>
        </div>
        <Modal isOpen={modalIsOpen} ariaHideApp={false} onRequestClose={() => setModalIsOpen(false)}>
            <div className="modal-page">
                <nav>
                    <h1>{props.name}</h1>
                    <a className="close-btn" onClick={() => setModalIsOpen(false)}>
                        <i className="fa fa-window-close fa-2x" aria-hidden="true"></i>
                    </a>
                </nav>
                <div className="repo-card-stars">
                    <i className="fa fa-star" aria-hidden="true"></i><span> {props.stars}</span>
                </div>
                <div className="last-commit">
                    <span className="date">Last updated at: {props.commits}</span>
                </div>
                <div className="owner">
                    <div className="owner-avatar">
                        <img src={props.owner} alt=""/>
                    </div>
                    <div className="owner-login">
                        <a href={props.ownlink} target='_blank' rel="noopener noreferrer">
                            <span>Owner: <strong>{props.ownlog}</strong></span>
                        </a>
                    </div>   
                </div>
                <div className="langs">
                    <span>Repo Languages: <strong>{props.lang}</strong></span>
                </div>
                <span>What it is all about:</span>
                <p className="description"><strong>{props.description}</strong></p>
            </div>
        </Modal>
        </React.Fragment>
    )
}
