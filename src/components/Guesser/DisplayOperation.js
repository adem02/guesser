import React from 'react'
import classes from './Guesser.module.css'


const DisplayOperation = ({ operation, num }) => {

    if (operation.action === "PENSER") {
        return (
            <div className={classes.think}>
                <p>Penses à un chiffre de 0 à 100</p>
            </div>
        )
    }

    if (operation.action === "PLUS") {
        return (
            <div className={classes.think}>
                <p>Additionne le par lui même</p>
                <p>Exemple : si tu as pensé à 1 alors fais l'opération 1 + 1 qui donnes 2 (déjà tu vois le génie)</p>
            </div>
        )
    }
    if (operation.action === 'FOIS') {
        return (
            <div className={classes.think}>
                <p>Multiplie le résultat que tu viens d'obtenir par {num}</p>
                <p>Exemple : Le résultat de l'exemple précedent étant 2 alors alors tu fais 2 * 5 qui donne 10 n'essaies pas de comprendre c'est du très haut niveau pour toi</p>
            </div>
        )
    }
    if (operation.action === 'DIVISE') {
        return (
            <div className={classes.think}>
                <p>Divise le résultat que tu viens d'obtenir par le nombre au quel t'as pensé !</p>
                <p>Exemple : Le résultat de l'exemple précedent étant 10 alors alors tu fais 10 / 1 qui donne 10 n'essaies pas de comprendre c'est du très haut niveau pour toi</p>
            </div>
        )
    }

    if (operation.action === 'RESULT') {
        return (
            <div className={classes.result}>
                <p>Le résultat est :</p>
                <p>10</p>
            </div>
        )
    }
}

export default DisplayOperation