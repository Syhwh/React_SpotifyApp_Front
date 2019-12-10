import React from 'react';
import { connect } from 'react-redux';
import { SearchComponent } from '../SearchComponent';
export const SearchSection = () => {
  return (
    <>
      <div className='hero v2 section-padding home'>
        <div className="container pos-abs">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="header-text v2">
                <h1>Enjoy Your Music</h1>
              </div>
            </div>
            <div className='col-md-12 offset-2'>
              <SearchComponent className='searchComponent' />
            </div>
          </div>
        </div>
      </div>

    </>)
}