import React, {useEffect} from "react";
import "./Modal.css";


const Modal = (props, {ifOnlyStocks}) => {

    if (!props.show) {
        return null
    }

    return ( 
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <div className="modal-title">
                        <p>
                            If you had only invested in ...
                            
                        </p>
                    </div>
                    <div className="modal-body">
                        <p>Buying</p>
                        <p>Selling</p>

                        
                    </div>
                    <div className="modal-footer">
                        <button onClick ={props.onClose} className="button">Close</button>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Modal;