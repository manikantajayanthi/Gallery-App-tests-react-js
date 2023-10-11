import './index.css'

const ThumbnailItem = props => {
  const {singleImage, onClickChange, isActive} = props
  const {thumbnailUrl, thumbnailAltText, id} = singleImage
  const changeImage = () => {
    onClickChange(id)
  }

  const isActiveClassName = isActive ? '' : 'opacity-class'

  return (
    <li className="image-list">
      <button className="button" onClick={changeImage} type="button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={`thumbnail-img ${isActiveClassName}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
