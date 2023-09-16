import React from 'react'
import PropTypes from 'prop-types'
import GalleryItem from './GalleryItem'
import { IMAGES } from '../constants/images'

const Gallery = ({ images = IMAGES }) => (
  <div>
    {images && (
      <div className="row">
        {images.map((obj, i) => {
          return (
            <GalleryItem
              id={obj.id}
              thumbnail={obj.thumbnail}
              caption={obj.caption}
              description={obj.description}
              technology={obj.technology}
              link={obj.link}
              github={obj.github}
              position={i}
            />
          )
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
