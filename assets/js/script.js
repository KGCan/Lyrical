var buttonSearch = document.querySelector(".search-button")

  
buttonSearch.addEventListener("click", function(){
    var searchText = document.querySelector(".input-group-field")
    var results = document.getElementById("results")
    var artistUrl = "https://cors-anywhere.herokuapp.com/api.deezer.com/artist/"+ searchText.value
    console.log(searchText.value)
    function getArtist() {
        fetch(artistUrl, {
        mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin':'*'
          }
        })
        .then(response => response.json())
        .then(artist => {
            console.log(artist.tracklist)
            results.append(artist.tracklist)
            return artist
    })
    }
    var trackList = getArtist()
    fetch(trackList)
    .then(response => response.json())
    .then(tracks => {
        console.log(tracklist)
        results.append(tracklist)
    })
})

// buttonSearch.addEventListener("click", function(){
//     var searchText = document.querySelector(".input-group-field")
//     var LyricsGoHere = document.getElementById("results")
//     var lyricsUrl = "https://api.lyrics.ovh/v1/sia/"+searchText.value
//     console.log(searchText.value)
//     fetch(lyricsUrl)
//     .then(response => response.json())
//     .then(song => {
//         console.log(song.lyrics)
//         LyricsGoHere.append(song.lyrics)
//     })
// })

var searchLyrics = function (){
  //get search res 
    var url = "https://api.lyrics.ovh/v1/"+ artist + "/" + song
    fetch(url).then(function(data){
        console.log
        
    }).catch(function(err){
        console.log(err);
    });
}
var spotifyUrl = "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10"
