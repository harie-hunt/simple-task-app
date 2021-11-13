import {} from "react";
import { useTaskContext } from "../contexts/TaskContext";
import { SvgQuestionCircleOutline } from "./Svgs";

const DialogConfirm = () => {
  const { dialogConfirm, setDialogConfirm } = useTaskContext();

  function handleClick(choice) {
    setDialogConfirm((cur) => ({ ...cur, isDelete: choice }));
  }

  return (
    <>
      {dialogConfirm && (
        <section className="absolute z-10 top-0 left-0 w-full min-h-screen bg-gray-900 bg-opacity-50">
          <div className="bg-white mt-10 mx-10 p-4 text-center rounded-lg">
            <div className="w-1/4 mx-auto text-yellow-400">
              <SvgQuestionCircleOutline />
            </div>

            <div>Apakah yakin akan menghapus ?</div>

            <div className="text-sm font-sans">Title :</div>

            <div className="text-xl font-semibold my-2">
              {dialogConfirm.title}
            </div>

            <div className="flex justify-evenly mt-6">
              <button
                className="bg-blue-500 hover:bg-blue-700 px-4 py-1 rounded-sm text-white focus:ring-1 focus:ring-yellow-500"
                onClick={() => handleClick(true)}
              >
                Yakin
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-700 px-4 py-1 rounded-sm text-white focus:ring-1 focus:ring-yellow-500"
                onClick={() => handleClick(false)}
              >
                Batal
              </button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default DialogConfirm;
