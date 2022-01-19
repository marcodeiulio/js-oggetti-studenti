/* 
| Descrizione:
1. Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
2. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
3. Creare un array di oggetti di studenti (ossìa oggetti con le proprietà sopra descritte).
4. Ciclare su tutti gli studenti e stampare per ognuno di essi: nome e cognome.
5. Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere all’array creato in precedenza, un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
| BONUS:
Usiamo il DOM per stampare e chiedere le informazioni all'utente!
*/

//# Utilities
const cs = (argument) => console.log(argument);
const ct = (argument) => console.table(argument);

//#Exercise
//* 1.
const studentOfTheYear = {
	name: "Gigi",
	surname: "Bettola",
	age: 66,
};
cs(studentOfTheYear);

//* 2.
for (let key in studentOfTheYear) {
	const keyWord = studentOfTheYear[key];
	cs(keyWord);
	document.getElementById(key).innerText = keyWord;
}

//* 3.
const students = [
	studentOfTheYear,
	{
		name: "Giangolo",
		surname: "Pertugio",
		age: 19
	},
	{
		name: "Terzo",
		surname: "Arrivato",
		age: 18
	}
];
ct(students);

//* 4.
for (let k = 0; k < students.length; k++) {
	cs(`Student n.${k + 1}: ${students[k].name} ${students[k].surname}`);
}

//* 5.

const fourthStudent = {};

/* fourthStudent.name = prompt('Insert your name');
fourthStudent.surname = prompt('Insert your surname');
fourthStudent.age = prompt('Insert your age');
cs(fourthStudent);
*/

//* Bonus
const sub = document.getElementById('sub');

sub.addEventListener('click', () => {
	fourthStudent.name = document.getElementById('user-name').value;
	fourthStudent.surname = document.getElementById('user-surname').value;
	fourthStudent.age = parseInt(document.getElementById('user-age').value);
	cs(fourthStudent);
	students.push(fourthStudent);
});