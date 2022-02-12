import './Board.css'

const horizontalAxis = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
const verticalAxis = [1, 2, 3, 4, 5, 6, 7, 8]

function Board() {
    return ( 
        <div className="board">
            { horizontalAxis.map((file, i) => {
                verticalAxis.map((rank, i) => (
                    <div className={`${file + rank} tile`}>1</div>
                ))
            })}
        </div>
    );
}

export default Board;
