import {
    getFirestore, collection, addDoc, query, where, orderBy, getDocs,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js"
import { app } from "./firebase_core.js";

const TicTacToeGameCollection = 'tictactoe_game';
const db = getFirestore(app);

export async function addTicTacToeGameRecord(gameRecord) {
    await addDoc(collection(db, TicTacToeGameCollection), gameRecord);
}

export async function getAllPlayRecords(email) {
    let history = [];
    const q = query(
        collection(db, TicTacToeGameCollection),
        where('email', '==', email),
        orderBy('timestamp', 'desc'),
    );

    const snapshot = await getDocs(q);
    snapshot.forEach(doc => {
        const { email, winner, moves, timestamp } = doc.data();
        history.push({ email, winner, moves, timestamp });
    });

    return history;
}