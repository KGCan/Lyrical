var lastKey = "6711c7f59db994bf3d0a996730f71a66"

var buttonSearch = document.querySelector(".searchBtn")

buttonSearch.addEventListener("click", function(){
    var searchText = document.querySelector(".searchInput")
    var LyricsGoHere = document.getElementById("appendHere")
    console.log(searchText.value)
    fetch("http://www.last.fm/api/auth/?api_key=" + lastKey 
    .then(response => response.json())
    .then(song => {
        console.log(song.lyrics)
        LyricsGoHere.append(song.lyrics)
    })
    )})

/*var buttonSearch = document.querySelector(".searchBtn")

buttonSearch.addEventListener("click", function(){
    var searchText = document.querySelector(".searchInput")
    var LyricsGoHere = document.getElementById("appendHere")
    console.log(searchText.value)
    fetch("https://api.lyrics.ovh/v1/sia/"+searchText.value)
    .then(response => response.json())
    .then(song => {
        console.log(song.lyrics)
        LyricsGoHere.append(song.lyrics)
    })
})*/
