const About = () => {
    return (
        <div data-aos="fade-left" className="w-full bg-[#201E43] md:py-24 py-16 px-6 flex justify-center items-center rounded-3xl text-white relative">
            <div className="max-w-5xl w-full">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-sm uppercase text-gray-300 tracking-wider mb-2">
                        About Developer Information
                    </p>
                    <h1 className="text-4xl font-bold text-white">
                        Get to Know the Developer
                    </h1>
                </div>

                {/* Main Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white/10 backdrop-blur-lg shadow-lg rounded-lg border-2 border-white/20 md:p-12 p-6">
                    {/* Left Side */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-left">
                        <img
                            src="https://lh3.googleusercontent.com/a/ACg8ocKp4iu-jj162LEPwVUYKrK4QjLT-2TyryBdsox81-N7BDWZbwdG=s96-c"
                            alt="Mahinul Tanvir Mahin"
                            className="w-40 h-40 rounded-full border-4 border-white mb-6"
                        />
                        <h1 className="text-4xl font-bold mb-4">
                            Mahinul Tanvir Mahin
                        </h1>
                        <p className="text-lg leading-7 mb-4">
                            I am a passionate learner currently pursuing a Bachelor of Science in Computer Science and Engineering at 
                            <strong> Leading University</strong>. I am deeply interested in web development and creating innovative digital solutions.
                        </p>
                        <h2 className="text-2xl font-bold mb-2">Education</h2>
                        <p className="text-lg leading-7">
                            <strong>Leading University</strong> <br />
                            Bachelor of Science in Computer Science and Engineering (Ongoing)
                        </p>
                    </div>

                    {/* Right Side */}
                    <div className="flex flex-col">
                        <h2 className="text-2xl font-bold mb-4">Skills</h2>
                        <ul className="list-disc list-inside text-lg leading-7 mb-8">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                        </ul>

                        <h2 className="text-2xl font-bold mb-4">Projects</h2>
                        <ul className="list-disc list-inside text-lg leading-7 space-y-3">
                            <li>
                                <strong>Selected Player:</strong>{" "}
                                <a
                                    href="https://grateful-cactus.surge.sh/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 underline hover:text-blue-600"
                                >
                                    Live Link
                                </a>{" "}
                                - A fun app where users can create and manage custom teams.
                            </li>
                            <li>
                                <strong>Gadget Heaven:</strong>{" "}
                                <a
                                    href="https://giddy-engine.surge.sh/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 underline hover:text-blue-600"
                                >
                                    Live Link
                                </a>{" "}
                                - An e-commerce platform for browsing and purchasing gadgets.
                            </li>
                            <li>
                                <strong>Bus Ticket Website:</strong>{" "}
                                <a
                                    href="https://tanvirmain49.github.io/Bus-ticket/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 underline hover:text-blue-600"
                                >
                                    Live Link
                                </a>{" "}
                                - A simple, user-friendly platform for booking bus tickets.
                            </li>
                            <li>
                                <strong>Mega Website:</strong>{" "}
                                <a
                                    href="https://tanvirmain49.github.io/Maga-website/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-400 underline hover:text-blue-600"
                                >
                                    Live Link
                                </a>{" "}
                                - A large-scale application offering multiple functionalities.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
