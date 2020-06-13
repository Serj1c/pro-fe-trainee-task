import React, { Component } from 'react';
//import axios from 'axios';

export default class RepoPage extends Component {

    state = {
        repo: {}
    }

  //  componentDidMount() {
        //axios.get(`https://api.github.com/search/repositories/28457823`)
           // .then(res => {
                    //this.setState({ toprepos_list: res.data.items })
             //       console.log(res.data)
                //this.setState({toprepos_list: res.data})
         //   })
           // .catch(err => console.log(err));
  //  }
    render() {
        return(
            <div>
                <h1>I am here</h1>
            </div>
        )
    }
}




