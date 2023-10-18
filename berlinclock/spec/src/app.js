export class Main{
    toBerlinClock(number){
        //number above or equals 5;
        if (number >= 5){
            //calculating number of 1' lamp on;
            const reste = number % 5
            // number above or equals 10
            if (number >= 10){
                // calculating number of 5' lamp on;
                const multiple = (number - reste)/5;
                if (multiple === 3){
                    if (reste === 0){
                        return multiple + " Lampes 5 min allumées en rouge";
                    }
                    return multiple + " Lampes 5 min allumées en rouge + " + reste;
                }
                if (reste !== 0){
                    return multiple + " Lampes 5 min allumées + " + reste;
                }
                return multiple + " Lampes 5 min allumées";
            }
            if (reste !== 0){
                return "1 Lampe 5 min allumée + " + reste;
            }        
            return "Lampe 5 min allumée";
        }
        //numbers below 5;
        if (number%2 === 1) return "nombre impair";
        if (number%2 === 0) return "nombre pair";
    }
    
}