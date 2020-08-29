import React from 'react'
import PropTypes from 'prop-types'
import GalleryItem from './GalleryItem'
import { IMAGES } from '../constants/images'

const Gallery = ({ images = IMAGES }) => (
  <div>
    {images && (
      <div className="row">
        {images.map((obj, i) => {
          return (<GalleryItem
            caption={obj.caption}
            description={obj.description}
            github={obj.github}
            id={obj.id}
            link={obj.link}
            position={i}
            source={obj.source}
            technology={obj.technology}
            thumbnail={obj.thumbnail}
            // toggleLightbox={toggleLightbox}
          />);
        })}
      </div>
    )}
  </div>
)

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default Gallery
