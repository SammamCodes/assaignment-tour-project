import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";

const SocailLogin = () => {
    return (
        <div>
            <h2 className="font-semibold mb-3">Subscribe On</h2>
            <div className="w-full space-y-2">
                {/* YouTube Button */}
                <a
                    href="https://youtu.be/yVrx3wz0440?si=qWDKxia3gwwED7aY"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="btn flex items-center space-x-2">
                        <FaGoogle />
                        <span>YouTube</span>
                    </button>
                </a>

                {/* GitHub Button */}
                <a
                    href="https://github.com/SammamCodes"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="btn flex items-center space-x-2">
                        <FaGithub />
                        <span>Github</span>
                    </button>
                </a>
            </div>
        </div>
    );
};

export default SocailLogin;
