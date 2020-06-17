import React, { Component } from 'react';
import { Consumer } from './Context';
import Repo from './Repo';
import Spinner from './Spinner';
import Paginator from './Paginator';


class TopRepos extends Component {

    render() {
        return (
            <Consumer>
                {value => {
                    const { heading, toprepos_list } = value;
                    console.log(value);

                    let currentPage = 1;
                    const resultsPerPage = 10;

                    //Get current result
                    const indexOfLastResult = currentPage * resultsPerPage;
                    const indexOfFirstResult = indexOfLastResult - resultsPerPage;
                    const currentResults = toprepos_list.slice(indexOfFirstResult, indexOfLastResult);

                    // Change page
                    function paginate (pageNumber) {
                        return currentPage = pageNumber;
                    };

                    if (toprepos_list === undefined || toprepos_list.length === 0) {
                        return <Spinner />
                    } else {
                        return (
                            <React.Fragment>
                                <h1 className="title">{heading}</h1>
                                <div className="cards">
                                    {currentResults.map(repo => (
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
                                <Paginator totalResults={toprepos_list.length} resultsPerPage={resultsPerPage} paginate={paginate} />
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
