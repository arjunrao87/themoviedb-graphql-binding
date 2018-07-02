const { makeBindingClass } = require('graphql-binding')
const schema = require('./schema')
const binding = makeBindingClass({schema});
export default binding;