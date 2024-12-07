import { write } from "../../utilities/db-connection.js";


export const insertSettlement = async(data)=> {
    try{
        const [initial, matchId, operatorId, userId, betAmount, multiplier] = data.split(':');
        const decodeUserId = decodeURIComponent(userId);
        await write(`INSERT INTO settlement (bet_id, lobby_id, user_id, operator_id, bet_amount, max_mult) VALUES(?, ?, ?, ?, ?, ?)`, [data, matchId, decodeUserId, operatorId, parseFloat(betAmount), multiplier]);
        console.log(`Settlement data inserted successfully`);
    }catch(err){
        console.error(`Err while inserting data in table is:::`, err);
    }
}