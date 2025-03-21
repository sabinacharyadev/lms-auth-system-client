import { add } from "date-fns";
import { useState } from "react";
import { Button, ButtonGroup, Modal, ToggleButton } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { createBorrowAction } from "../redux/burrow/burrowAction";

const BorrowBookModal = (props) => {
  const { showModal, setShowModal } = props;
  const [borrowDays, setBorrowDays] = useState(7);

  const { user } = useSelector((state) => state.user);
  const { book } = useSelector((state) => state.book);

  const dispatch = useDispatch();

  // Handle on burrow book click
  const handleOnClick = () => {
    // Build borrow book object/payload to be sent to API
    const borrowObject = {
      book_id: book._id,
      book_name: book.title,
      user_id: user._id,
      user_name: user.name,
      due_date: add(new Date(), { days: borrowDays }),
    };
    // Dispatch borrow book action
    dispatch(createBorrowAction(borrowObject));

    setShowModal(false);
  };

  return (
    <Modal
      show={showModal}
      onHide={() => setShowModal(false)}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Borrow Book</Modal.Title>
      </Modal.Header>

      <Modal.Body className="mx-auto">
        <ButtonGroup>
          <ToggleButton
            key={7}
            id={7}
            type="radio"
            name="radio"
            variant="outline-info"
            checked={borrowDays === 7}
            value={7}
            onChange={(e) => setBorrowDays(Number(e.currentTarget.value))}
          >
            1 Week
          </ToggleButton>

          <ToggleButton
            key={14}
            id={14}
            type="radio"
            name="radio"
            variant="outline-primary"
            checked={borrowDays === 14}
            value={14}
            onChange={(e) => setBorrowDays(Number(e.currentTarget.value))}
          >
            2 Weeks
          </ToggleButton>

          <ToggleButton
            key={21}
            id={21}
            type="radio"
            name="radio"
            variant="outline-success"
            checked={borrowDays === 21}
            value={21}
            onChange={(e) => setBorrowDays(Number(e.currentTarget.value))}
          >
            3 Weeks
          </ToggleButton>

          <ToggleButton
            key={28}
            id={28}
            type="radio"
            name="radio"
            variant="outline-danger"
            checked={borrowDays === 28}
            value={28}
            onChange={(e) => setBorrowDays(Number(e.currentTarget.value))}
          >
            4 Weeks
          </ToggleButton>
        </ButtonGroup>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-success" onClick={handleOnClick}>
          Burrow Now
        </Button>

        <Button variant="outline-danger" onClick={() => setShowModal(false)}>
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BorrowBookModal;
