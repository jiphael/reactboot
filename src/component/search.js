import React from 'react';
import ReactDOM from 'react-dom';
class Search extends React.Component {
    render() {
        return (
            <div class="col-6 col-md-4 order-2 order-md-1 site-search-icon text-left">
                <form action="" class="site-block-top-search">
                    <span class="icon icon-search2"></span>
                    <input type="text" class="form-control border-0" placeholder="Search" />
                </form>
            </div>
        )
    }
}

export default Search;