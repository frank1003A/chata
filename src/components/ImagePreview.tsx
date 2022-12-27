import {MutableRefObject, useRef} from 'react'

interface ImgPreviewType {
    imgElement: MutableRefObject<HTMLImageElement | null>,
}
const ImagePreview = ({imgElement}: ImgPreviewType) => {
  return (
    <div className="imgprev_cont">
    <img ref={imgElement} id="img_preview" />
  </div>
  )
}

export default ImagePreview