# REACT /!\ Library
créatif, libre
à un DOM virtuel
pattern Reactor
Find a style guide
city.reduce
city.action
<br/>
## Redux 
* Reduce
* Actions

# Yarn
Met tout en cache, hyper rapide
Accepte seulement les packages stables  et sécurisés

# Mongo db
utilisé pour agir sur une masse de données rapidement

# Express
temps réel

# Angular 
universel, compatible

à l'attibut (Input) d'un component enfant
@Input() city: string;
ngOnChanges()
<weather [city]="city.name"></weather> affecter une valeur 
---

à l'attibut (Output) d'un component parent
City {
@Output() city: string: EventEmiter<string> = new EvenEmitter();
}

emit(){
    this.onCity.emit("paris")
}
dans main.html
<city (onCity)="console.log(event())">


# Javascript natif
3D/Game
Particulier
Pas compatible entre browser
Pas sécurisé

---

CityList contient

CityService
city: City= new City
set(city: String){
    city.name = city
}

set(){cityService.set(Form.get('input').value)}

---
angular flex layout