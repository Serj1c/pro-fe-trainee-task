import React from 'react';

export default function Repo(props) {
    return (
        <div className="repo-card">
            <h3 className="repo-card-title">{props.name}</h3>
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
    )
}
