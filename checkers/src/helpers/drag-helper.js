import moveChecker from '../store/actions/move-checker'
// import {
//     isDiagonalSquare,
//     isDiagonalJumpSquare,
//     isForward,
//     isNewSquareOccupied,
//     isIntermediateSquareOccupiedByOpponent
// } from "./helpers/square-helper";
import { connect } from 'react-redux'

// export function canMove(chipColor, chips, fromSquare, toSquare) {
//     //if it's a forward diagonal move 
//     //to an unoccupied square it's good
//     if (isDiagonalSquare(fromSquare, toSquare) &&
//         !isNewSquareOccupied(chips, toSquare) &&
//         isForward(chipColor, fromSquare, toSquare)) {
//         return true;
//     }

//     //if it's a forward diagonal jump move over 
//     //an opponent to an unoccupied square it's good
//     if (isDiagonalJumpSquare(fromSquare, toSquare) &&
//         isIntermediateSquareOccupiedByOpponent(chips, chipColor, fromSquare, toSquare) &&
//         !isNewSquareOccupied(chips, toSquare) &&
//         isForward(chipColor, fromSquare, toSquare)) {
//         return true;
//     }

//     return false;
// }

// export function move(fromSquare, toSquare, checkerType, props) {
//     debugger
//     props.moveChecker(fromSquare, toSquare, checkerType);
// }

// export default connect(
//     null,
//     { moveChecker }
// )(move);