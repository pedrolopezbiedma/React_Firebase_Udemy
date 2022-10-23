import './Modal.css';

export default function Modal({children, toggleModal}) {
  return (
    <div className='modal-backdrop'>
        <div className="modal">
            {children}
            <button onClick={toggleModal} >Close</button>
        </div>
    </div>
  )
}
