import { create, all} from 'mathjs'
const nerdamer = require("nerdamer/all.min");

const config = { }
const math = create(all, config);



export const rcpFunction = (funcion, puntoX1, puntoX2) => {
    try {
    let puntoX1Ap = math.evaluate(puntoX1).toString();
    let puntoX2Ap = math.evaluate(puntoX2).toString();
    if(puntoX1Ap > puntoX2Ap){
        var puntomayor1 = puntoX1Ap;
        var puntomenor1 = puntoX2Ap;
    }else{
         puntomayor1 = puntoX2Ap;
         puntomenor1 = puntoX1Ap;
    }
    let scope = {
        x:puntomayor1
    }
    let scope2 = {
        x:puntomenor1
    }
    
        if (funcion.includes('x')) {
            var answer1 = (math.evaluate(funcion, scope)); 
            var answer2 = (math.evaluate(funcion, scope2));
            let answer3 = (answer1 - (answer2));
            var answer4 = (answer3/(puntomayor1-puntomenor1))
        }else{
            answer1 = (math.evaluate(funcion));
            answer4 = (answer1/(puntomayor1-puntomenor1))

        }
        
        return answer4;
    } catch (error) {
        return 'Expresion Invalida'
    }
    
}

export const rciFunction = (funcion, puntoX3) => {
    try {
    let puntoX3Ap = math.evaluate(puntoX3).toString();
    let scope = {
        x:puntoX3Ap
    }
    let scopeH = {
        h:0
    }
    
        if (funcion.includes('x')) {
            let str = funcion;
            let base = str.replace(/x/g,`(${puntoX3}+h)`);
            let base2 = (math.evaluate(funcion, scope));
            let base3 = `${base} - ${base2}`;
            let base4 = nerdamer(`divide(${base3}, h)`);
            let base5 = (math.evaluate(base4.toString(), scopeH));
            return base5;
        }else{
            let base = funcion;
            let base2 = (math.evaluate(funcion, scope));
            let base3 = `${base} - ${base2}`;
            let base4 = nerdamer(`divide(${base3}, h)`);
            let base5 = (math.evaluate(base4.toString(), scopeH));
            return base5;
        }
        // return answer3;
    } catch (error) {
        return 'Expresion Invalida'
    }
}