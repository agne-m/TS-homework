"use strict";
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 7] = "Sunday";
})(WeekDays || (WeekDays = {}));
;
var Answer;
(function (Answer) {
    Answer[Answer["No"] = 0] = "No";
    Answer[Answer["Yes"] = 1] = "Yes";
})(Answer || (Answer = {}));
;
var WeekDayNamesLT;
(function (WeekDayNamesLT) {
    WeekDayNamesLT["Monday"] = "pirmadienis";
    WeekDayNamesLT["Tuesday"] = "antradienis";
    WeekDayNamesLT["Wednesday"] = "tre\u010Diadienis";
    WeekDayNamesLT["Thursday"] = "ketvirtadienis";
    WeekDayNamesLT["Friday"] = "penktadienis";
    WeekDayNamesLT["Saturday"] = "\u0161e\u0161tadienis";
    WeekDayNamesLT["Sunday"] = "sekmadienis";
})(WeekDayNamesLT || (WeekDayNamesLT = {}));
;
console.group('Literal types - užduotys');
{
    let TopCitiesOfLithuania;
    (function (TopCitiesOfLithuania) {
        TopCitiesOfLithuania["Vilnius"] = "Vilnius";
        TopCitiesOfLithuania["Kaunas"] = "Kaunas";
        TopCitiesOfLithuania["Klaip\u0117da"] = "Klaip\u0117da";
        TopCitiesOfLithuania["\u0160iauliai"] = "\u0160iauliai";
        TopCitiesOfLithuania["Panev\u0117\u017Eys"] = "Panev\u0117\u017Eys";
    })(TopCitiesOfLithuania || (TopCitiesOfLithuania = {}));
    ;
    let TopCountriesByPopulation;
    (function (TopCountriesByPopulation) {
        TopCountriesByPopulation[TopCountriesByPopulation["Honduras"] = 0] = "Honduras";
        TopCountriesByPopulation[TopCountriesByPopulation["UnitedArabEmirates"] = 1] = "UnitedArabEmirates";
        TopCountriesByPopulation[TopCountriesByPopulation["Djibouti"] = 2] = "Djibouti";
        TopCountriesByPopulation[TopCountriesByPopulation["SaintBarthelemy"] = 3] = "SaintBarthelemy";
        TopCountriesByPopulation[TopCountriesByPopulation["Seychelles"] = 4] = "Seychelles";
    })(TopCountriesByPopulation || (TopCountriesByPopulation = {}));
    ;
    let TopCountriesByBvp;
    (function (TopCountriesByBvp) {
        TopCountriesByBvp[TopCountriesByBvp["UnitedStates"] = 1] = "UnitedStates";
        TopCountriesByBvp[TopCountriesByBvp["China"] = 2] = "China";
        TopCountriesByBvp[TopCountriesByBvp["Germany"] = 3] = "Germany";
        TopCountriesByBvp[TopCountriesByBvp["UK"] = 4] = "UK";
        TopCountriesByBvp[TopCountriesByBvp["France"] = 5] = "France";
    })(TopCountriesByBvp || (TopCountriesByBvp = {}));
    ;
    console.group("1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.");
    {
        console.log(TopCitiesOfLithuania);
        const city1 = TopCitiesOfLithuania.Vilnius;
        const city2 = TopCitiesOfLithuania.Kaunas;
        const city3 = TopCitiesOfLithuania.Klaipėda;
        const city4 = TopCitiesOfLithuania.Šiauliai;
        const city5 = TopCitiesOfLithuania.Panevėžys;
        console.log({ city1, city2, city3, city4, city5 });
    }
    console.groupEnd();
    console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
    {
        console.log(TopCountriesByPopulation);
    }
    console.groupEnd();
    console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
    {
        console.log(TopCountriesByBvp);
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=enums.js.map