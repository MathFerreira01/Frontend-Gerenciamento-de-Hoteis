interface PropsModal {
  showModal: boolean;
  togleModal: () => void;
}

export function Modal({ showModal, togleModal }: PropsModal) {
  if (!showModal) {
    return null;
  }
  return (
    <main className="flex flex-col items-center justify-center h-full w-full m-auto">
      <div className="modal max-w-md mx-auto xl:max-w-5xl lg:max-w-5xl md:max-w-2xl bg-white max-h-screen shadow-lg flex-row rounded relative">
        <div className="modal-header p-5 bg-gray-900 text-gray-900 rounded-t">
          <h5 className="text-white text-2xl uppercase">this is header</h5>
        </div>
        <div className="modal-body p-5 w-full h-full overflow-y-auto ">
          <p className="text-justify">
            cilis omnis nam illum maiores, porro velit deserunt neque. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Esse, voluptates
            eveniet labore dolorum molestiae, modi saepe fugiat minima
            repudiandae repellendus obcaecati voluptatibus ab tenetur recusandae
            eius quos at maiores atque consectetur facilis! Nisi fuga
          </p>
        </div>
        <div className="modal-footer py-3 px-5 border0-t text-right">
          <button
            onClick={togleModal}
            className="bg-green-500 px-5 py-2 text-white"
          >
            OK
          </button>
        </div>
      </div>
    </main>
  );
}
