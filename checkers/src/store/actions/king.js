export const KING = 'KING';

export function king(toSquare) {
    return {
        type: KING,
        toSquare
    }
}

export default king;