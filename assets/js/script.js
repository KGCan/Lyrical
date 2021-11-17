//Main variables
var buttonSearch = document.querySelector(".search-button")
var string01 = "http://api.deezer.com/artist/3469/top?limit=50"
var string02 = "http://cors-anywhere.herokuapp.com/"
var searchText = document.querySelector(".input-group-field")
var url = string02 + string01

//fetch data for artist search
fetch(url).then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

//event listener for search button
buttonSearch.addEventListener("click", function () {
    var results = document.getElementById("results")
    var artistUrl = "https://cors-anywhere.herokuapp.com/http://api.deezer.com/artist/" + searchText.value
//console log to confirm functionality
    console.log(searchText.value)
//function to pull artist info
    function getArtist() {
        fetch(artistUrl, {
            mode: 'cors',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
            .then(response => response.json())
            .then(artist => {
                var songTitle = "http://cors-anywhere.herokuapp.com/http://api.deezer.com/artist/" + artist.id + "/top?limit=20"
                console.log(artist)
        // results.append(artist.tracklist)
                fetch(songTitle, {
                    mode: 'cors',
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                }).then(res => res.json())
                    .then(data => {
                        var string = "this is a string"
                        // console.log(string[6])
                        console.log(data)
                        showSongs(data.data)
                    })
                return artist
            })
    }
    //show list of songs
    var trackList = getArtist()
    listEl.textContent = song.title
    function showSongs(data) {
        console.log(data)
        for (i = 0; i < data.length; i++) {
            var song = data[i]
            var songs = document.getElementById("songs")
            var listEl = document.createElement("li")
        //functionality to click on song titles
            listEl.textContent = song.title
            listEl.onclick = searchLyrics
            songs.appendChild(listEl)
            var searchLyrics = function (event) {
            //pull lyrics for clicked song title
                var lyricsGoHere = document.getElementById("lyric-text")
                var url = "https://api.lyrics.ovh/v1/" + searchText.value + "/" + song.title
                JSON.stringify(song.title)
            //display lyrics on the screen
                fetch(url).then(res => res.json())
                    .then(song => {
                        console.log(song.lyrics)
                        lyricsGoHere.append(song.lyrics)
                            .then(function (data) {
                                console.log(data)

                            }).catch(function (err) {
                                console.log(err);

                            });
                    })
            }

        }


    }
})