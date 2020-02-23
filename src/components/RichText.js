// For info about converting the json formatted richtext
// nodes form contentful into nice HTML, take a look at
// https://www.contentful.com/developers/docs/tutorials/general/rich-text-and-gatsby/

import React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Bold = ({ children }) => <strong>{children}</strong>
const Italic = ({ children }) => <em>{children}</em>
const Text = ({ children }) => <p>{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    [MARKS.ITALIC]: text => <Italic>{text}</Italic>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
}

export default ({ json }) => {
  return documentToReactComponents(json, options)
}
