import React from "react";
import Modal from "react-bootstrap/Modal";

const ImgModal = ({ show, handleClose, image, name }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="p-0" >

    <img src={image} alt={name} className="w-100"/>
      </Modal.Body>
     
    </Modal>
  );
};

export default ImgModal;
