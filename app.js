const albums = document.querySelectorAll('.album')

albums.forEach((album) =>{
  album.addEventListener('click', () => {
    removeActiveClasses()
   album.classList.add('active')
  })
}
)

function removeActiveClasses() {
    albums.forEach(album => {
      album.classList.remove('active')
    })
}