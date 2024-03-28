// import type { Piece, PieceArgs } from './pieces'
// import { createPiece } from './pieces'
// import type { Pawn } from './pieces/pawn'
// import type { Rook } from './pieces/rook'

const postion = { x: number; y: number }

const board = Tile[][]

const tile = {
  position: position,
  type: "tileA"
}

 const createTile = (position, piece) => {
  return {
    position,
    piece: piece ? createpiece({ ...piece, piecePosition }) : null,
  }
}

const checkIfPositionsMatch = (
  startPosition,
  newPosition
) => {
    startPosition ? startPosition = position : startPosition = null,
    newPosition ? newPosition = position : newPosition = null
    if (!startPosition || !newPosition) return false
    return startPosition.x === newPosition.x && startPosition.y === newPosition.y
}

const copyBoard = (board) => {
  return [
    ...board.map((row) => {
      return [
        ...row.map((tile) => {
          return { ...tile, piece: tile.piece ? { ...tile.piece } : null }
        }),
      ]
    }),
  ]
}

const createBoard = () => {
  const DEFAULT_BOARD = [
    [
      createTile(
        { x: 0, y: 0 },
        {
          color: `black`,
          id: 1,
          type: `rook`,
        },
      ),
      createTile(
        { x: 1, y: 0 },
        {
          color: `black`,
          id: 1,
          type: `knight`,
        },
      ),
      createTile(
        { x: 2, y: 0 },
        {
          color: `black`,
          id: 1,
          type: `bishop`,
        },
      ),
      createTile(
        { x: 3, y: 0 },
        {
          color: `black`,
          id: 1,
          type: `queen`,
        },
      ),
      createTile(
        { x: 4, y: 0 },
        {
          color: `black`,
          id: 1,
          type: `king`,
        },
      ),
      createTile(
        { x: 5, y: 0 },
        {
          color: `black`,
          id: 2,
          type: `bishop`,
        },
      ),
      createTile(
        { x: 6, y: 0 },
        {
          color: `black`,
          id: 2,
          type: `knight`,
        },
      ),
      createTile(
        { x: 7, y: 0 },
        {
          color: `black`,
          id: 2,
          type: `rook`,
        },
      ),
    ],
    [
      ...Array(8)
        .fill(null)
        .map((_, i) =>
          createTile(
            { x: i, y: 1 },
            {
              color: `black`,
              id: i + 1,
              type: `pawn`,
            },
          ),
        ),
    ],
    [
      ...Array(8)
        .fill(null)
        .map((_, i) => createTile({ x: i, y: 2 })),
    ],
    [
      ...Array(8)
        .fill(null)
        .map((_, i) => createTile({ x: i, y: 3 })),
    ],
    [
      ...Array(8)
        .fill(null)
        .map((_, i) => createTile({ x: i, y: 4 })),
    ],
    [
      ...Array(8)
        .fill(null)
        .map((_, i) => createTile({ x: i, y: 5 })),
    ],
    [
      ...Array(8)
        .fill(null)
        .map((_, i) =>
          createTile(
            { x: i, y: 6 },
            {
              color: `white`,
              id: i + 1,
              type: `pawn`,
            },
          ),
        ),
    ],
    [
      createTile(
        { x: 0, y: 7 },
        {
          color: `white`,
          id: 1,
          type: `rook`,
        },
      ),
      createTile(
        { x: 1, y: 7 },
        {
          color: `white`,
          id: 1,
          type: `knight`,
        },
      ),
      createTile(
        { x: 2, y: 7 },
        {
          color: `white`,
          id: 1,
          type: `bishop`,
        },
      ),
      createTile(
        { x: 3, y: 7 },
        {
          color: `white`,
          id: 1,
          type: `queen`,
        },
      ),
      createTile(
        { x: 4, y: 7 },
        {
          color: `white`,
          id: 1,
          type: `king`,
        },
      ),
      createTile(
        { x: 5, y: 7 },
        {
          color: `white`,
          id: 2,
          type: `bishop`,
        },
      ),
      createTile(
        { x: 6, y: 7 },
        {
          color: `white`,
          id: 2,
          type: `knight`,
        },
      ),
      createTile(
        { x: 7, y: 7 },
        {
          color: `white`,
          id: 2,
          type: `rook`,
        },
      ),
    ],
  ]
  return DEFAULT_BOARD
}

const testBoardArgs = {
  position: position,
  piece: piece
}

const createTestBoard = (testpieces) => {
  const board = [
    ...Array(8)
      .fill(null)
      .map((_, j) =>
        Array(8)
          .fill(null)
          .map((_, i) => createTile({ x: i, y: j })),
      ),
  ]

  for (const { position, testpiece } of testpieces) {
    board[position.y][position.x].testpiece = createpiece({ ...testpieces, position })
  }
  return board
}

// const TEST_EXAMPLES: { kingInCheck } = {
//   kingInCheck: [
//     {
//       position: { x: 7, y: 7 },
//       piece: {
//         color: `white`,
//         id: 1,
//         type: `king`,
//       },
//     },
//     {
//       position: { x: 7, y: 0 },
//       piece: {
//         color: `black`,
//         id: 1,
//         type: `king`,
//       },
//     },
//     {
//       position: { x: 5, y: 7 },
//       piece: {
//         color: `black`,
//         id: 1,
//         type: `queen`,
//       },
//     },
//     {
//       position: { x: 2, y: 7 },
//       piece: {
//         color: `white`,
//         id: 1,
//         type: `rook`,
//       },
//     },
//     {
//       position: { x: 0, y: 7 },
//       piece: {
//         color: `white`,
//         id: 1,
//         type: `queen`,
//       },
//     },
//   ],
// }
