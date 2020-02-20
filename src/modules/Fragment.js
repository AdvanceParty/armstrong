// import React from "react"
// import { graphql } from "gatsby"

// export default props => {}

// class Fragment {
//   constructor(name, parentType, body) {
//     this._components = {}
//     this.name = name
//     this.parentType = parentType
//     this.body = body
//   }

//   set name(str) {
//     this._components.name = str
//   }
//   get name() {
//     return this._components.name
//   }

//   set parentType(str) {
//     this._components.parentType = str
//   }
//   get parentType() {
//     return this._components.parentType
//   }

//   set body(str) {
//     this._components.body = str
//   }
//   get body() {
//     return this._components.body
//   }

//   get query() {
//     return formatter(this._components)
//   }

//   toString() {
//     return this.query
//   }
// }

// export default Fragment

// // format string as graphql fragment
// const formatter = ({ name, parentType, body }) => `
//     ...fragment ${name} on ${parentType} {
//         ${body}
//     }`
