// 1. Require 'apollo-server'
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const { GraphQLScalarType } = require('graphql');
const expressPlayground = require('graphql-playground-middleware-express').default;
const { readFileSync } = require('fs');

const typeDefs = readFileSync('./typeDefs.graphql', 'UTF-8')

// 1. A variable that we will increment for unique ids
var _id = 0

var tracks = [
    {
        track_id: '1',
        movie_title: 'Starting Out Slow',
        track_title: 'Stillness of the mind',
        tempo_name: 'fast',
        tempo_bpm: 126,
        composer: {
          composer_id: '1',
          composer_name: 'Abel Korzeniowski',
        },
        instruments: [
          {
            instrument_id: '101',
            instrument_group: 'Brass',
            instrument_name: 'Alpine horn',
          },
        ],
      },
      {
        track_id: '2',
        movie_title: '1-2 Guitar Hero!',
        track_title: 'Rhythm of the Night',
        tempo_name: 'medium',
        tempo_bpm: 85,
        composer: {
          composer_id: '2',
          composer_name: 'Fast Slow Stephanson',
        },
        instruments: [
          {
            instrument_id: '104',
            instrument_group: 'Guitar/stringed',
            instrument_name: 'Electric guitar',
          },
        ],
      },
      {
        track_id: '3',
        movie_title: 'American Reunion',
        track_title: 'The Slow Slowdown',
        tempo_name: 'medium',
        tempo_bpm: 90,
        composer: {
          composer_id: '3',
          composer_name: 'Josh Talbot',
        },
        instruments: [
          {
            instrument_id: '102',
            instrument_group: 'Guitar/stringed',
            instrument_name: 'Acoustic guitar',
          },
          {
            instrument_id: '103',
            instrument_group: 'Guitar/stringed',
            instrument_name: 'Banjo',
          },
        ],
      },
      {
        track_id: '4',
        movie_title: 'Machiavelli Rises',
        track_title: 'The Piano in The Night',
        tempo_name: 'slow',
        tempo_bpm: 82,
        composer: {
          composer_id: '3',
          composer_name: 'Josh Talbot',
        },
        instruments: [
          {
            instrument_id: '105',
            instrument_group: 'Keyboard',
            instrument_name: 'Piano',
          },
        ],
      },
      {
        track_id: '5',
        movie_title: 'Fast and the Furious',
        track_title: 'Furious Abel Drum Solo',
        tempo_name: 'medium',
        tempo_bpm: 120,
        composer: {
          composer_id: '4',
          composer_name: 'Medium Talbot',
        },
        instruments: [
          {
            instrument_id: '104',
            instrument_group: 'Guitar/stringed',
            instrument_name: "Electric guitar"
          },
          {
            instrument_id: '106',
            instrument_group: 'Percussion',
            instrument_name: "Drums"
          }
        ]
    }    
]

const resolvers = {
    Query: {
        tracks: () => tracks
    }
}

var app = express();

let server = null;
async function startServer() {

    // const context = { photos, users, tags }

    // server = new ApolloServer({ typeDefs, resolvers, context});

    server = new ApolloServer({ typeDefs, resolvers });

    await server.start();

    // 3. Call `applyMiddleware()` to allow middleware mounted on the same path
    server.applyMiddleware({ app });
}
startServer();

// 4. Create a home route
app.get('/', (req, res) => res.end('Welcome to the PhotoShare API'))

app.get('/playground', expressPlayground({ endpoint: '/graphql'}))


// 5. Listen to a specific port
app.listen( { port: 4000 }, () => console.log(`GraphQL Server running @ http://localhost:4000${server.graphqlPath}`) 
)