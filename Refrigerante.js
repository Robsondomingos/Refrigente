class coca {
    constructor(conservante,gas,açucar,agua){
        this.conservante = conservante;
        this.gas = gas;
        this.açucar = açucar;
        this.agua = agua;
    }
    Gelada(){
        console.log('Gelou');
    }
}
class fanta extends coca {
    constructor(conservante,gas,açucar,agua,sodio){
        super(conservante,gas,açucar,agua,sodio);
        this.sodio = sodio;
    }
    sabor(){
        super.sabor();
        console.log('saboroso');
    }
    Delicia(){
        console.log('fanta deliciosa com' + 'this.conservante' + 'concervante');
    }

}
const Ambev = new coca('conservante','gas','açucar','agua');
console.log(Ambev);
const Antartica = new fanta('conservante','gas','açucar','agua','sodio');
console.log(Antartica);