var buttonSearch = document.querySelector(".searchBtn")

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
})
