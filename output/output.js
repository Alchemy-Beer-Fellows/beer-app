var user = {
    name: '',


    currentPreferences: { // would allow us to call using user.currentPreferences['color'][0-1] (see database.findBeersWithBoth() method)
        name: '',
        color: ['minC', 'maxC'],
        abv: ['minA', 'maxA'],
        bitterness: ['minB', 'maxB']
    },

    allNames: [],
    thisUserPrevPrefs: [],
    previousPreferences: [], // could just hold all the previous preferences; current prefs are push on after each session

    /*local storage methods*/
    // submit: document.getElementById(),

    // prefHandler: function() {
    //     user.currentPreferences
    //     preferencesToLS('beer', this.currentPreferences);
    // },

    getPreviousNames: function() {
        if(localStorage.getItem('name')) {
            this.allNames = JSON.parse(localStorage.getItem('name'));
            this.name = this.allNames.slice(-1)[0];
            this.currentPreferences.name = this.name;
        }
    },

    getPreviousPreferences: function() {
        if(localStorage.getItem('preferences')) {
            this.previousPreferences = ( JSON.parse(localStorage.getItem('preferences')));
            return JSON.parse(localStorage.getItem('preferences'));
        } else {
            this.previousPreferences = [];
            return [];
        }
        
    },

    getCurrentPreference: function() {
        this.getPreviousPreferences();
        this.currentPreferences = this.previousPreferences.slice(-1)[0];
    },

    switchUserInstance: function(index) {
        user.currentPreferences = user.thisUserPrevPrefs[index];
    },

    preferenceRange: function(property) {
        var innerText = this.currentPreferences[property][0] + ' - ' + this.currentPreferences[property][1];
        var validRange = this.currentPreferences[property][0] <= this.currentPreferences[property][1];;
        if(!validRange) {
            innerText = innerText + ' (invalid range)';
        }
        return innerText;
    },

    showPreferences: function() {
        var elColor = document.getElementById('color');
        elColor.innerText = this.preferenceRange('color');
        var elAbv = document.getElementById('abv');
        elAbv.innerText = this.preferenceRange('abv');
        var elBitter = document.getElementById('bitter');
        elBitter.innerText = this.preferenceRange('bitterness');

    },

    findUsersPreviousPreferences: function() { // fills thisUsersPrevPrefs starting from most recent
        if(user.name) {
            for(var i = this.previousPreferences.length - 2; i >= 0; i--){
                if(this.previousPreferences[i]['name'] === user.name){
                    this.thisUserPrevPrefs.push(this.previousPreferences[i]);
                }
            }
        }
        for(var i = 0; i < this.thisUserPrevPrefs.length - 1; i++) {
            for(var j = (i + 1); j < this.thisUserPrevPrefs.length; j++) {
                if(this.thisUserPrevPrefs[i].color[0] === this.thisUserPrevPrefs[j].color[0] &&
                   this.thisUserPrevPrefs[i].color[1] === this.thisUserPrevPrefs[j].color[1] &&
                   this.thisUserPrevPrefs[i].abv[0] === this.thisUserPrevPrefs[j].abv[0] &&
                   this.thisUserPrevPrefs[i].abv[1] === this.thisUserPrevPrefs[j].abv[1] &&
                   this.thisUserPrevPrefs[i].bitterness[0] === this.thisUserPrevPrefs[j].bitterness[0] &&
                   this.thisUserPrevPrefs[i].bitterness[1] === this.thisUserPrevPrefs[j].bitterness[1])  {
                    this.thisUserPrevPrefs.splice(j, 1);
                }
            }
        }
    },
};
// user.submit.addEventListener('click', prefHandler, true);

var beers = []; // array for beer objects
function Beer(style, color, abv, bitter, idNum) { // beer object constructor
    this.style = style; // string name eg 'IPL'
    this.idNum = idNum;
    this.color = color; // 2 element array with [min, max] values
    this.abv = abv; // 2 element array with [min, max] values
    this.bitterness = bitter;// 2 element array with [min, max] values
    // this.image = image;
    // this.example = examples;

    beers.push(this);
}

Beer.prototype.isInRange = function(parameter, min, max) { // parameter(string), min & max(numbers)
    // is there a way to make this outside of the constuctor? 
    if (min <= this[parameter] && this[parameter] <= max) { // if the beer's value for the given property is 
        return true; // between the desired min and max values,
    } // return true, otherwise return false.
    return false;
};

function compileBeers() { // use Beer constructor to put beers and their properties into beer array
    // for(var i = 0; i < styles.length; i++) { // repeat for all styles
    //     beers[i] = new this.Beer(styles[i], idNums[i], colors[i], abvs[i], bitternesses[i], examples[i]);
    // }

    //                      name              color  abv  bitt  ID
    new Beer('Belgian Dark Strong Ale', '4', '5', '2', '0');
    new Beer('Lite American Lager', '1', '2', '1', '1');
    new Beer('American Lager', ' 1', '3', '1', '2');
    new Beer('Cream Ale', '1', '3', '1', '3');
    new Beer('American Wheat Beer', '2', '3', '2', '4');
    new Beer('International Pale Lager', '1', '3', '2', '5');
    new Beer('International Amber Lager', '3', '3', '1', '6');
    new Beer('International Dark Lager', '4', '1', '3', '7');
    new Beer('Czech Pale Lager', '2', '2', '2', '8');
    new Beer('Czech Premium Pale Lager', '2', '2', '3', '9');
    new Beer('Czech Amber Lager', '3', '3', '2', '10');
    new Beer('Czech Dark Lager', '5', '3', '2', '11');
    new Beer('Munich Helles', '1', '3', '2', '12');
    new Beer('Festbier', '2', '4', '2', '13');
    new Beer('Hells Bock', '2', '4', '2', '14');
    new Beer('German Leichtbier', '1', '2', '2', '15');
    new Beer('Kolsch', '1', '3', '2', '16');
    new Beer('German Exportbier', '2', '3', '2', '17');
    new Beer('Gerna Pils', '1', '3', '2', '18');
    new Beer('Marzen', '3', '4', '2', '19');
    new Beer('Rauchbier', '3', '2', '3', '20');
    new Beer('DunkelsBock', '4', '4', '2', '21');
    new Beer(' Vienna Lager', '3', '3', '2', '22');
    new Beer('Altbier', '3', '3', '2', '23');
    new Beer('Munich Dunkel', '4', '3', '2', '24');
    new Beer('Schwarzbier', '5', '3', '2', '25');
    new Beer('Doppelbock', '3', '2', '5', '26');
    new Beer('Baltic Porter', '5', '5', '2', '27');
    new Beer('Weizen/Weissbier', '1', '3', '1', '28');
    new Beer('Dunkels Weissbier', '4', '3', '1', '29');
    new Beer('Weizenbock', '3', '4', '2', '30');
    new Beer('Ordinary Bitter', '2', '2', '2', '31');
    new Beer('Best Bitter', '3', '5', '2', '32');
    new Beer('Strong Bitter', '3', '3', '3', '33');
    new Beer('English Golden Ale', '1', '3', '2', '34');
    new Beer('Australian Sparkling Ale', '2', '3', '2', '35');
    new Beer('English IPA', '2', '4', '3', '36');
    new Beer('Dark Mild', '4', '2', '1', '37');
    new Beer('English Brown Ale', '3', '5', '2', '38');
    new Beer('English Brown Porter', '5', '3', '2', '39');
    new Beer('Scottish Light', '4', '2', '1', '40');
    new Beer('Scottish Heavy', '4', '2', '1', '41');
    new Beer('Scottish Export', '4', '3', '2', '42');
    new Beer('Irish Red Ale', '3', '3', '2', '43');
    new Beer('Irish Stout', '5', '3', '2', '44');
    new Beer('Irish Extra Stout', '5', '4', '3', '45');
    new Beer('Sweet Stout', '5', '3', '2', '46');
    new Beer('Oatmeal Stout', '5', '3', '2', '47');
    new Beer('Tropical Stout', '5', '5', '3', '48');
    new Beer('Foreign Extra Stout', '5', '4', '4', '49');
    new Beer('English Strong Ale', '3', '4', '3', '50');
    new Beer('Old Ale', '3', '4', '3', '51');
    new Beer('Wee Heavy', '4', '5', '2', '52');
    new Beer('English Barleywine', '3', '5', '3', '53');
    new Beer('Blond Ale', '1', '3', '2', '54');
    new Beer('American Pale Ale', '2', '3', '3', '55');
    new Beer('American Amber Ale', '3', '3', '2', '56');
    new Beer('California Common', '3', '3', '2', '57');
    new Beer('American Brown Ale', '5', '3', '2', '58');
    new Beer('American Porter', '5', '3', '2', '59');
    new Beer('American Stout', '5', '4', '4', '60');
    new Beer('Imperial Stout', '5', '5', '4', '61');
    new Beer('American IPA', '3', ' 4', '3', '62');
    new Beer('Double IPA', '3', '5', '5', '63');
    new Beer('American Strong Ale', '3', '5', '4', '64');
    new Beer('American Barleywine', '3', '5', '4', '65');
    new Beer('Weatwine', '3', '5', '3', '66');
    new Beer('Berliner Weisse', '1', '2', '1', '67');
    new Beer('Flanders Red Ale', '3', '3', '1', '68');
    new Beer('Oud Bruin', '4', '4', '2', '69');
    new Beer('Lambic', '2', '3', '1', '70');
    new Beer('Gueuze', '2', '4', '1', '71');
    new Beer('Fruit Lambic', '2', '4', '1', '72');
    new Beer('Witbier', '1', '3', '1', '73');
    new Beer('Belgian Pale Ale', '2', '3', '2', '74');
    new Beer('Biere de Garde', '3', '4', '2', '75');
    new Beer('Belgian Blond Ale', '2', '4', '2', '76');
    new Beer('Saisan (Standard)', '3', '4', '2', '77');
    new Beer('Belgian Golden Strong Ale', '2', '5', '2', '78');
    new Beer('Belgian Single', '1', '3', '2', '79');
    new Beer('Belgian Dubbel', '1', '4', '2', '80');
    new Beer('Belgian Tripel', '2', '5', '2', '81');
}


/*main object literal, holding beer object array, methods to sort, and methods to push to local storage*/
var database = {
    color_abv: [],
    color_bitterness: [],
    abv_bitterness: [],
    goodAll: [],

   elNewBeers: document.getElementById('button'),



    findBeersWithin: function(parameter, min, max) { // finds all beers within the given parameters and returns their (styles or ids?) in an array
        var goodBeers = []; // I'm thinking the array should hold idNum or style for better processing
        for (var i = 0; i < beers.length; i++) { // When the final beers are 
            if (beers[i].isInRange(parameter, min, max)) {
                goodBeers.push(beers[i].idNum);
            }
        }
        return goodBeers;
    },

    findBeersWithinBoth: function(parameterA, parameterB) { // finds all beers that share two parameters and returns an array holding each beer object (or id num?)
        var goodBeersA,
            goodBeersB,
            goodBeersAB = [],

        goodBeersA = this.findBeersWithin(parameterA, user.currentPreferences[parameterA][0], user.currentPreferences[parameterA][1]);
        goodBeersB = this.findBeersWithin(parameterB, user.currentPreferences[parameterB][0], user.currentPreferences[parameterB][1]);

        for (var i = 0; i < goodBeersA.length; i++) {
            for (var j = 0; j < goodBeersB.length; j++) {
                if (goodBeersA[i] === goodBeersB[j]) {
                    goodBeersAB.push(goodBeersA[i]);
                }
            }
        }

        var firstParam,
            secondParam;
        if (parameterA === 'color' || parameterB === 'color') {
            firstParam = 'color';
            if (parameterA === 'abv' || parameterB === 'abv') {
                secondParam = 'abv';
            } else {
                secondParam = 'bitterness';
            }
        } else {
            firstParam = 'abv';
            secondParam = 'bitterness';
        }
        database[firstParam + '_' + secondParam] = goodBeersAB;

        return goodBeersAB;
    },

    findBeersWithAll: function() {
        var bestBeers = [];
        for (var i = 0; i < this.color_abv.length; i++) {
            for (var j = 0; j < this.color_bitterness.length; j++) {
                if (this.color_abv[i] === this.color_bitterness[j]) {
                    bestBeers.push(this.color_abv[i]);
                }
            }
        }
        for (var i = 0; i < bestBeers.length; i++) {
            if (!this.abv_bitterness.includes(bestBeers[i])) {
                bestBeers.splice(i, 1);
            }
        }
        this.goodAll = bestBeers;
        return this.goodAll;
    },

    compilePreferredBeers: function() {
        this.findBeersWithinBoth('color', 'abv');
        this.findBeersWithinBoth('color', 'bitterness');
        this.findBeersWithinBoth('abv', 'bitterness');
        this.findBeersWithAll();
    },

    fillInChoice: function (i, beer){
        var elChoice = document.getElementById('choice' + i);
        elChoice.innerHTML = '';
        elChoice.setAttribute( 'id', 'choice' + i )
        var elH5 = document.createElement('h5');
        elH5.innerText = beer.style;
        elChoice.appendChild(elH5);

        var elUl = document.createElement('ul');
        
        var elLi = document.createElement('li');
        elLi.innerText = 'Color: ' + beer.color;
        elUl.appendChild(elLi);

        var elLi = document.createElement('li');
        elLi.innerText = 'ABV: ' + beer.abv;
        elUl.appendChild(elLi);

        var elLi = document.createElement('li');
        elLi.innerText = 'Bitterness: ' + beer.bitterness;
        elUl.appendChild(elLi);

        elChoice.appendChild(elUl);

        // var elImage = document.createElement('img');
        // elImage.setAttribute( 'src', beer.image);
        // elChoice.appendChild(elImage);
    },

    getChoices: function (){
        var threeBeers = [];
        var displayNum = 3;
        if(this.goodAll.length < 3) {
            displayNum = this.goodAll.length;
        }
        for (var i = 0; i < displayNum; i ++){
            var randomPick = Math.floor(Math.random() * (this.goodAll.length));
            var randomIndex = this.goodAll[randomPick];
            console.log(randomIndex);
            if(!(threeBeers.includes(beers[randomIndex]))) {
                threeBeers[i] = beers[randomIndex];
                i--;
            }
        }
        return threeBeers;
    },

    displayChoices: function (){
        if(event){
            event.preventDefault();
        }

        if(this.goodAll.length > 0) {
            var threeBeers = this.getChoices();
            console.log(threeBeers);
            for (var i = 0; i < threeBeers.length; i++){
                this.fillInChoice(3 - ((i + 1) % 3), threeBeers[i]);
            }
        }
        else {
            var elMainBeer = document.getElementById('mainBeer');
            elMainBeer.innerHTML = '';
            var elH2 = document.createElement('h2');
            elH2.innerText = 'You\'re too picky!';
            elMainBeer.appendChild(elH2);

            var elButton = document.getElementById('button');
            elButton.setAttribute('class', 'hidden');
        }
    },

    twoPropExcludeAll: function(twoProp) {
        var twoPropExclusive = [];
        for(var i = 0; i < twoProp.length; i++) {
            if(!this.goodAll.includes(twoProp[i])) {
                twoPropExclusive.push(twoProp[i]);
            }
        }
        return twoPropExclusive;
    },

    renderAlternative: function(id, properties) {
        var elDiv = document.getElementById(id);
        var twoPropExclusive = this.twoPropExcludeAll(database[properties]);
        for(var i = 0; i < twoPropExclusive.length; i++) {
            var elBeer = document.createElement('div');
                elBeer.setAttribute('class', 'alt-beer');
                var index = parseInt(twoPropExclusive[i])

                var elH5 = document.createElement('h5');
                elH5.innerText = beers[index].style;
                elBeer.appendChild(elH5);

                var elPopUp = document.createElement('div');
                elPopUp.setAttribute('class', 'hidden');
                    var elColor = document.createElement('p');
                    elColor.innerText = 'Color: ' + beers[index].color;
                    elPopUp.appendChild(elColor);

                    var elAbv = document.createElement('p');
                    elAbv.innerText = 'ABV: ' + beers[index].abv;
                    elPopUp.appendChild(elAbv);

                    var elBitter = document.createElement('p');
                    elBitter.innerText = 'Bitterness: ' + beers[index].bitterness;
                    elPopUp.appendChild(elBitter);
                elBeer.appendChild(elPopUp);
            elDiv.appendChild(elBeer);

        }
    },

    displayAlternatives: function() {
        this.renderAlternative('AB', 'color_abv');
        this.renderAlternative('BC', 'color_bitterness');
        this.renderAlternative('AC', 'abv_bitterness');
    },

    displayPreviousInstance: function(index, elContainer) {
        
        user.switchUserInstance(index);
        this.compilePreferredBeers();

        elContainer.setAttribute('class', 'container');

        var elSubContainer = document.createElement('div');
        elSubContainer.setAttribute('class', 'sub-container');
            var elPreferencesDiv = document.createElement('div');
            elPreferencesDiv.setAttribute('class', 'previous-beer-preferences');
                var elPColor = document.createElement('p');
                elPColor.innerText = "Color:  " + user.thisUserPrevPrefs[index].color[0] + ' / ' + user.thisUserPrevPrefs[index].color[1];
                elPreferencesDiv.appendChild(elPColor);

                var elPAbv = document.createElement('p');
                elPAbv.innerText = "ABV:  " + user.thisUserPrevPrefs[index].abv[0] + ' / ' + user.thisUserPrevPrefs[index].abv[1];
                elPreferencesDiv.appendChild(elPAbv);

                var elPBitter = document.createElement('p');
                elPBitter.innerText = "Bitterness:  " + user.thisUserPrevPrefs[index].bitterness[0] + ' / ' + user.thisUserPrevPrefs[index].bitterness[1];
                elPreferencesDiv.appendChild(elPBitter);
            elSubContainer.appendChild(elPreferencesDiv);

            var elResultsDiv = document.createElement('div');
            elResultsDiv.setAttribute('class', 'previous-beer-lists')
                var elResultsColumn = [];
                for(var i = 0; i < 3; i++) {
                    elResultsColumn[i] = document.createElement('div');
                }
                    for(var i = 0; i < this.goodAll.length; i++){
                        var elDiv = document.createElement('div');
                        elDiv.setAttribute('class', 'past-beer');
                            var beerIndex = this.goodAll[i];
                            var elH5 = document.createElement('h5');
                            elH5.innerText = beers[beerIndex].style;
                            elDiv.appendChild(elH5);

                            var elPopUp = document.createElement('div');
                            elPopUp.setAttribute('class', 'hidden');
                                var elColor = document.createElement('p');
                                elColor.innerText = 'Color: ' + beers[beerIndex].color;
                                elPopUp.appendChild(elColor);

                                var elAbv = document.createElement('p');
                                elAbv.innerText = 'ABV: ' + beers[beerIndex].abv;
                                elPopUp.appendChild(elAbv);

                                var elBitter = document.createElement('p');
                                elBitter.innerText = 'Bitterness: ' + beers[beerIndex].bitterness;
                                elPopUp.appendChild(elBitter);
                            elDiv.appendChild(elPopUp);
                        elResultsColumn[2 - (i+1) % 3].appendChild(elDiv);
                    }
                for(var i = 0; i < 3; i++) {
                    elResultsDiv.appendChild(elResultsColumn[i]);
                }
            elSubContainer.appendChild(elResultsDiv);
        elContainer.appendChild(elSubContainer);
    },

    displayAllPrevious: function() {
        var elPastResults = document.getElementById('past-results');
        for(var i = 0; i < user.thisUserPrevPrefs.length; i++) {
            this.displayPreviousInstance(i, elPastResults);
        }
    }


};



function onRunOutput() {
    user.getPreviousNames();
    user.getCurrentPreference();
    user.findUsersPreviousPreferences();
    user.showPreferences();
    compileBeers();
    database.compilePreferredBeers();
    database.displayChoices();
    database.displayAlternatives();
    database.displayAllPrevious();
    var moreBeer = document.getElementById('button');
    moreBeer.addEventListener('click', database.displayChoices.bind(database));

}

onRunOutput();


// function test() { // tests all current defined methods for database object
//     user.name = 'Ned Stark',
//         user.currentPreferences.abv = [2, 3];
//     user.currentPreferences.bitterness = [2, 3];
//     user.currentPreferences.color = [3, 5];

//     compileBeers();

//     console.log(database.beers);
//     console.log('color + bitterness: ' + database.findBeersWithinBoth('color', 'bitterness')); // should return 1
//     console.log('color + abv: ' + database.findBeersWithinBoth('color', 'abv')); // should return 0
//     console.log('abv + bitterness: ' + database.findBeersWithinBoth('abv', 'bitterness')); // should return empty array

//     console.log('color + abv + bitterness: ' + database.findBeersWithAll());
// }
// test();