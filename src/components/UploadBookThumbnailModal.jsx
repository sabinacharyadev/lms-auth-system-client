import { Offcanvas } from "react-bootstrap";
import UploadBookThumbnailForm from "./UploadBookThumbnailForm";

const UploadBookThumbnail = (props) => {
  const { showModal, setShowModal, selectedBookId } = props;

  return (
    <Offcanvas
      show={showModal}
      onHide={() => setShowModal(false)}
      placement="end"
      backdrop="static"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Update Thumbnail</Offcanvas.Title>
      </Offcanvas.Header>

      <Offcanvas.Body>
        {/* Form to add thumbnail */}
        <UploadBookThumbnailForm
          setShowModal={setShowModal}
          selectedBookId={selectedBookId}
        />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default UploadBookThumbnail;
