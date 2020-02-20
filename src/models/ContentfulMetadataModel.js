class ContenfulMetadataModel {
  constructor({ id, updatedAt, createdAt, sys: { contentType, revision } }) {
    this.id = id
    this.updatedAt = updatedAt
    this.createdAt = createdAt
    this.revision = revision
    this.contentType = contentType
  }
}
export default ContenfulMetadataModel
