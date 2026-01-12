import { LuMail } from "react-icons/lu";
import { SiTelegram, SiWhatsapp } from "react-icons/si";
import CV from "../content/documents/Elemi_Samuel_CV_v2.pdf";
export const CaCv = () => {
  return (
    <>
      {" "}
      <div className="Bbtn">
        <div className="txt">
          <p>Chat with me.</p>
        </div>
        <div className="btns">
          <a href="https://t.me/elemzzzzzz" target="_blank" className="Btlg">
            <button>
              <SiTelegram />
            </button>
          </a>

          <a
            href="mailto:elemisamuel77@gmail.com"
            target="_blank"
            className="Bml"
          >
            <button>
              <span>
                <LuMail />
              </span>
            </button>
          </a>
          <a href="https://wa.me/8166149748" target="_blank" className="WhAp">
            <button>
              <span>
                <SiWhatsapp />{" "}
              </span>
            </button>
          </a>
        </div>
      </div>
      <div className="CvDl" id="cv">
        {/* Download my CV */}
        <a href={CV} className="CvBtn" download>
          <button>
            <p>CV</p>
          </button>
        </a>
      </div>
    </>
  );
};
