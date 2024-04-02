const tileColourLogic = (i, j,boardGameMatrix) => {
    if (i === -5 || j === -5) {
      if (
        boardGameMatrix[i + 5][j + 5]?.length === 0 &&
        (boardGameMatrix[i + 6][j + 5]?.length > 0 ||
          boardGameMatrix[i + 5][j + 6]?.length > 0 || 
          boardGameMatrix[i + 5][j + 4]?.length > 0 )
      ) {
        return 0x32cd32;
      } else {
        return 0xffffff;
      }
    } else if (
      boardGameMatrix[i + 5][j + 5]?.length === 0 &&
      (boardGameMatrix[i + 4][j + 5]?.length > 0 ||
        boardGameMatrix[i + 5][j + 4]?.length > 0 ||
        boardGameMatrix[i + 6][j + 5]?.length > 0 ||
        boardGameMatrix[i + 5][j + 6]?.length > 0)
    ) {
      //   console.log('i am here');
      return 0x32cd32;
    } else {
     
      // does not colour all cells?
      return 0xc3c3c3;
    }
  };
  export default tileColourLogic