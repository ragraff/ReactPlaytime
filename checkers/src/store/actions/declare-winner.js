export const DECLARE_WINNER = 'DECLARE_WINNER';

export const declareWinner = (winner) => {
    return { type: DECLARE_WINNER, winner };
}