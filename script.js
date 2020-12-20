/**
 * ?  Les variables
 ** On les déclare avec const ou let
 ** Elles servent à stocker des valeurs
 ** Qu'on va réutiliser plus tard
 *! Types
 * Strings (Chaines de caractères)
 * Number (Nombres entiers ou décimaux)
 * Boolean (true ou false) 
 * Null (aucune valeur)
 * Arrays (Tableaux de données)
 * Objects ("Super" tableaux)
 */

const nom = "Bill Gates"; // String | Chaine de caractères
let age = 67; // Number // boolean // null
let animaux = ["Chien", "Chat", "Cheval"]; // Array | Tableau
let apprenant = {
    "prenom": "Alexandre",
    "nomDeFamille": "Masi",
    "dateDeNaissance": "23/06/2000"
}; // Object |Objet
let apprenants = [{
    "prenom": "Alexandre",
    "nom": "Masi",
    "dateDeNaissance": "23/06/2000"
},
{
    "prenom": "Soufiane",
    "nom": "Kabdani",
    "dateDeNaissance": "14/08/1997",
}
]; // Un array qui contient des objects

let big = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores, quo incidunt! Aliquid vitae accusantium praesentium quas quasi, beatae dolores non ullam expedita nesciunt, sint laudantium, explicabo assumenda? Accusantium dolore cum repudiandae laboriosam porro ea voluptates praesentium expedita aperiam consequatur animi enim beatae sed consequuntur deleniti, blanditiis obcaecati unde, fugiat culpa placeat! Reiciendis repudiandae aliquam harum id consequatur neque distinctio magnam, sapiente possimus dolorum itaque molestias? Tempora necessitatibus maxime cupiditate ea nulla inventore itaque consectetur est eum officiis? Iusto cupiditate temporibus modi unde, vel id voluptatum magnam placeat debitis necessitatibus esse autem inventore quae minima, adipisci quisquam molestias expedita non hic voluptas. Doloremque necessitatibus architecto quasi recusandae nesciunt numquam facilis accusamus. Atque, laudantium. Quos facere sunt nobis nisi omnis aliquid tempora alias ipsam fugiat, quidem inventore earum rerum cum, doloribus animi quae. Repellat accusantium eaque quos odio officia nobis labore praesentium ab, velit earum soluta illum in, odit culpa voluptatum neque voluptatem iusto sit dolore vero alias sapiente suscipit? Praesentium minima ducimus odio in, tempora minus, corporis vitae aspernatur eligendi, voluptatibus corrupti cumque sit temporibus nostrum culpa cum provident laborum quo eum autem maiores eaque dolore non. Quae aliquam itaque in voluptatibus quo, expedita deserunt deleniti asperiores ipsam, quos id porro maiores est? Veniam perferendis doloribus perspiciatis quasi optio, cupiditate temporibus similique iure at obcaecati expedita explicabo deleniti, laborum fugit a. Dolores, maiores veniam facilis dolor laudantium vel ullam? Quos eaque tenetur ipsa, minima omnis quod porro iusto voluptate veniam laboriosam dolore, officiis perspiciatis doloremque! Minima aliquid tenetur ratione et illum rem modi maxime libero voluptate repellendus adipisci molestiae ab, officiis, impedit deleniti incidunt vero neque esse! Quibusdam corporis reprehenderit molestiae obcaecati modi veniam blanditiis quae totam ea saepe error quia repellat expedita velit excepturi, provident ullam numquam, culpa necessitatibus tempore aliquam aliquid pariatur iusto labore! Dolorem inventore fugiat provident suscipit porro officiis repellendus numquam, nihil ducimus mollitia optio blanditiis dolor vero aperiam rem, tenetur temporibus magnam unde, dolore earum ipsum. Est optio, earum sunt nihil porro impedit! Aspernatur alias placeat odit enim, amet deserunt aperiam veritatis perspiciatis eum. Ipsum fuga fugit, libero quasi sed deserunt explicabo nobis repellat distinctio, tempora facilis pariatur debitis alias aut amet facere nulla fugiat neque eius ad culpa? Placeat voluptatibus eaque commodi delectus nesciunt illum temporibus, ipsum nam repellat cum ex voluptates beatae doloribus quasi tempora saepe, at officia eligendi inventore ab tenetur! Quae, ducimus eos rem blanditiis aspernatur voluptatibus asperiores ea iure consectetur alias repellat architecto ex at fugit debitis eaque provident qui id numquam minus ab molestias recusandae! Quod ex repudiandae accusantium, placeat dignissimos fugiat, officiis soluta sequi nobis impedit ducimus, maxime nulla laborum? Dolor voluptatum officiis explicabo, reprehenderit odit totam cumque dolorum tempora nulla perspiciatis distinctio obcaecati dolorem cupiditate impedit velit consequuntur blanditiis possimus ipsa quaerat minus incidunt nisi. Quod dicta magni quae libero laboriosam repellendus eaque molestiae. Accusamus necessitatibus, inventore laborum ullam cum architecto minus exercitationem fugit earum odit perferendis omnis commodi, recusandae sunt? Adipisci voluptatibus deleniti nobis suscipit alias, in incidunt minima, quibusdam officiis molestiae reiciendis voluptates repellat illo impedi"

/**
 * ? Les fontctions
 ** On les déclare : crée avec "function nomDeLaFonction(){};"
 ** Elles servent à stocker des suites d'instructions dont on va pouvoir disposer plus loin ou plus tard
 */

const text = document.querySelector("#texte");  // ! querySelector => Permet de selectionner le premier élément (Balise, id, class) indiqué dans les parenthèses.
text.innerHTML = nom + " a " + age + " ans";

const toto = document.querySelector(".button");

function addition(nbr1, nbr2) {
    return nbr1 + nbr2;
}

function multiplyBy(number) {
    let multiplicateur = 5;
    let result = number * multiplicateur;
    // return number + " multiplié par " + multiplicateur + " = " + result;
    return `${number} multiplié par ${multiplicateur} = ${result}` // `` = Backticks (ALTGR + 7)
    // Ces deux return font exactement la même chose ! La deuxième syntaxe est juste plus facile à lire pour un humain.
}

//? Fonctions utiles
console.log("Bonjour"); // Affiche "Bonjour" dans la console de votre navigateur (F12)
alert('Coucou'); // Affiche une boîte de dialogue sur votre page web avec le texte "Coucou"
confirm('Voulez-vous envoyer le message ?'); // Affiche une boîte de dialogue de confirmation sur votre page web
prompt("Comment tu t'appelles ?") // Même chose, mais avec un champ de texte à remplir

document.querySelector("h1")
/**
 **  "document" = Objet point d'entrée vous permettant d'intéragir avec votre page.
 ** "." Permet d'accéder aux méthodes applicables à l'objet précédemment appelé
 ** "querySelector()" Permet de sélectionner le premier élément que vous précisez entre guillemets
*/

let monAge = prompt("Quel âge as-tu") // Je stocke le prompt dans une variable que je vais pouvoir utiliser après 
console.log("Tu as " + monAge + " ans") // J'affiche la valeur de ma variable dans la console
