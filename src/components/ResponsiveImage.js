import React from "react"

const getLastUrlInSrcSet = srcSet => {
  return srcSet.substring(srcSet.lastIndexOf(",") + 1, srcSet.lastIndexOf(" "))
}

const ResponsiveImage = ({ srcSet, alt, src = null }) => {
  srcSet = Array.isArray(srcSet) ? srcSet.join(",") : srcSet
  src = src ? src : getLastUrlInSrcSet(srcSet)
  return <img srcSet={srcSet} src={src} alt={alt} />
}

export default ResponsiveImage
