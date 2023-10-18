import { Main } from '../src/app.js';


describe("A suite of test for the berlinClock exercise of the main class", function(){
    let main = new Main();
        
    //let date = new Date(1776, 6, 4, 12, 30, 1, 0);
    
    it("Lampe 1 should be on", function(){   
        const nbrImpair = 3; 
        let result = main.toBerlinClock(nbrImpair);
        expect(result).toBe("nombre impair");
    });

    it("Lampe 1 should be off", function(){    
        const nbrPair = 4;
        let result = main.toBerlinClock(nbrPair);
        expect(result).toBe("nombre pair");
    });
    
it ("Lampe 5' should be on", function(){
        const nbr = 5;
        let result = main.toBerlinClock(nbr);
        expect(result).toBe("Lampe 5 min allumée")
    });

    it ("Lampe 5' should be on", function(){
        const nbr = 7;
        let result = main.toBerlinClock(nbr);
        expect(result).toBe("1 Lampe 5 min allumée + 2")
    });

    it ("2 Lampe 5' should be on", function(){
        const nbr = 10;
        let result = main.toBerlinClock(nbr);
        expect(result).toBe("2 Lampes 5 min allumées")
    });

    it ("2 Lampe 5 + 1' should be on", function(){
        const nbr = 13;
        let result = main.toBerlinClock(nbr);
        expect(result).toBe("2 Lampes 5 min allumées + 3")
    });

    it ("3 Lampe 5 in red + 1' should be on", function(){
        const nbr = 15;
        let result = main.toBerlinClock(nbr);
        expect(result).toBe("3 Lampes 5 min allumées en rouge")
    });

    it ("3 Lampe 5 in red + 1' should be on", function(){
        const nbr = 16;
        let result = main.toBerlinClock(nbr);
        expect(result).toBe("3 Lampes 5 min allumées en rouge + 1")
    });

    



    
    
});