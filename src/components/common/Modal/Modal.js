import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
import IconButton from "@mui/material/IconButton";
import { ModalInner, ModalOverlay, ModalWrapper } from "./Modal.styles";

function Modal({ onClose, maskClosable, closable, visible, children }) {
  const onMaskClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose(e);
    }
  };

  const close = (e) => {
    if (onClose) {
      onClose(e);
    }
  };

  return (
    <>
      <ModalOverlay visible={visible} />
      <ModalWrapper
        onClick={maskClosable ? onMaskClick : null}
        tabIndex="-1"
        visible={visible}
      >
        <ModalInner tabIndex="0" className="modal-inner">
          {closable && (
            <IconButton color="primary" size="small" onClick={close}>
              <ClearIcon fontSize="inherit" />
            </IconButton>
          )}
          {children}
        </ModalInner>
      </ModalWrapper>
    </>
  );
}

export default Modal;
