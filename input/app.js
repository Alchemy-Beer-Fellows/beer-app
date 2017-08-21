alert('.js active');


var user = {
    name: '',

    //currentPreferences: [/*temprorary values*/'colorMin', 'colorMax', 'abvMin', 'abvMax', 'bitterMin', 'bittermax'], // possibly an array with six values, holds the max and min values of each beer parameter
                            // could also separate into three arrays with two-elements each, one array for each parameter
                            // might even be better as an object literal
    currentPreferences: {   // would allow us to call using user.currentPreferences['color'][0-1] (see database.findBeersWithBoth() method)
        color: ['min', 'max'],
        abv: [],
        bitterness: []
    },
                            
    previousPreferences: [],    // could just hold all the previous preferences; current prefs are push on after each session

    /*local storage methods*/
    getPreviousPreferences: function() {

    },
    preferencesToLS: function() {

    }
}


/*beer data for constructor loop (database.compileBeers() method)*/
var styles =       ['water', '100% EtOH', 'beer']; // string
var idNums =       [ 0     ,  1         ,  2    ];
var colors =       [ 0     ,  0         ,  18   ]; // number (scale [0-40] *?* not sure...)
var abvs =         [ 0     ,  100       ,  7    ]; // number percentage (do not use '%' char), [0-11] *?* can't remember exact ranges on these
var bitternesses = [ 0     ,  5         ,  2    ]; // on the perceived bitterness scale [1-5] *?*
var examples = [ ['aquafina', 'dasani', 'ice mountain'],  // water
                 ['biofuel', 'ethanol', 'everclear'],  // 100% EtOH
                 ['guinness', 'hefe', 'screaming banshee'] ] // beer

/*main object literal, holding beer object array, methods to sort, and methods to push to local storage*/
var database = {

    beers: [],      // array for beer objects
    Beer: function(style, idNum, color, abv, bitter, examples) {      // beer object constructor
        this.style = style; // string name eg 'IPL'
        this.idNum = idNum;
        this.color = color; // 2 element array with [min, max] values
        this.abv = abv;     // 2 element array with [min, max] values
        this.bitterness = bitter;   // 2 element array with [min, max] values
        this.example = examples;

        this.isInRange = function(parameter, min, max) { // parameter(string), min & max(numbers)
                                                         // is there a way to make this outside of the constuctor? 
            
            if(min <= this[parameter] && this[parameter] <= max) { // if the beer's value for the given property is 
                return true;                                     // between the desired min and max values,
            }                                                    // return true, otherwise return false.
            return false;
        };

        database.beers.push(this);
    },

    compileBeers: function() {                  // use Beer constructor to put beers and their properties into beer array
        for(var i = 0; i < styles.length; i++) { // repeat for all styles
            this.beers[i] = new this.Beer(styles[i], idNums[i], colors[i], abvs[i], bitternesses[i], examples[i]);
        }
    },

    findBeersWithin: function(parameter, min, max) {     // finds all beers within the given parameters and returns their (styles or ids?) in an array
        var goodBeers = [];                                     // I'm thinking the array should hold idNum or style for better processing
        for(var i = 0; i < styles.length; i++) {                // When the final beers are 
            if(this.beers[i].isInRange(parameter, min, max)) {
                goodBeers.push(this.beers[i].idNum);
            }
        }
        return goodBeers;
    },

    findBeersWithinBoth: function(parameterA, parameterB) {   // finds all beers that share two parameters and returns an array holding each beer object (or id num?)
        var goodBeersA,
            goodBeersB,
            goodBeersAB = [],
        
        goodBeersA = this.findBeersWithin(parameterA, user.currentPreferences[parameterA][0], user.currentPreferences[parameterA][1]);
        goodBeersB = this.findBeersWithin(parameterB, user.currentPreferences[parameterB][0], user.currentPreferences[parameterB][1]);

        for(var i = 0; i < goodBeersA.length; i++) {
            for(var j = 0; j < goodBeersB.length; j++) {
                if(goodBeersA[i] === goodBeersB[j]) {
                    goodBeersAB.push(goodBeersA[i]);
                }
            }
        }
        return goodBeersAB;
    }
}










function test() {               // tests all current defined methods for database object
    user.name = 'Ned Stark',
    user.currentPreferences.abv = [0,7];
    user.currentPreferences.bitterness = [3,5];
    user.currentPreferences.color = [0, 17];

    database.compileBeers();
    console.log(database.beers);
    console.log('color + bitterness: ' + database.findBeersWithinBoth('color', 'bitterness')); // should return 1
    console.log('color + abv: ' + database.findBeersWithinBoth('color', 'abv'));               // should return 0
    console.log('abv + bitterness: ' + database.findBeersWithinBoth('abv', 'bitterness'));     // should return empty array
}

test();