import { useEffect, useRef, useState } from "react";

export default function ImageUploader(prodName, { defaultImage }) {
  const dropbox = useRef(null);
  const fileSelect = useRef(null);
  const [image, setImage] = useState(defaultImage);
  const [progress, setProgress] = useState(0);

  async function handleImageUpload() {
    if (fileSelect) {
      fileSelect.current.click();
    }
  }

  function handleFiles(files) {
    for (let i = 0; i < files.length; i++) {
      uploadFile(files[i]);
    }
  }
// Function used to uplaod files
  function uploadFile(file) {
    const url = `https://api.cloudinary.com/v1_1/prestoncloud/upload`;
    const xhr = new XMLHttpRequest();
    const fd = new FormData();
    xhr.open("POST", url, true);
    xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

    // Update progress (can be used to show progress indicator)
    xhr.upload.addEventListener("progress", (e) => {
      setProgress(Math.round((e.loaded * 100.0) / e.total));
    });

    xhr.onreadystatechange = (e) => {
      if (xhr.readyState == 4 && xhr.status == 200) {
        const response = JSON.parse(xhr.responseText);

        setImage(response.secure_url);
      }
    };

    fd.append(
      "upload_preset",
    "zp65iguw"
    );
    fd.append("tags", "browser_upload");
    fd.append("file", file);
    fd.append("api_key", "518654398293358");
    fd.append("public_id", prodName.prodName)
    xhr.send(fd);
  }

  function handleCancel() {
    setImage(null);
  }

  function handleSave() {
    alert(image);
  }

  useEffect(() => {
    function dragEnter(e) {
      e.stopPropagation();
      e.preventDefault();
    }

    function dragOver(e) {
      e.stopPropagation();
      e.preventDefault();
    }

    function drop(e) {
      e.stopPropagation();
      e.preventDefault();

      const dt = e.dataTransfer;
      const files = dt.files;

      handleFiles(files);
    }

    dropbox.current.addEventListener("dragenter", dragEnter, false);
    dropbox.current.addEventListener("dragover", dragOver, false);
    dropbox.current.addEventListener("drop", drop, false);

    return () => {
      dropbox.current.removeEventListener("dragenter", dragEnter);
      dropbox.current.removeEventListener("dragover", dragOver);
      dropbox.current.removeEventListener("drop", drop);
    };
  }, []);

  return (
    <div ref={dropbox}>
    {image ? (
      <>
        <img
          className="rounded-lg"
          src={image.replace("upload/", "upload/w_600/")}
          style={{ height: 400, width: 600 }}
        />
       
      </>
    ) : (
      <div
        className="bg-gray-200 border-4 border-dashed border-gray-400 rounded-lg"
        style={{ height: 400, width: 600 }}
      >
       
          {progress === 0 ? (
            <div className="text-gray-700 text-center" style={{borderStyle: "dotted", width: "25%", justifyContent: "center", alignItems: "center", position: "fixed", margin: "10% auto"}}>
              <div>Drag and Drop assets here</div>
              <div className="my-2">or</div>
              <button
                className="bg-blue-600 hover:bg-blue-800 text-white font-bold px-4 py-2 rounded block m-auto"
                onClick={handleImageUpload}
                type="button"
              >
                Browse
              </button>
            </div>
          ) : (
            <span className="text-gray-700">{progress}%</span>
          )}

          <input
            ref={fileSelect}
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => handleFiles(e.target.files)}
          />
        
      </div>
    )}
  </div>
  );
}