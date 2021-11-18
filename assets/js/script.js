// Variables
var buttonSearch = document.querySelector(".search-button")
var searchText = document.querySelector(".input-group-field")

// Event listener for search button (artist)
buttonSearch.addEventListener("click", function () {
    var results = document.getElementById("results")
    var artistUrl = "https://cors-anywhere.herokuapp.com/http://api.deezer.com/artist/" + searchText.value
// Console Log the value to confirm functionality
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
               var songTitle = "http://cors-anywhere.herokuapp.com/http://api.deezer.com/artist/" + artist.id + "/top?limit=20"
                console.log(artist)
                fetch(songTitle, {
                    mode: 'cors',
                    headers: {
                        'Access-Control-Allow-Origin': '*'
                    }
                }).then(res => res.json())
                    .then(data => {
                         console.log(data)
                        showSongs(data.data)
                    })
                return artist
            })
    }
    // Pull song data from API
    var trackList = getArtist()
    listEl.textContent = song.title
    function showSongs(data) {
        console.log(data)
        for (i = 0; i < data.length; i++) {
            var song = data[i]
            var songs = document.getElementById("songs")
            var listEl = document.createElement("li")
        // Push list of songs to the page
            listEl.textContent = song.title
            listEl.onclick = searchLyrics
            songs.appendChild(listEl)
            var searchLyrics = function (event) {
                var lyricsGoHere = document.getElementById("lyric-text")
                var url = "https://api.lyrics.ovh/v1/" + searchText.value + "/" + song.title

                JSON.stringify(song.title)

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
