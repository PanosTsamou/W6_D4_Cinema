const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.listOfFilmTitles = function (){
  const listOfTitles = this.films.map((film) => film.title)
  return listOfTitles 
}

Cinema.prototype.findFilmByTitle = function(title){
  const filmLookingFor =  this.films.find((film) =>{
    return film.title === title
  })
  return filmLookingFor
 
}

Cinema.prototype.filterByGenre = function(genre){
  const filmsByGenre = this.films.filter((film) => film.genre === genre)
  return filmsByGenre
}

Cinema.prototype.totalFilmTimes = function(){
  const filmsTimes = this.films.map((film) => film.length)
  const totalTimes = filmsTimes.reduce((accumulator, currentValue) => currentValue +accumulator)
  return totalTimes
}

Cinema.prototype.findFilmsByYear = function(year){
  const filmByYear = this.films.fil
}


module.exports = Cinema;
