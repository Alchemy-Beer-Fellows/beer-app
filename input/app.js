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


// /*beer data for constructor loop (database.compileBeers() method)*/
// var styles =       ['water', '100% EtOH', 'beer']; // string
// var idNums =       [ 0     ,  1         ,  2    ];
// var colors =       [ 0     ,  0         ,  18   ]; // number (scale [0-40] *?* not sure...)
// var abvs =         [ 0     ,  100       ,  7    ]; // number percentage (do not use '%' char), [0-11] *?* can't remember exact ranges on these
// var bitternesses = [ 0     ,  5         ,  2    ]; // on the perceived bitterness scale [1-5] *?*
// var examples = [ ['aquafina', 'dasani', 'ice mountain'],  // water
//                  ['biofuel', 'ethanol', 'everclear'],  // 100% EtOH
//                  ['guinness', 'hefe', 'screaming banshee'] ] // beer



//                      name              color  abv  bitt  ID
var beers = [];      // array for beer objects
function Beer (style, color, abv, bitter, idNum) {      // beer object constructor
    this.style = style; // string name eg 'IPL'
    this.idNum = idNum;
    this.color = color; // 2 element array with [min, max] values
    this.abv = abv;     // 2 element array with [min, max] values
    this.bitterness = bitter;   // 2 element array with [min, max] values
    // this.example = examples;

    beers.push(this);
}

Beer.prototype.isInRange = function(parameter, min, max) { // parameter(string), min & max(numbers)
                                                    // is there a way to make this outside of the constuctor? 
    if(min <= this[parameter] && this[parameter] <= max) { // if the beer's value for the given property is 
        return true;                                     // between the desired min and max values,
    }                                                    // return true, otherwise return false.
    return false;
};

function compileBeers() {                  // use Beer constructor to put beers and their properties into beer array
    // for(var i = 0; i < styles.length; i++) { // repeat for all styles
    //     beers[i] = new this.Beer(styles[i], idNums[i], colors[i], abvs[i], bitternesses[i], examples[i]);
    // }
    
var beer = new Beer( 'Lite American Lager', '1', '2', '1', '01');
var beer = new Beer( 'American Lager', ' 1', '3', '1', '02');
var beer = new Beer( 'Cream Ale', '1', '3', '1', '03');
var beer = new Beer( 'American Wheat Beer', '2', '3', '2', '04');
var beer = new Beer( 'International Pale Lager', '1', '3' , '2', '05');
var beer = new Beer( 'International Amber Lager', '3', '3', '1', '06');
var beer = new Beer( 'International Dark Lager', '4', '1', '3', '07');
var beer = new Beer( 'Czech Pale Lager', '2', '2', '2', '08');
var beer = new Beer( 'Czech Premium Pale Lager', '2', '2', '3', '09');
var beer = new Beer( 'Czech Amber Lager', '3', '3', '2', '10');
var beer = new Beer( 'Czech Dark Lager', '5', '3', '2', '11');
var beer = new Beer( 'Munich Helles', '1', '3', '2', '12');
var beer = new Beer( 'Festbier', '2', '4', '2', '13');
var beer = new Beer( 'Hells Bock', '2', '4', '2', '14');
var beer = new Beer( 'German Leichtbier', '1', '2', '2', '15');
var beer = new Beer( 'Kolsch', '1', '3', '2', '16');
var beer = new Beer( 'German Exportbier', '2', '3', '2', '17');
var beer = new Beer( 'Gerna Pils', '1', '3', '2', '18');
var beer = new Beer( 'Marzen', '3', '4', '2', '19');
var beer = new Beer( 'Rauchbier', '3', '2', '3', '20');
var beer = new Beer( 'DunkelsBock', '4', '4', '2', '21');
var beer = new Beer( ' Vienna Lager', '3', '3', '2', '22');
var beer = new Beer( 'Altbier', '3', '3', '2', '23');
var beer = new Beer( 'Munich Dunkel', '4', '3', '2', '24');
var beer = new Beer( 'Schwarzbier', '5', '3', '2', '25');
var beer = new Beer( 'Doppelbock', '3', '2', '5', '26');
var beer = new Beer( 'Baltic Porter', '5', '5', '2', '27');
var beer = new Beer( 'Weizen/Weissbier', '1', '3', '1', '28');
var beer = new Beer( 'Dunkels Weissbier', '4', '3', '1', '29');
var beer = new Beer( 'Weizenbock', '3', '4', '2', '30');
var beer = new Beer( 'Ordinary Bitter', '2', '2', '2', '31');
var beer = new Beer( 'Best Bitter', '3', '5', '2', '32');
var beer = new Beer( 'Strong Bitter', '3', '3', '3', '33');
var beer = new Beer( 'English Golden Ale', '1', '3', '2', '34');
var beer = new Beer( 'Australian Sparkling Ale', '2', '3', '2', '35');
var beer = new Beer( 'English IPA', '2', '4', '3', '36');
var beer = new Beer( 'Dark Mild', '4', '2', '1', '37');
var beer = new Beer( 'English Brown Ale', '3', '5', '2', '38');
var beer = new Beer( 'English Brown Porter', '5', '3', '2', '39');
var beer = new Beer( 'Scottish Light', '4', '2', '1', '40');
var beer = new Beer( 'Scottish Heavy', '4', '2', '1', '41');
var beer = new Beer( 'Scottish Export', '4', '3', '2', '42');
var beer = new Beer( 'Irish Red Ale', '3', '3', '2', '43');
var beer = new Beer( 'Irish Stout', '5', '3', '2', '44');
var beer = new Beer( 'Irish Extra Stout', '5', '4', '3', '45');
var beer = new Beer( 'Sweet Stout', '5', '3', '2', '46');
var beer = new Beer( 'Oatmeal Stout', '5', '3', '2', '47');
var beer = new Beer( 'Tropical Stout', '5', '5', '3', '48');
var beer = new Beer( 'Foreign Extra Stout', '5', '4', '4', '49');
var beer = new Beer( 'English Strong Ale', '3', '4', '3', '50');
var beer = new Beer( 'Old Ale', '3', '4', '3', '51');
var beer = new Beer( 'Wee Heavy', '4', '5', '2', '52');
var beer = new Beer( 'English Barleywine', '3', '5', '3', '53');
var beer = new Beer( 'Blond Ale', '1', '3', '2', '54');
var beer = new Beer( 'American Pale Ale', '2', '3', '3', '55');
var beer = new Beer( 'American Amber Ale', '3', '3', '2', '56');
var beer = new Beer( 'California Common', '3', '3', '2', '57');
var beer = new Beer( 'American Brown Ale', '5', '3', '2', '58');
var beer = new Beer( 'American Porter', '5', '3', '2', '59');
var beer = new Beer( 'American Stout', '5', '4', '4', '60');
var beer = new Beer( 'Imperial Stout', '5', '5', '4', '61');
var beer = new Beer( 'American IPA', '3',' 4', '3', '62');
var beer = new Beer( 'Double IPA', '3', '5', '5', '63');
var beer = new Beer( 'American Strong Ale', '3', '5', '4', '64');
var beer = new Beer( 'American Barleywine', '3', '5', '4', '65');
var beer = new Beer( 'Weatwine','3', '5', '3', '66');
var beer = new Beer( 'Berliner Weisse', '1', '2', '1', '67');
var beer = new Beer( 'Flanders Red Ale', '3', '3', '1', '68');
var beer = new Beer( 'Oud Bruin', '4', '4', '2', '69');
var beer = new Beer( 'Lambic', '2', '3', '1', '70');
var beer = new Beer( 'Gueuze', '2', '4', '1', '71');
var beer = new Beer( 'Fruit Lambic', '2', '4', '1', '72');
var beer = new Beer( 'Witbier', '1', '3', '1', '73');
var beer = new Beer( 'Belgian Pale Ale', '2', '3', '2', '74');
var beer = new Beer( 'Biere de Garde', '3', '4', '2', '75');
var beer = new Beer( 'Belgian Blond Ale', '2', '4', '2', '76');
var beer = new Beer( 'Saisan (Standard)', '3', '4' ,'2', '77');
var beer = new Beer( 'Belgian Golden Strong Ale', '2', '5', '2', '78');
var beer = new Beer( 'Belgian Single', '1', '3', '2', '79');
var beer = new Beer( 'Belgian Dubbel', '1', '4', '2', '80');
var beer = new Beer( 'Belgian Tripel', '2', '5', '2', '81');
var beer = new Beer( 'Belgian Dark Strong Ale', '4', '5', '2', '82');
}







/*main object literal, holding beer object array, methods to sort, and methods to push to local storage*/
var database = {

    findBeersWithin: function(parameter, min, max) {     // finds all beers within the given parameters and returns their (styles or ids?) in an array
        var goodBeers = [];                                     // I'm thinking the array should hold idNum or style for better processing
        for(var i = 0; i < beers.length; i++) {                // When the final beers are 
            if(beers[i].isInRange(parameter, min, max)) {
                goodBeers.push(beers[i].idNum);
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

    compileBeers();
    console.log(database.beers);
    console.log('color + bitterness: ' + database.findBeersWithinBoth('color', 'bitterness')); // should return 1
    console.log('color + abv: ' + database.findBeersWithinBoth('color', 'abv'));               // should return 0
    console.log('abv + bitterness: ' + database.findBeersWithinBoth('abv', 'bitterness'));     // should return empty array
}

test();