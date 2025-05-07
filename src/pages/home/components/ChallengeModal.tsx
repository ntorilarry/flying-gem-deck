import Modal from "../../../components/Modal";

const ChallengeModal = ({ open, onClose, data }) => {
  return (
    <div>
      {" "}
      <Modal open={open} onClose={onClose}>
        <div className="relative overflow-hidden bg-cover bg-no-repeat">
          <video
            className="w-full h-full object-cover pointer-events-none transition-all duration-300 transform group-hover:scale-125"
            src={data?.video}
            muted
            loop
            autoPlay
            playsInline
            controls={false}
          />
        </div>
        <div className="flex justify-between p-5 lg:p-10 sm:text-left">
          <div>
            <p className="text-lg font-bold">{data?.title}</p>
            <p className="mb-4  text-sm font-semibold text-gray-800">
              {data?.subTitle}
            </p>

            {data?.experience && (
              <>
                <h1 className="text-base font-bold mb-2">
                  Flying-Gem Experience:
                </h1>
                <p className="mb-4  text-sm font-normal text-gray-800">
                  {data?.experience}
                </p>
              </>
            )}
            {data?.outcome && (
              <>
                <h1 className="text-base font-bold mb-2">Outcome:</h1>
                {data?.outcome?.map((item, index) => (
                  <p
                    key={index}
                    className="mb-1  text-sm font-normal text-gray-800"
                  >
                    - {item?.point}
                  </p>
                ))}
              </>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ChallengeModal;
