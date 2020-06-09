import React, { Component } from 'react';
import axios from 'axios';


const Context = React.createContext();

export class Provider extends Component {

    state = {
        toprepos_list: [],
        heading: 'Top 10 Repos'
    };

    componentDidMount() {
        axios.get(`https://api.github.com/search/repositories?q=stars:>1000&per_page=10`)
            .then(res => {
                    this.setState({ toprepos_list: res.data.items })
                    //console.log(this.state.toprepos_list.name)
                    //console.log(res.data.items[i].name)
                //this.setState({toprepos_list: res.data})
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
