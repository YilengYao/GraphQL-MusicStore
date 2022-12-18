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
  }
}
```