import React from "react"
import { graphql } from "gatsby"
import { inspect } from "../modules/utils"
import Img from "gatsby-image"

export default ({ data }) => {
  console.log(inspect(data))

  const {
    alt,
    caption,
    file: { description, fluid },
  } = data.contentfulAsset

  return (
    <>
      <h1>{title}</h1>
      <figure>
        <Img fluid={fluid} alt="QWHOOOO" />
        <figcaption>{caption}</figcaption>
      </figure>
      <p>
        One for all and all for one, Muskehounds are always ready. One for all
        and all for one, helping everybody. One for all and all for one, it’s a
        pretty story. Sharing everything with fun, that’s the way to be. One for
        all and all for one, Muskehounds are always ready. One for all and all
        for one, helping everybody. One for all and all for one, can sound
        pretty corny. If you’ve got a problem chum, think how it could be.
      </p>
      <p>
        There’s a voice that keeps on calling me. Down the road, that’s where
        I’ll always be. Every stop I make, I make a new friend. Can’t stay for
        long, just turn around and I’m gone again. Maybe tomorrow, I’ll want to
        settle down, Until tomorrow, I’ll just keep moving on.
      </p>
      <p>
        Hong Kong Phooey, number one super guy. Hong Kong Phooey, quicker than
        the human eye. He’s got style, a groovy style, and a car that just won’t
        stop. When the going gets tough, he’s really rough, with a Hong Kong
        Phooey chop (Hi-Ya!). Hong Kong Phooey, number one super guy. Hong Kong
        Phooey, quicker than the human eye. Hong Kong Phooey, he’s fan-riffic!{" "}
      </p>
    </>
  )
}

export const query = graphql`
  query {
    contentfulImage {
      alt
      caption
      file {
        title
        description
        fluid {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
