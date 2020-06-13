import React from 'react';
import TopRepos from './TopRepos';
import Search from './Search';

export default function Index() {
    return (
        <React.Fragment>
            <Search />
            <TopRepos />
        </React.Fragment>
    )
}
