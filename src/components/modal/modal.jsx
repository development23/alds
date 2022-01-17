import ReactPlayer from "react-player";

export default function Modal({ open, close, link }) {
  return (
    <>
      {open ? (
        <>
          <div className="justify-center items-center flex  overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none p-5">
            <div className="h-full">
              <button
                className="bg-red-600 z-20 absolute top-14 rounded-full w-12 h-12"
                style={{ right: 5 }}
                onClick={() => close({ open: false })}
              >
                <p className="text-white font-bold text-xl">x</p>
              </button>
            </div>

            <div className="relative flex-auto w-auto aspect-w-4 aspect-h-4  md:aspect-w-12 md:aspect-h-5">
              <ReactPlayer
                url={link}
                width="100%"
                height="100%"
                controls={true}
              />
              {/* <iframe
                width="100%"
                height="450"
                src={link}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe> */}
            </div>
            {/*footer*/}
          </div>
          <div
            className="opacity-25 fixed inset-0 z-40 bg-red-900 w-full h-full"
            onClick={() => close({ open: false })}
          ></div>
        </>
      ) : null}
    </>
  );
}
