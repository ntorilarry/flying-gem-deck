import Modal from "../../../components/Modal";

const ChallengeModal = ({ open, onClose, data }) => {
  return (
    <div>
      {" "}
      <Modal open={open} onClose={onClose} title="">
        <p>{data?.name}</p>
      </Modal>
    </div>
  );
};

export default ChallengeModal;
