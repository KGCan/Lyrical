

var buttonSearch = document.querySelector(".search-button")


var string01 = "http://api.deezer.com/artist/3469/top?limit=50"
var string02 = "http://cors-anywhere.herokuapp.com/"
var artistID = 23

var temp = ""
//for (let i = 0; i < string01.length -1; i++) {
//   if (i == 6) {
//         temp = temp + (string01[i] + string02)
//     }
//     else {
//         temp = temp + string01[i]
//     }

// }
// console.log(temp)
var url = string02 + string01
fetch(url).then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))

var searchText = document.querySelector(".input-group-field")

buttonSearch.addEventListener("click", function () {
    var results = document.getElementById("results")
    var artistUrl = "https://cors-anywhere.herokuapp.com/http://api.deezer.com/artist/" + searchText.value
    //     fetch (artistUrl).then(res=>res.json())
    // .then(data=>console.log(data))
    // .catch(err=>console.log(err))
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

                //insert the string of cors-anywhere
                // artist.title
                // insert the limit through string manipulation



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
    var trackList = getArtist()

    function showSongs(data) {
        console.log(data)
        for (i = 0; i < data.length; i++) {
            var song = data[i]
            var songs = document.getElementById("songs")
            var listEl = document.createElement("li")

            listEl.textContent = song.title
            listEl.onclick = searchLyrics
            songs.appendChild(listEl)
        }
    }
    var searchLyrics = function (event) {
        //get search res 
        var song = event.target.textContent
        var artist = searchText.value
        var url = "https://api.lyrics.ovh/v1/" + artist + "/" + song

        fetch(url).then(res => res.json())
            .then(function (data) {
                console.log(data)

            }).catch(function (err) {
                console.log(err);

          });
          var lyrics = document.getElementById("lyric-text")
          var pEl = lyrics.appendChild(song.lyrics)
          console.log(song.lyrics)
    }
})