import React from 'react';
import { connect } from 'react-redux';
import { NotFound } from './NotFound';
import Loading from '../Navigation/LoadingComponent';
import { Row } from 'react-bootstrap';
import { AlbumsComponent } from '../Albums/AlbumsComponent';
import { ArtistsComponent } from '../Artists/ArtistsComponent';
import { SongsComponent } from '../Songs/SongsComponent';

function SearchResults({ search }) {
  console.log(search)
  if (!search) return <Loading />

  return (<>
    <h1 className='offset-1 mt-2'>Search Results:</h1>
    <Row>
      <h3 className='mt-2 col-6' >Albums:</h3>
    </Row>
    {search.albums.items.length > 1 ? <>
      <div className='BannerSection mb-4'>
        <div className="cardDisplay  u-fancy-scrollbar mb-4">
          <AlbumsComponent
            data={search.albums.items} />
        </div>
      </div> </>
      :
      <h3>No results found</h3>
    }

    <Row>
      <h3 className='mt-2 col-6' >Artist:</h3>
    </Row>
    {search.artists.items.length > 1 ? <>
      <div className='BannerSection mb-4'>
        <div className="cardDisplay  u-fancy-scrollbar mb-4">
          <ArtistsComponent
            data={search.artists.items} />
        </div>
      </div> </>
      :
      <h3>No results found</h3>
    }

    <Row>
      <h3 className='mt-2 col-6' >Songs:</h3>
    </Row>
    {search.tracks.items.length > 1 ? <>
      <div className='BannerSection mb-4'>
        <div className="cardDisplay  u-fancy-scrollbar mb-4">
          <SongsComponent
            data={search.tracks.items} />
        </div>
      </div> </>
      :
      <h3>No results found</h3>
    }

  </>
  )
}

const mapStateToProps = ({ apiData }) => {
  return ({
    search: apiData.searchResults
  })
}

export default connect(mapStateToProps)(SearchResults)