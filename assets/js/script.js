var buttonSearch = document.querySelector(".search-button")


buttonSearch.addEventListener("click", function () {
    var searchText = document.querySelector(".input-group-field")
    var results = document.getElementById("results")
    var artistUrl = "https://cors-anywhere.herokuapp.com/api.deezer.com/artist/" + searchText.value
    console.log(searchText.value)
    function getArtist() {
        fetch(artistUrl, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(response => response.json())
            .then(artist => {
                var songTitle = "http://cors-anywhere.herokuapp.com/api.deezer.com/artist/3469/top?limit=5" + Array.length[0]
                console.log(artist)
                results.append(artist.tracklist)
                fetch(songTitle, {
                    mode: 'cors',
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                }).then(res => res.json())
                    .then(data => {
                        var string = "this is a string"
                        console.log(string[6])
                        console.log(data)
                         
                    })
                return artist
            })
    }
    var trackList = getArtist()
    fetch(trackList)
        .then(response => response.json())
        .then(tracks => {
            console.log(tracks)
            results.append(tracks.tracklist)
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

var searchLyrics = function () {
    //get search res 
    var url = "https://api.lyrics.ovh/v1/" + artist + "/" + song
    fetch(url).then(function (data) {
        console.log

    }).catch(function (err) {
        console.log(err);
    });
}
var spotifyUrl = "https://api.spotify.com/v1/artists/1vCWHaC5f2uS3yhpwWbIA6/albums?album_type=SINGLE&offset=20&limit=10"
