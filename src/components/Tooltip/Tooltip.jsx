import React, {useEffect, useRef} from 'react';
import './css/tooltip.css'

const Tooltip = ({kills, death, isOpen, onClose}) => {
    const tooltipRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
                onClose();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen, onClose]);

    return (
        <div className="tooltip-text" ref={tooltipRef}>
            <p>
                Total kills: {kills}
            </p>
            <p>
                Total death: {death}
            </p>
        </div>
    );
};

export default Tooltip;

