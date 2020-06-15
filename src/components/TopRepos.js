import React, { Component } from 'react';
import { Consumer } from './Context';
import Repo from './Repo';
import Spinner from './Spinner';


class TopRepos extends Component {

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
                                            owner={repo.owner.avatar_url}
                                            ownlog={repo.owner.login}
                                            ownlink={repo.owner.html_url}
                                            lang={repo.language}
                                            description={repo.description}
                                            contributors={repo.contributors_url}
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

export default TopRepos;
