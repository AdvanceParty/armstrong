import React from "react"
import { Link } from "gatsby"

const makeEl = ({ type, content = null, options }) =>
  React.createElement(type, options, content)

export const getTitleElem = ({ content, level = 2, options = {} } = {}) => {
  return content ? makeEl({ type: `h${level}`, content, options }) : ""
}

export const getParaElem = ({ content, options = {} }) => {
  return content ? makeEl({ type: "p", content, options }) : ""
}

export const getLinkElem = ({
  target,
  content = "Click Me!",
  options = {},
}) => {
  return target ? <Link to={target}>{content}</Link> : ""
}

export const getThumbnailElem = ({ src, alt = "", options = {} } = {}) => {
  return src ? makeEl({ type: "img", options: { ...options, src, alt } }) : ""
}
