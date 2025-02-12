import { useEffect } from "react";

interface ToastProps {
    message: string;
    show: boolean;
    onClose: () => void;
    toastColor?: string;
}

const Toast = ({ message, show, onClose, toastColor }: ToastProps) => {
    useEffect(() => {
        if (show) {
            const timer = setTimeout(onClose, 3000);
            return () => clearTimeout(timer);
        }
    }, [show, onClose]);

    return (
        <div
            className={`fixed top-5 right-5 px-4 py-3 rounded-lg shadow-lg ${toastColor} text-white transition-transform duration-300 ${show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
        >
            {message}
        </div>
    );
};

export default Toast;
