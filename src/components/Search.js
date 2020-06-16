import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from './Context';

class Search extends Component {

    state = {
        repoName: ''
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    findRepos = (dispatch, e) => {
        e.preventDefault();
        axios.get(`https://api.github.com/search/repositories?q=${this.state.repoName}&per_page=20`)
            .then(res => {
                dispatch({
                    type: 'SEARCH_REPOS',
                    payload: res.data.items
                })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div className="search-card">
                            <h1>Search For Repositories</h1>
                            <form>
                                <input type="text"
                                    placeholder="Repo name goes here"
                                    name="repoName"
                                    value={this.state.repoName}
                                    onChange={this.onChange}
                                    onKeyUp={this.findRepos.bind(this, dispatch)}
                                    />
                            </form>
                        </div>
                    )
                }}
            </Consumer>
        )
    }
};

export default Search;

