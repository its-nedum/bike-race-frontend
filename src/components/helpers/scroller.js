import React from 'react'
import InfiniteScroll from 'react-infinite-scroller' 
import Spinner from './spinner'
import Images from './images'

 const Scroller = ({loadMore, hasMore, photos}) => {
    //  console.log(photos)
        return (
            <div>
                <InfiniteScroll
                    pageStart={0}
                    loadMore={loadMore}
                    hasMore={hasMore}
                    initialLoad={true}
                    loader={<Spinner />} >
                    <div>
                        <Images photos={photos} />
                    </div>
                </InfiniteScroll>
            </div>
        )
    }

export default Scroller