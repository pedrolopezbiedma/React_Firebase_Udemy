import './Modal.css';

export default function Modal({children, toggleModal, isSalesModal}) {
  return (
    <div className='modal-backdrop'>
        <div className="modal" style={{
            border: "4px solid",
            borderColor: isSalesModal ? "#ff4500" : "#555",
            textAlign:"center"
          }}>
            {children}
            <button className={isSalesModal ? "sales-btn" : ""} onClick={toggleModal}>Close</button>
        </div>
    </div>
  )
}
