import { PiInstagramLogoBold } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { TbBrandWhatsapp } from "react-icons/tb";
const FindUs = () => {
    return (
        <div>
             <h2 className="font-semibold mb-3">Find Us On </h2>
             <div className="join flex join-vertical">
  <button className="btn join-item justify-start"><FaFacebookF />Facebook</button>
  <button className="btn join-item justify-start"><PiInstagramLogoBold />Instagram </button>
  <button className="btn join-item justify-start"><TbBrandWhatsapp />Whatsapp </button>
</div>
        </div>
    );
};

export default FindUs;