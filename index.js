//import fetch from "node-fetch";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
//API GET Countries
var countries = [];
console.log("has started");
var api_url = 'https://restcountries.com/v2/all?fields=name';
getCountries();
function getCountries() {
    return __awaiter(this, void 0, void 0, function () {
        var res, country, countryList, i, option;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, fetch(api_url)];
                case 1:
                    res = _a.sent();
                    return [4 /*yield*/, res.json()];
                case 2:
                    country = _a.sent();
                    country.map(function (element) {
                        countries.push(element);
                    });
                    countryList = document.getElementById("evilScientistCountry");
                    for (i = 0; i < countries.length; i++) {
                        option = new Option(countries[i].name);
                        option.value = countries[i].name;
                        option.text = countries[i].name;
                        countryList === null || countryList === void 0 ? void 0 : countryList.appendChild(option);
                    }
                    console.log("done!");
                    return [2 /*return*/];
            }
        });
    });
}
var evilList = [];
//Functions
//GET
var getScientist = function (name) {
    return evilList.find(function (n) { return n.name == name; });
};
//POST
var addNameDiv = function (name) {
    var newDiv = document.createElement("div");
    newDiv.innerHTML = name;
    newDiv.addEventListener("click", function (event) {
        event.preventDefault();
        var chosenName = this.innerHTML;
        var chosenScientist = getScientist(chosenName);
        if (chosenScientist) {
            var spanName = document.querySelector("span#name");
            var spancountry = document.querySelector("span#country");
            var spanHenchmen = document.querySelector("span#henchmen");
            var spanDescription = document.querySelector("span#description");
            spanName.innerHTML = chosenScientist.name;
            spancountry.innerHTML = String(chosenScientist.country);
            spanHenchmen.innerHTML = String(chosenScientist.henchmen);
            spanDescription.innerHTML = chosenScientist.description;
        }
    });
    document.querySelector("section#list-names").append(newDiv);
};
var addButton = document.querySelector("button");
addButton === null || addButton === void 0 ? void 0 : addButton.addEventListener("click", function (event) {
    event.preventDefault();
    var nameElement = document.querySelector("input#evilScientistName");
    var countryElement = document.getElementById("evilScientistCountry");
    var henchmenElement = document.querySelector("input#evilScientistHenchmen");
    var descriptionElement = document.querySelector("input#evilScientistDescription");
    if (nameElement.value !== "") {
        if (descriptionElement.value === "")
            descriptionElement.value = "-";
        evilList.push({
            name: nameElement.value,
            country: countryElement.value,
            henchmen: Number(henchmenElement.value),
            description: descriptionElement.value
        });
        addNameDiv(nameElement.value);
        nameElement.value = "";
        countryElement.value = "";
        henchmenElement.value = "";
        descriptionElement.value = "";
    }
});
//CLASS
/*
type EvilScientist = {
  name: string;
  country: string;
  henchmen: number;

};

const evilscientist: EvilScientist[]=[];

const selectEvilScientist= function(name:string): EvilScientist | undefined{
return evilscientist.find(n=>n.name===name);
}
*/
