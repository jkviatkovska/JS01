//1. Výplata
const mesacnyPrijem = (7 * 320) * 21;
console.log(mesacnyPrijem);

const zivnost = mesacnyPrijem - (mesacnyPrijem * 0.6) 
const dan = zivnost * 0.15 
console.log(`Výška dane je ${Math.floor(dan)} Kč`);
console.log(`Váš konečný príjem je ${Math.floor(mesacnyPrijem - dan)} Kč`);


//2. Dĺžka filmu
const dlzkaFilmu = 223;
const hodiny = Math.floor(dlzkaFilmu / 60);
const minuty = Math.floor(dlzkaFilmu % 60);
console.log(`Dĺžka filmu je ${hodiny} hodín a ${minuty} minút`);


//3. E-mail
const email = 'Jana' + '.' +  'Kviatkovska' + '@mujmail.com';
console.log(email);


//1. Náhodné čísla
document.body.innerHTML += Math.round(Math.random() * 9 + 1);


//2. Prevod meny
const wageInEur = 20;
const kurz = 24.55;
const wageInCzk = Math.round(wageInEur * kurz);
document.body.innerHTML += '<h1>Mzda v korunách je: ' + wageInCzk + ' Kč</h1>';


//3. Ultramaraton
const start = 15;
const dlzka = 12;
const koniec = Math.round((start + dlzka) % 24);
console.log(`Bežec pobeží do ${koniec} hodín ráno`);


//1. Prijem divadla
const listok = 12;
const navstevnici = 174;
const prijem = Math.round((listok * navstevnici) * 15);
console.log(prijem);

const studenti = 0.4
const listokStudent = listok * 0.65;
const predstavenieStudent = navstevnici * studenti;
const prijemStudenti = listokStudent * predstavenieStudent * 15;
const celkovyPrijem = prijem + prijemStudenti;
console.log(`Celkový príjem divadla je ${Math.round(celkovyPrijem)}`)


//2. Schopnejšie zaokrúhľovanie
const x = 247.5183;
const desatiny = Math.round(x * 10) / 10;
console.log(desatiny);
const stotiny = Math.round(x * 100) / 100;
console.log(stotiny);
const celeStovky = Math.round(x / 100) * 100;
console.log(celeStovky);


//3. Hádzanie kockou
document.body.innerHTML += Math.round(Math.random() * 5 + 1);