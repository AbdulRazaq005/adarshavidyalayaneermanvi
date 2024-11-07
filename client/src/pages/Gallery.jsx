import React, { useState } from "react";

export default function Gallery({ gallery }) {
  const [previewIdx, setpreviewIdx] = useState(0);
  function preview(idx) {
    setpreviewIdx(idx);
    var prev = document.getElementsByClassName("gallery-img-preview")[0];
    prev.style.visibility = "visible";
  }
  function closePreview() {
    var prev = document.getElementsByClassName("gallery-img-preview")[0];
    prev.style.visibility = "hidden";
  }

  return (
    <div className="position-relative m-0 p-0 bg-dark h-100 w-100">
      <div className="gallery-img-preview">
        <img src={gallery[previewIdx].src} alt="" />

        <h1
          className="btn close-btn text-light py-2 px-4"
          onClick={closePreview}
        >
          X
        </h1>
        <div className="preview-nav-btn-container">
          <h3
            className="btn prev-btn text-light py-2 px-4 mx-1"
            onClick={() => {
              if (previewIdx === 0) setpreviewIdx(gallery.length - 1);
              else setpreviewIdx(previewIdx - 1);
            }}
          >
            Prev
          </h3>
          <h3
            className="btn next-btn text-light py-2 px-4 mx-1"
            onClick={() => {
              setpreviewIdx((previewIdx + 1) % gallery.length);
            }}
          >
            Next
          </h3>
        </div>
      </div>
      <div className="gallery-container row pt-4 pb-4 m-0 ">
        {gallery.map((image, idx) => {
          return (
            <div
              className="gallery-img"
              key={idx}
              onClick={() => {
                preview(idx);
              }}
            >
              <img src={image.src} alt="images" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
