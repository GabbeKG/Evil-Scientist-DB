//import fetch from "node-fetch";

//API GET Countries


var countries: any[]= [];
console.log("has started")

const api_url='https://restcountries.com/v2/all?fields=name';
getCountries();

async function getCountries() {
  const res = await fetch(api_url);
  const country= await res.json();
  
  country.map((element: any)=>{
    countries.push(element)
  })
  const countryList=document.getElementById("evilScientistCountry");
  for(let i=0; i<countries.length;i++){
    var option= new Option(countries[i].name);
    option.value=countries[i].name;
    option.text=countries[i].name;
    countryList?.appendChild(option);
  }
  console.log("done!")
}


var evilList: EvilScientist[] =[];



// Interface solution:


interface EvilScientist{
  name: string;
  country: string;
  henchmen: number;
  description:string;
}





//Functions
//GET
const getScientist= function(name:string): EvilScientist| undefined{
  return evilList.find(n=>n.name==name);
}

//POST

const addNameDiv = function (name: string): void {
  const newDiv = document.createElement("div");
  newDiv.innerHTML = name;
  newDiv.addEventListener("click", function (event) {
      event.preventDefault();
      const chosenName = this.innerHTML;
      const chosenScientist = getScientist(chosenName);

      if (chosenScientist) {
          const spanName = document.querySelector("span#name") as HTMLElement;
          const spancountry = document.querySelector("span#country") as HTMLElement;
          const spanHenchmen = document.querySelector("span#henchmen") as HTMLElement;
          const spanDescription = document.querySelector("span#description") as HTMLElement;

          spanName.innerHTML = chosenScientist.name;
          spancountry.innerHTML = String(chosenScientist.country);
          spanHenchmen.innerHTML = String(chosenScientist.henchmen);
          spanDescription.innerHTML = chosenScientist.description;
      }
  });

  (document.querySelector("section#list-names") as HTMLElement).append(newDiv);
}

const addButton = document.querySelector("button");
addButton?.addEventListener("click", (event) => {
    event.preventDefault();

    const nameElement = document.querySelector("input#evilScientistName") as HTMLInputElement;
    const countryElement = document.getElementById("evilScientistCountry") as HTMLInputElement;
    const henchmenElement = document.querySelector("input#evilScientistHenchmen") as HTMLInputElement;
    const descriptionElement = document.querySelector("input#evilScientistDescription") as HTMLInputElement;

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


