import React, { Component } from 'react';
import axios from 'axios';


const Context = React.createContext();

const reducer = (state, action) => {
    switch(action.type){
        case 'SEARCH_REPOS':
            return {
                ...state,
                toprepos_list: action.payload,
                heading: 'Search Results'
            };
        default:
            return state;
    }
}

export class Provider extends Component {

    state = {
        toprepos_list: [],
        heading: 'Top 10 Repos',
        dispatch: action => this.setState(state => reducer(state, action))
    };

    componentDidMount() {
        axios.get(`https://api.github.com/search/repositories?q=stars:>1000&per_page=10`)
            .then(res => {
                    this.setState({ toprepos_list: res.data.items })
            })
            .catch(err => console.log(err));
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
};

export const Consumer = Context.Consumer;
