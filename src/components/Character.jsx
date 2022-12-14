import React, { useState } from "react";
import ImgModal from "./ImgModal";

export const Character = ({ character }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="text-center p-5 ">
        <h3>{character.name}</h3>
        <a className="images" onClick={handleShow}>
          <img
            className="img-fluid rounded-pill"
            src={character.image}
            alt={character.name}
          />
        </a>
        <h5>origin: {character.origin.name}</h5>
        <div className="container-row">
          {character.status == "Alive" ? (
            <p>
              Status: <span className="alive"> {character.status}</span>
            </p>
          ) : (
            <p>
              Status: <span className="dead"> {character.status}</span>
            </p>
          )}
        </div>
      </div>
      <ImgModal
        show={show}
        handleClose={handleClose}
        image={character.image}
        name={character.name}
      />
    </>
  );
};
