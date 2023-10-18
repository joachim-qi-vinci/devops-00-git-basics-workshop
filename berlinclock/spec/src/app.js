export class Main{
    toBerlinClock(number){
        console.log("############ " +  number + "   ##########");
        if (number >= 5){
            const reste = number % 5
            if (reste !== undefined){
                console.log("Lampe 5 min allumée + " + reste);
                return "Lampe 5 min allumée + " + reste;
            }        
           return "Lampe 5 min allumée";
        }

        
        if (number%2 === 1) return "nombre impair";
        if (number%2 === 0) return "nombre pair";
    }
    toBerlinClock2(number){
        console.log("########## " + number + " ###########");
        if (number === 5) return "Lampe 5 min allumée";
    }
}