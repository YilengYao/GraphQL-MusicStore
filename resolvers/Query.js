module.exports = {
    allTracks: (parent, { sort, sortBy }, { tracks }) => {
        console.log(sort)
        console.log(sortBy)
        console.log(tracks)
   // Sort the tracks if sortBy and sort arguments are provided
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

}
}