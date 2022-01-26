/* eslint-disable */
//import "bootstrap";
//import "./style.css";

//import "./assets/img/rigo-baby.jpg";


  let generateExcuse = () => {
let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let domain=['.com','.org','.net','.us','.io'];

for(let i=0;i<pronoun.length;i++){
for(let j=0; j<adj.length;j++){
for(let y=0;y<noun.length;y++){
for(let x=0;x<domain.length;x++){

document.write(pronoun[i]+adj[j]+noun[y]+domain[x])
document.write("</br>")
    }

} 
  
}

}

};
generateExcuse()