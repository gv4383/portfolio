import React from 'react'
import PropTypes from 'prop-types'

const GalleryItem = ({
  caption,
  description,
  github,
  id,
  link,
  technology,
  thumbnail,
}) => {

  return (
    <article key={id} className="6u 12u$(xsmall) work-item">
      <a
        className="image fit thumb border"
        href={link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={thumbnail} alt="Thumbnail" />
      </a>
      <h3>
        <a
          className="no-link"
          href={link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {caption}
        </a>
        {' '}
        <a
          className="icon fa-github"
          href={github}
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </h3>
      <p>{technology}</p>
      <p>{description}</p>
    </article>
  )
};

GalleryItem.displayName = 'GalleryItem'
GalleryItem.propTypes = {
  caption: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  technology: PropTypes.string.isRequired,
  thumbnail: PropTypes.string.isRequired,
}

export default GalleryItem
