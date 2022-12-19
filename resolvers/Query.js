module.exports = {
    allTracks: (parent, { movie_title, tempo_name, composer_name, instrument_group, instrument_name, tempo_range, after, in_library, sort, sortBy }, { tracks, composers, track_instruments, instruments }) => {
   // Sort the tracks if sortBy and sort arguments are provided
        if (composer_name) {
            tracks = tracks.filter( track => 
                {
                    return composers.filter(composer => composer.composer_name === composer_name)
                        .map(composer => composer.composer_id)
                        .includes(track.composer_id)
                }
            )
        }
        if (instrument_group) {
            var track_ids = [... new Set(track_instruments.filter(track_instrument => 
                instruments.filter(instrument => instrument.instrument_group === instrument_group)
                    .map(instrument => instrument.instrument_id).includes(track_instrument.instrument_id))
                    .map(track_instrument => track_instrument.track_id)) ]
            tracks = tracks.filter(track => track_ids.includes(track.track_id))
        }
        if (instrument_name) {
            var track_ids = [... new Set(track_instruments.filter(track_instrument => 
                instruments.filter( 
                instrument => instrument.instrument_name === instrument_name)
                .map(instrument => instrument.instrument_id).includes(track_instrument.instrument_id))
                .map(track_instrument => track_instrument.track_id)) ]
            tracks = tracks.filter(track => track_ids.includes(track.track_id))
        }
        if (movie_title) {
            tracks = tracks.filter(track => track.movie_title === movie_title)
        }
        if (tempo_name) {
            tracks = tracks.filter(track => track.tempo_name === tempo_name)
        }
        if (tempo_range) {
            tracks = tracks.filter(track => tempo_range.min_tempo <= track.tempo_bpm && track.tempo_bpm <= tempo_range.max_tempo)
        }
        if (in_library) {
            tracks = tracks.filter(track => track.inventory > 0)
        }
        if (after) {
            tracks = tracks.filter(track => new Date(track.created) > new Date(after))
        }
        if (sortBy && sort) {
            tracks = tracks.sort((a, b) => {    
                if (sort === "ASCENDING") {
                    if (a[sortBy] < b[sortBy]) return -1;
                    if (a[sortBy] > b[sortBy]) return 1;
                    return 0;
                } else {
                    if (a[sortBy] > b[sortBy]) return -1;
                    if (a[sortBy] < b[sortBy]) return 1;
                    return 0;
                }
            });        
        }
        return tracks
    },

    tracks: (parent, { track_ids, movie_titles, track_titles }, { tracks }) => {
        console.log(track_ids)
        console.log(parent)
        if (track_ids) {
            tracks =  tracks.filter(track => track_ids.includes(track.track_id.toString()))
        }
        if (movie_titles) {
            tracks =  tracks.filter(track => movie_titles.includes(track.movie_title.toString()))
        }
        if (track_titles) {
            tracks =  tracks.filter(track => track_titles.includes(track.track_title.toString()))
        }
        return tracks
    }
}