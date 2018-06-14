# CLE4 Typescript Advanced Speedcourse

## Werken met meerdere screens

- Bekijk de class `gamescreen`. Maak een instance van `gamescreen` in game.ts
- Game.ts hoeft alleen nog een gameloop en een gamescreen property te hebben
- Game.ts roept de update functie van de gamescreen aan

## Gameloop met verschillende typen objecten

- In gamescreen staan allerlei verschillende objecten die geupdate moeten worden. Het zou mooi zijn als deze in een enkele array kunnen staan. 

Gebruik `interface` om verschillende typen objecten in een enkele array te kunnen zetten:

**gameobject.ts**
```
interface GameObject {
    update():void
}
```
**car.ts**
```
class Car implements GameObject {
    public update(){
    }
}
```
Nu kan je de car en de bomb in dezelfde array plaatsen:

**game.ts**
```
objects:GameObject[] = []

this.objects.push(new Car(), new Bomb())

for(let o of this.objects){
    o.update()
}
```
### Bomb collision

In de loop willen we alleen de Bomb checken op collisions:
```
if(o instanceof Bomb) {
    // check o collision
}
```

## Fire!

- Zodra een bom beneden uit beeld gaat, voeg je een `new Fire()` toe aan de gameobjects array. Deze instance moet op dezelfde x positie verschijnen als waar de bom uit beeld ging.

## Health 

- Als je collide met een health object, verwijder je alle Fire instances uit de gameobjects array. Let op dat de fire DIVS ook uit de DOM verwijderd moeten worden.

## Screens

- Kan je van schermen wisselen door de screen property van Game.ts te veranderen?
- Maak een interface aan zodat de screen property verschillende typen screen kan bevatten.

## Objecten verwijderen

Als je een Health object oppakt verwijder je het Fire object. Je moet hiervoor het DOM element van het vuurtje weghalen uit de document.body, en je moet de instance van Fire verwijderen uit de gameobjects array.

### HTML Element uit DOM verwijderen

```
this.element.remove()
```

### Object uit array verwijderen

Je kan het beste van achter naar voren door een array loopen, zodat je tijdens de loop het object meteen uit de array kan verwijderen:
```
for(let i = array.length; i>=0; i--){
    let item = array[i]

    // check wat voor item dit is
    if(item...){
        // verwijder dit item uit de array
        array.splice(i,1)
    }
}
```
