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


var evilList: EvilScientist[] = [];



// Interface solution:


interface EvilScientist{
  name: string;
  country: string;
  henchmen: number;
  description:string;
}





//Functions
//GET

//Skickar parametern name och jämför innehållet av parametern mot interfacet EvilScientist 
//och om inget finns eller hunnit laddats in så tillåts det returneras som undefined.
//Går att ha null istället för undefined men skillnaden är att att med null så måste det finnas ett tomt värde minst.

//Därefter returneras matchande namn efter att gått igenom arrayen
const getScientist= function(name:string): EvilScientist| undefined{
  return evilList.find(n=>n.name==name);
}

//POST

const addNameDiv = function (name: string) {
  const newDiv = document.createElement("div");
  newDiv.classList.value="scientist";
  newDiv.innerHTML = name;
  newDiv.addEventListener("click", function (event) {
      event.preventDefault();
      const selectedName = this.innerHTML;
      const selectedScientist = getScientist(selectedName);
      if (selectedScientist) {
        const spanName = document.querySelector("span#name") as HTMLElement;
        const spancountry = document.querySelector("span#country") as HTMLElement;
        const spanHenchmen = document.querySelector("span#henchmen") as HTMLElement;
        const spanDescription = document.querySelector("span#description") as HTMLElement;
        
        spanName.innerHTML = selectedScientist.name;
        spancountry.innerHTML = selectedScientist.country;
        spanHenchmen.innerHTML = String(selectedScientist.henchmen);
        spanDescription.innerHTML = selectedScientist.description;
        this.classList.toggle("active");
      }
  });

  (document.querySelector("section#list-names") as HTMLElement).append(newDiv);
}

const addButton = document.querySelector("button");
addButton?.addEventListener("click", (event) => {
    event.preventDefault();

    const nameElement = document.querySelector("input#evilScientistName") as HTMLInputElement;
    const countryElement = document.querySelector("select#evilScientistCountry") as HTMLSelectElement;
    const henchmenElement = document.querySelector("input#evilScientistHenchmen") as HTMLInputElement;
    const descriptionElement = document.querySelector("input#evilScientistDescription") as HTMLInputElement;
    const sfxGoodPlay = document.querySelector("#sfxgood") as HTMLAudioElement;
    const sfxBadPlay = document.querySelector("#sfxbad") as HTMLAudioElement;

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
        
        sfxGoodPlay.play();
        nameElement.style.backgroundColor="#fff";
        nameElement .style.border="solid 1px #631616";

        nameElement.value = "";
        countryElement.value = "";
        henchmenElement.value = "";
        descriptionElement.value = "";
      }
      else{
        nameElement.style.border="solid red 3px";
        nameElement.style.backgroundColor="rgba(212, 19, 19, 0.8)"
        sfxBadPlay.play();
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


