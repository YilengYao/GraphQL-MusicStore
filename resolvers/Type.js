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
    }
}