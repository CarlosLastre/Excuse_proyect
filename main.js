
let wholist = ['The dog','My grandma','His turtle','My bird'];
let actionlist = ['ate','peed','crushed','broke'];
let whatlist = ['my homework', 'the keys', 'the car'];
let whenlist = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

function generateExcuse(ejecucion_de_lista){
    return ejecucion_de_lista[Math.floor(Math.random() * ejecucion_de_lista.length)];
}
function fase2() {
    const who = generateExcuse(wholist); 
    const action = generateExcuse(actionlist);
    const what = generateExcuse(whatlist);
    const when = generateExcuse(whenlist);

    return `${who} ${action} ${what} ${when}`;
}
window.onload = function(){
    const tipo1 = fase2();
    document.getElementById('excuse').innerHTML = tipo1;
};

