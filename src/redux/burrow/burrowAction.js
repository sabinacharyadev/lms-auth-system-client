// get user burrows
export const getBorrowsAction = () => async (dispatch) => {
  const result = await getBorrows();

  if (result?.status === "error") {
    return toast.error(result.message);
  }

  dispatch(setBorrows(result.data));
};

// create a burrow
export const createBorrowAction = (borrowObj) => async (dispatch) => {
  const result = await createBorrow(borrowObj);

  if (result?.status === "error") {
    return toast.error(result.message);
  }

  // Fetch Burrows again
  dispatch(getBorrowsAction(borrowObj.user_id));
  // if burrow is created for a book, fetch book again
  dispatch(getBookAction(borrowObj.book_id));
};
