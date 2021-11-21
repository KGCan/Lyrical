var buttonSearch = document.querySelector(".search-button")
var clearLyrics = document.querySelector("#clear-lyrics")
var clearArtist = document.querySelector("#clear-artist")


var searchText = document.querySelector(".input-group-field")


// runs deezer api on search button click
buttonSearch.addEventListener("click", function () {
    var results = document.getElementById("results")
    var artistName = searchText.value
    //uses regex to replace space in artist search text with dash
    artistName = artistName.replace(/\s+/g, '-')
    var artistUrl = "https://cors-anywhere.herokuapp.com/http://api.deezer.com/artist/" + artistName
    fetch(artistUrl).then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
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


                // creates url with arttist id from deezer api
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
    getArtist()
    // creates dynamic list with track titles as each li
    function showSongs(data) {
        console.log(data)
        for (i = 0; i < data.length; i++) {
            var song = data[i]
            var songs = document.getElementById("songs")
            var listEl = document.createElement("li")

            listEl.textContent = song.title

            songs.appendChild(listEl)
        }
    }
    //uses artist name from deezer api and text from each list item to create url for lyrics.ovh
    var searchLyrics = function (event) {
        var lyricsGoHere = document.getElementById("lyric-text")
        var artistName = searchText.value
        //uses regex to replace space in artist search text with dash
        artistName = artistName.replace(/\s+/g, '-')
        console.log(artistName)
        var url = "https://api.lyrics.ovh/v1/" + artistName + "/" + event.target.innerText

        JSON.stringify(event.target.innerText)

        fetch(url).then(res => res.json())
            .then(song => {
                console.log(song.lyrics)
                lyricsGoHere.append(song.lyrics)

            }).catch(function (err) {
                console.log(err);
            });
    }

// click on new song button clears lyrics and allows a new song selection
    clearLyrics.addEventListener("click", function clearContent() {
        document.getElementById("lyric-text").innerText = "";
        console.log("clicked")

    })
// adds event listener to all li in the sonfs ul 
    document.querySelector("#songs").addEventListener("click", searchLyrics)
//click on different artist button reloads to page and clears all data
    clearArtist.addEventListener("click", function clearContent() {
        window.location.reload()
    })

})