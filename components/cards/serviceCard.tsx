interface ServiceCardProps {
    title: string;
    description: string;
    icon?: React.ReactNode;
}
const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
    return (
        <div className="relative flex flex-col  justify-between p-6 lg:p-10 w-full max-w-md h-72 bg-black/20 backdrop-blur-2xl rounded-2xl text-white shadow-lg hover:bg-black/50 transition">
            <div>
                <h3 className="text-2xl font-semibold">
                    {title.split(" ")[0]} <br /> <span className="font-bold">{title.split(" ").slice(1).join(" ")}</span>
                </h3>
                <p className="text-md text-gray-300 mt-3">{description}</p>
            </div>
            <div className="flex justify-start items-center mt-4">
                {icon}
            </div>
        </div>
    );
};

export default ServiceCard;
