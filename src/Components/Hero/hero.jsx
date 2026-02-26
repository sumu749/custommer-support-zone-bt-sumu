import vector from "../../assets/vector1.png";

const Hero = () => {
    return (
        <section className="max-w-400 mx-auto flex items-center justify-center p-4 mt-20">
            <div className="grid grid-cols-2 sm:flex-row items-center justify-center sm:gap-16">
                {/* In-Progress Card */}
                <div
                    className="w-190 h-50 flex flex-col items-center justify-center text-center rounded-xl shadow-lg bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(135deg, rgba(147, 51, 234, 0.9), rgba(88, 28, 135, 0.9)), url(${vector})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="text-white text-xl font-semibold">
                        In-Progress
                    </div>
                    <div className="text-white text-6xl font-bold mt-4">0</div>
                </div>

                {/* Resolved Card */}
                <div
                    className="w-190 h-50 flex flex-col items-center justify-center text-center rounded-xl shadow-lg bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(135deg, rgba(34, 197, 94, 0.9), rgba(13, 148, 136, 0.9)), url(${vector})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="text-white text-xl font-semibold">
                        Resolved
                    </div>
                    <div className="text-white text-6xl font-bold mt-4">0</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
