import React, { Component } from 'react';
import { Consumer } from './Context';
import Repo from './Repo';
import Spinner from './Spinner';

export default class TopRepos extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { heading, toprepos_list } = value;
                    console.log(value);
                    if (toprepos_list === undefined || toprepos_list.length === 0) {
                        return <Spinner />
                    } else {
                        return (
                            <React.Fragment>
                                <h1 className="title">{heading}</h1>
                                <div className="cards">
                                    {toprepos_list.map(repo => (
                                        <Repo
                                            key={repo.id}
                                            name={repo.name}
                                            stars={repo.stargazers_count}
                                            commits={repo.updated_at}
                                            link={repo.html_url}
                                            id={repo.id}
                                        />
                                    ))}
                                </div>
                            </React.Fragment>
                        )
                    }
                }
            }
            </Consumer>
        )
    }
}
