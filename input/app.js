alert('.js active');


var currentUser = {
    name: '',
    currentPreferences: [], // possibly an array with six values, holds the max and min values of each beer parameter
                            // could also separate into three arrays with two-elements each, one array for each parameter
    previousPreferences: [],    // could just hold all the previous preferences; current prefs are push on after each session

    /*local storage methods*/
    getPreviousPreferences: function() {

    },
    preferencesToLS: function() {

    }
}


/*beer data for constructor loop (database.compileBeers() method)*/
var style =      ['water', '100% EtOH']; // string
var color =      [ 0     ,  0         ]; // number (scale [0-40] *?* not sure...)
var abv =        [ 0     ,  100       ]; // number percentage (do not use '%' char), [0-11] *?* can't remember exact ranges on these
var bitterness = [ 0     ,  5         ]; // on the perceived bitterness scale [1-5] *?*

/*main object literal, holding beer object array, methods to sort, and methods to push to local storage*/
var database = {

    beers: [],      // array for beer objects
    Beer: function(style, color, abv, bitter) {      // beer object constructor
        this.style = style;
        this.color = color;
        this.abv = abv;
        this.bitter = bitter;

        database.beers.push(this);
    } 

}