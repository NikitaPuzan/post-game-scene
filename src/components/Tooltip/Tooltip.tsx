import React, {useEffect, useRef} from 'react';
import './css/tooltip.css'

interface ITooltipProps {
    kills: number,
    death: number,
    isOpen: boolean,
    onClose: () => void
}

const Tooltip: React.FC<ITooltipProps> = ({kills, death, isOpen, onClose}) => {
    const tooltipRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const handleClickOutside = (event: any ) => {
            if (tooltipRef.current && !tooltipRef.current?.contains(event.target as Node)) {
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

