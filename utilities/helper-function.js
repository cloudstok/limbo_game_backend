import { createLogger } from "./logger.js";
const failedBetLogger = createLogger('failedBets', 'jsonl');

export const logEventAndEmitResponse = (req, res, event, socket) => {
  let logData = JSON.stringify({ req, res })
  if (event === 'bet') {
    failedBetLogger.error(logData)
  }
  return socket.emit('betError', res);
}

const RTP = 8900;

export const getRandomMultiplier = () => {
    const win_per = (Math.random() * 99.00);
    let mult = (RTP) / (win_per * 100);
    if(mult < 1.01){
      mult = 1.00
    }
    return Number(mult).toFixed(2)
}