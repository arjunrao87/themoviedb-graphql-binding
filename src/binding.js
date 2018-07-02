import schema from "./schema"
const { Binding } = require('graphql-binding')
const binding = new Binding({
    schema,
})
module.exports = binding