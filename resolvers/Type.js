const { GraphQLScalarType } = require('graphql')

module.exports = {
    Track: {
        composer: (parent, args, { composers }) => {
            return composers.find(composer => composer.composer_id === parent.composer_id)
        },
        instruments: (parent, args, { instruments, track_instruments }) =>  track_instruments
            .filter(track_instrument => track_instrument.track_id === parent.track_id)
            .map(track_instrument => track_instrument.instrument_id)
            .map(instrumentID => instruments.find(instrument => instrument.instrument_id === instrumentID))
        ,
        in_stock: (parent, args, { tracks }) => {
            return tracks.find(track => parent.track_id === track.track_id).inventory > 0
        }
    },

    DateTime: new GraphQLScalarType({
        name: 'DateTime',
        description: 'A valid date time value.',
        parseValue: value => new Date(value),
        serialize: value => new Date(value).toISOString(),
        parentType: ast => ast.type
    })

}