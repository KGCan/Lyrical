var buttonSearch = document.querySelector(".search-button")

buttonSearch.addEventListener("click", function(){
    var searchText = document.querySelector(".input-group-field")
    var LyricsGoHere = document.getElementById("results")
    console.log(searchText.value)
    fetch("https://api.lyrics.ovh/v1/sia/"+searchText.value)
    .then(response => response.json())
    .then(song => {
        console.log(song.lyrics)
        LyricsGoHere.append(song.lyrics)
    })
})
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
