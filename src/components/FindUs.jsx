import { PiInstagramLogoBold } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { TbBrandWhatsapp } from "react-icons/tb";

const FindUs = () => {
    return (
        <div>
             <h2 className="font-semibold mb-3">Find Us On </h2>
             <div className="join flex join-vertical">
                <a href="https://www.facebook.com/abdullah.al.suhaimee.2024" target="_blank" rel="noopener noreferrer">
                    <button className="btn join-item justify-start">
                        <FaFacebookF /> Facebook
                    </button>
                </a>
                <a href="https://www.instagram.com/yananajib/?hl=en" target="_blank" rel="noopener noreferrer">
                    <button className="btn join-item justify-start">
                        <PiInstagramLogoBold /> Instagram
                    </button>
                </a>
                <a href="https://wa.me/01645351992" target="_blank" rel="noopener noreferrer">
                    <button className="btn join-item justify-start">
                        <TbBrandWhatsapp /> Whatsapp
                    </button>
                </a>
            </div>
        </div>
    );
};

export default FindUs;
