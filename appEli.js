var arrId = ['01', '02', '03', '04', '05']

function User(color, abv, bitter, id) {
    this.color = color;
    this.abv = abv;
    this.bitter = bitter;
}


function Beer(color, abv, bitter, id) {
    this.color = color;
    this.abv = abv;
    this.bitter = bitter;
    this.id = id
}

function instantiateBeers() {
    var liteAmericanLager = new beer('Lite American Lager', '1', '2', '1', '01');
    var americanLager = new beer('American Lager', ' 1', '3', '1', '02');
    var creamAle = new beer('Cream Ale', '1', '3', '1', '03');
    var americanWheatBeer = new beer('American Wheat Beer', '2', '3', '2', '04');
    var internationalPaleLager = new beer('International Pale Lager', '1', '3', '2', '05');
    var internationalAmberLager = new beer('International Amber Lager', '3', '3', '1', '06');
    var internationalDarkLager = new beer('International Dark Lager', '4', '1', '3', '07');
    var czechPaleLager = new beer('Czech Pale Lager', '2', '2', '2', '08');
    var czechPremiumPaleLager = new beer('Czech Premium Pale Lager', '2', '2', '3', '09');
    var czechAmberLager = new beer('Czech Amber Lager', '3', '3', '2', '10');
    var czechDarkLager = new beer('Czech Dark Lager', '5', '3', '2', '11');
    var munichHelles = new beer('Munich Helles', '1', '3', '2', '12');
    var festbier = new beer('Festbier', '2', '4', '2', '13');
    var hellsBock = new beer('Hells Bock', '2', '4', '2', '14');
    var germanLeichtbier = new beer('German Leichtbier', '1', '2', '2', '15');
    var kolsch = new beer('Kolsch', '1', '3', '2', '16');
    var germanExportbier = new beer('German Exportbier', '2', '3', '2', '17');
    var germanPils = new beer('German Pils', '1', '3', '2', '18');
    var marzen = new beer('Marzen', '3', '4', '2', '19');
    var rauchbier = new beer('Rauchbier', '3', '2', '3', '20');
    var dunkelsBock = new beer('Dunkels Bock', '4', '4', '2', '21');
    var viennaLager = new beer('Vienna Lager', '3', '3', '2', '22');
    var altbier = new beer('Altbier', '3', '3', '2', '23');
    var munichDunkel = new beer('Munich Dunkel', '4', '3', '2', '24');
    var schwarzbier = new beer('Schwarzbier', '5', '3', '2', '25');
    var doppelbock = new beer('Doppelbock', '3', '2', '5', '26');
    var balticPorter = new beer('Baltic Porter', '5', '5', '2', '27');
    var weiss = new beer('Weizen/Weissbier', '1', '3', '1', '28');
    var dunkelsWeissbier = new beer('Dunkels Weissbier', '4', '3', '1', '29');
    var weizenbock = new beer('Weizenbock', '3', '4', '2', '30');
    var ordinaryBitter = new beer('Ordinary Bitter', '2', '2', '2', '31');
    var bestBitter = new beer('Best Bitter', '3', '5', '2', '32');
    var strongBitter = new beer('Strong Bitter', '3', '3', '3', '33');
    var englishGoldenAle = new beer('English Golden Ale', '1', '3', '2', '34');
    var australianSparklingAle = new beer('Australian Sparkling Ale', '2', '3', '2', '35');
    var englishIPA = new beer('English IPA', '2', '4', '3', '36');
    var darkMild = new beer('Dark Mild', '4', '2', '1', '37');
    var englishBrownAle = new beer('English Brown Ale', '3', '5', '2', '38');
    var englishBrownPorter = new beer('English Brown Porter', '5', '3', '2', '39');
    var scottishLight = new beer('Scottish Light', '4', '2', '1', '40');
    var scottishHeavy = new beer('Scottish Heavy', '4', '2', '1', '41');
    var scottishExport = new beer('Scottish Export', '4', '3', '2', '42');
    var irishRedAle = new beer('Irish Red Ale', '3', '3', '2', '43');
    var irishStout = new beer('Irish Stout', '5', '3', '2', '44');
    var irishExtraStout = new beer('Irish Extra Stout', '5', '4', '3', '45');
    var sweetStout = new beer('Sweet Stout', '5', '3', '2', '46');
    var oatmealStout = new beer('Oatmeal Stout', '5', '3', '2', '47');
    var tropicalStout = new beer('Tropical Stout', '5', '5', '3', '48');
    var foreignExtraStout = new beer('Foreign Extra Stout', '5', '4', '4', '49');
    var englishStrongAle = new beer('English Strong Ale', '3', '4', '3', '50');
    var oldAle = new beer('Old Ale', '3', '4', '3', '51');
    var weeHeavy = new beer('Wee Heavy', '4', '5', '2', '52');
    var englishBarleywine = new beer('English Barleywine', '3', '5', '3', '53');
    var blondAle = new beer('Blond Ale', '1', '3', '2', '54');
    var americanPaleAle = new beer('American Pale Ale', '2', '3', '3', '55');
    var americanAmberAle = new beer('American Amber Ale', '3', '3', '2', '56');
    var californiaCommon = new beer('California Common', '3', '3', '2', '57');
    var americanBrownAle = new beer('American Brown Ale', '5', '3', '2', '58');
    var americanPorter = new beer('American Porter', '5', '3', '2', '59');
    var americanStout = new beer('American Stout', '5', '4', '4', '60');
    var imperialStout = new beer('Imperial Stout', '5', '5', '4', '61');
    var americanIPA = new beer('American IPA', '3', ' 4', '3', '62');
    var doubleIPA = new beer('Double IPA', '3', '5', '5', '63');
    var americanStrongAle = new beer('American Strong Ale', '3', '5', '4', '64');
    var americanBarleywine = new beer('American Barleywine', '3', '5', '4', '65');
    var weatwine = new beer('Weatwine', '3', '5', '3', '66');
    var berlinerWeisse = new beer('Berliner Weisse', '1', '2', '1', '67');
    var flandersRedAle = new beer('Flanders Red Ale', '3', '3', '1', '68');
    var oudBruin = new beer('Oud Bruin', '4', '4', '2', '69');
    var lambic = new beer('Lambic', '2', '3', '1', '70');
    var gueuze = new beer('Gueuze', '2', '4', '1', '71');
    var fruitLambic = new beer('Fruit Lambic', '2', '4', '1', '72');
    var witbier = new beer('Witbier', '1', '3', '1', '73');
    var belgianPaleAle = new beer('Belgian Pale Ale', '2', '3', '2', '74');
    var bieredeGarde = new beer('Biere de Garde', '3', '4', '2', '75');
    var belgianBlondAle = new beer('Belgian Blond Ale', '2', '4', '2', '76');
    var saison = new beer('Saison', '3', '4', '2', '77');
    var belgianGoldenStrongAle = new beer('Belgian Golden Strong Ale', '2', '5', '2', '78');
    var belgianSingle = new beer('Belgian Single', '1', '3', '2', '79');
    var belgianDubbel = new beer('Belgian Dubbel', '1', '4', '2', '80');
    var belgianTripel = new beer('Belgian Tripel', '2', '5', '2', '81');
    var belgianDarkStrongAle = new beer('Belgian Dark Strong Ale', '4', '5', '2', '82');
};

matches: function() {
    var arrRcolor = [];
    var arrRabv = [];
    var arrRbitter = [];
    var arrRcolorabv = [];
    var arrRcolorbitter = [];
    var arrRabvbitter = [];

    for (i = 0; i < arrId.length; i++) {
        if (arrId[i] = Beer.id) {
            if (Beer.color[i] === User.color) {
                arrRcolor.push(Beer.id[i]);
            }
            if (Beer.abv[i] === User.abv) {
                arrRabv.push(Beer.id[i]);
            }
            if (Beer.bitter[i] === User.bitter) {
                arrRbitter.push(Beer.id[i]);
            }
        }
    }
    for (i = 0; i < arrRcolor.length; i++) {
        arrRcolor.forEach(function(item, index, array) {

        })
        if (arrRcolor[i] === arrRabv[i]) {
            arrRcolorabv.push(arrRcolor[i]);
        }
        if (arrRcolor[i] === arrRbitter[i]) {
            arrRcolorbitter.push(arrRcolor[i])
        }
    }

    Which ids in arrRcolor exist in arrRabv
    Push ids to arrRcolorabv
    Which ids in arrRcolor exists in arrRbitter
    push ids to arrRcolorbitter
    Which ids in arrRabv exists in arrRbitter
    push ids to arrRabvbitter

}