interface IconButtonProps {
    id: string;
    isActive: boolean;
    onClick: () => void;
    children: React.ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({ id, isActive, onClick, children }) => (
    <button 
        type="button" 
        id={id} 
        className={`flex items-center justify-center size-[37.5px] p-0 text-sky-500 btn bg-sky-100 hover:text-white hover:bg-sky-600 focus:text-white focus:bg-sky-600 [&.active]:text-white [&.active]:bg-sky-600 dark:bg-sky-500/20 dark:text-sky-400 dark:hover:bg-sky-500 dark:hover:text-white dark:focus:bg-sky-500 dark:focus:text-white dark:[&.active]:bg-sky-500 dark:[&.active]:text-white dark:ring-sky-400/20 ${isActive ? "active" : ""}`} 
        onClick={onClick}
    >
        {children}
    </button>
);


export default IconButton;