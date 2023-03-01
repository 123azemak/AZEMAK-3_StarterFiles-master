/* SITE.JS: THIS FILE CONTAINS THE METHODS/FUNCTIONS AND VARIABLES CONTROLLING YOUR SITE
//
*/

/* NOTE: MOVIES.JSON CONTAINS A LIST OF MOVIES AND ACCOMPANYING METADATA
//
//    They are in the following format:
//    title (String): the name of the movie
//    iscore (Number): the IMDB score
//    rating (String): the movie's MPAA rating
//    released (Array): the release date. Note that the order of the array is:  YYYY, MM, DD
//    country (String): the country of production
//    posters (Array): an array of String values with the URL to movie posters (in your img/ directory)
//    imdb (String): the URL to the corresponding IMDB website
//    website (String): the URL to the corresponding official website
//    likes (Number): a fictitious number of user likes
//    dislikes (Number): a fictitious number of user dislikes
//    posterindex (Number): a counter to use with the "posters" array to keep track of the current displayed poster index
//
// FOR STEP 16, ADD THREE OF YOUR OWN FAVORITE MOVIES WITH METADATA TO THE END OF THE JSON FILE LIST
*/




const vue_app = Vue.createApp({
      // This automatically imports your movies.json file and puts it into
      //   the variable: movies
      created () {
            fetch('movies.json').then(response => response.json()).then(json => {
                  this.movies = json
            })
      },
      data() {
        return {
            // This holds your movies.json data.
            movies: [],
            title: "IMDB + Alex's Top 8 Movies",
            owner: "Alex",
            github: "https://github.com/123azemak/ZEMAK-3_StarterFiles-master",
           
            /* ADD ADDITIONAL VARIABLES FOR STEP 3 HERE */
      
      }
    },
      methods: {
            /* ADD FUNCTIONS/METHODS FOR STEP 7 HERE */
            getMonthtext(dateArray){
                  // the switch statement will go through every json object, looking at each date in each movie, when it finds a match, it will take that date and convert it into us date format
                  // maybe make the code in the expression a number that goes up everytime it does not find the right movie, and loops back once it tries to go past the fifth movie
                  // to make the number go up, maybe make an if else statement? but why would i make an if else statement when the switch statement is meant to replace the need of an if else statement
                  // 
                  switch (/*idk wat to put here*/) {
            case movies[index].released = "[1994, 10, 14]":
                  movies[index].released = "December 10, 1987";
              break;
            case movies[index].released = "[1972, 3, 24]":
                  movies[index].released = "March 24, 1972";
              break;
            case movies[index].released = "[1974, 12, 20]":
                  movies[index].released = "December 20, 1974";
              break;
            case movies[index].released = "[2008, 7, 18]":
                  movies[index].released = "July 18, 2008";
              break;
            case movies[index].released = "[1993, 11, 30]":
                  movies[index].released = "November 30, 1993";
              break;
                      }
            },
            posterClick(index){
// var x = 
// var y = 
            },
            timeText(minutes){

            }
      },



})



vue_app.mount("#vue_app")
