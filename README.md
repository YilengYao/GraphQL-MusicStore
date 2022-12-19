# GraphQL-MusicStore

## Setup
install npm 
install node 

Then run the following command
```
npm install apollo-server-express express graphql-playground-middleware-express nodemon
```

## Start up
Run the following command 
```
npm start
```

go to http://localhost:4000/playground and start making queries

## Sample query

return all tracks
```
query {
  allTracks {
    track_id
    movie_title
    track_title
    tempo_name
    tempo_bpm
    composer {
      composer_id
      composer_name
    }
    instruments {
      instrument_id
      instrument_name
      instrument_group
    }
    in_library
    created
  }
}
```

Filter by tempo name
```
query tempoName{
  allTracks(tempo_name: MEDIUM) {
    track_id
    movie_title
    track_title
    tempo_name
    tempo_bpm
    composer {
      composer_id
      composer_name
    }
    instruments {
      instrument_id
      instrument_group
      instrument_name
    }
    in_library
    created
  }
}
```

Filter by range of tempo bpm
```
query tempoRange {
  allTracks(tempo_range: {min_tempo: 80, max_tempo: 90}) {
    track_id
    movie_title
    track_title
    tempo_name
    tempo_bpm
    composer {
      composer_id
      composer_name
    }
    instruments {
      instrument_id
      instrument_group
      instrument_name
    }
    in_library
    created
  }
}
```

Filter By tempo name and composer 
```
query tempoNameComposer{
  allTracks(tempo_name: MEDIUM, composer_name: "Josh Talbot") {
    track_id
    movie_title
    track_title
    tempo_name
    tempo_bpm
    composer {
      composer_id
      composer_name
    }
    instruments {
      instrument_id
      instrument_group
      instrument_name
    }
    in_library
    created
  }
}
```

Filter By tempo name and filter by bpm 
```
query tempoNameSortByBPM{
  allTracks(tempo_name: MEDIUM, sort: ASCENDING, sortBy:tempo_bpm) {
    track_id
    movie_title
    track_title
    tempo_name
    tempo_bpm
    composer {
      composer_id
      composer_name
    }
    instruments {
      instrument_id
      instrument_group
      instrument_name
    }
    in_library
    created
  }
}
```

Filter after a certain date
```
query latest {
  allTracks(after: "1-2-2022") {
    track_id
    movie_title
    track_title
    tempo_name
    tempo_bpm
    composer {
      composer_id
      composer_name
    }
    instruments {
      instrument_id
      instrument_group
      instrument_name
    }
    in_library
    created
  }
}
```

Filter by availability
```
query inLibrary {
  allTracks(in_library: true) {
    track_id
    movie_title
    track_title
    tempo_name
    tempo_bpm
    composer {
      composer_id
      composer_name
    }
    instruments {
      instrument_id
      instrument_group
      instrument_name
    }
    in_library
    created
  }
}
```

Find tracks by track ids
```
query trackIds {
    tracks(track_ids: [1, 3, 5]) {
      track_id
      movie_title
      track_title
      tempo_name
      tempo_bpm
      composer {
        composer_id
        composer_name
      }
      instruments {
        instrument_id
        instrument_group
        instrument_name
      }
      in_library
      created
  }
}
```

Find tracks by movie_title
```
query movieTitle {
    tracks(movie_titles: ["Starting Out Slow", "Stillness of the mind"]) {
      track_id
      movie_title
      track_title
      tempo_name
      tempo_bpm
      composer {
        composer_id
        composer_name
      }
      instruments {
        instrument_id
        instrument_group
        instrument_name
      }
      in_library
      created
  }
}
```

Find tracks by track_title
```
query trackTitle {
    tracks(track_titles: ["Rhythm of the Night"]) {
      track_id
      movie_title
      track_title
      tempo_name
      tempo_bpm
      composer {
        composer_id
        composer_name
      }
      instruments {
        instrument_id
        instrument_group
        instrument_name
      }
      in_library
      created
  }
}
```