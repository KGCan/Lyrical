var buttonSearch = document.querySelector(".search-button")
var searchText = document.querySelector(".input-group-field")
var results = document.getElementById("results")

var searchUrl = "https://api.deezer.com/artist/" + searchText.value
var corsUrl = "cors-anywhere.herokuapp.com/"
var data = ""

for (let i = 0; i < searchUrl.length -1; i++) {
     if (i == 7) {
         data = data + (searchUrl[i] + corsUrl)
     }
     else {
        data = data + searchUrl[i]
     }
 }
 console.log(data)

 // var string01 = "http://api.deezer.com/artist/3469/top?limit=50"
// var string02 = "cors-anywhere.herokuapp.com/"
// var artistID = 23

// var temp = ""
// for (let i = 0; i < string01.length -1; i++) {
//     if (i == 6) {
//         temp = temp + (string01[i] + string02)
//     }
//     else {
//         temp = temp + string01[i]
//     }

// }
// console.log(temp)

buttonSearch.addEventListener("click", function () {
    
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

                //insert the string of cors-anywhere
                // artist.title
                // insert the limit through string manipulation



                // var songTitle = "http://cors-anywhere.herokuapp.com/api.deezer.com/artist/3469/top?limit=5" + Array.length[0]
                console.log(artist)
                results.append(artist.tracklist)
                fetch(artist, {
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
            results.append(tracks.data)
        })
})

buttonSearch.addEventListener("click", function(){
    var searchText = document.querySelector(".input-group-field")
    var LyricsGoHere = document.getElementById("results")
    var lyricsUrl = "https://api.lyrics.ovh/v1/sia/"+searchText.value
    console.log(searchText.value)
    fetch(lyricsUrl)
    .then(response => response.json())
    .then(song => {
        console.log(song.lyrics)
        LyricsGoHere.append(song.lyrics)
    })
})

var searchLyrics = function () {
    //get search res 
    var url = "https://api.lyrics.ovh/v1/" + artist + "/" + song
    fetch(url).then(function (data) {
        console.log

    }).catch(function (err) {
        console.log(err);
    });
}

