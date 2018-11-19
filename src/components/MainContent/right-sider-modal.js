import React, { Component } from 'react';
import './modal.css'
class RightSliderModal extends Component {
    render() {
        return (
            <div className="slider-wrap">
                <div className="slider-modal-mask">
                </div>
                <div className="slider-modal">
                    <div className="slider-modal-header">
                         header
                    </div>
                    <div className="slider-modal-body">
                        body
                    </div>
                    <div className="slider-modal-footer">
                        footer
                    </div>
                </div>
            </div>
        );
    }
}

export default RightSliderModal;
