type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
};

const Modal = ({ open, onClose, children }: ModalProps) => {
  if (!open) return null;

  return (
    <>
      <div
        className="justify-center my-4 lg:my-10 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
        onClick={onClose}
      >
        <div
          className="relative w-auto my-6 mx-auto max-w-5xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/*content*/}
          <div className="bg-white border border-gray-200 shadow">
            <div className="">
              <div className="mb-3 font-normal text-gray-700">{children}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default Modal;
