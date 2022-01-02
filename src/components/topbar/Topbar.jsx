import "./topbar.scss";
import { Person, Mail, PictureAsPdf } from "@material-ui/icons"; // import Person and Mail material-ui icons (refer to the material-ui icons website)

import { useHistory } from "react-router-dom";

export default function Topbar({ isOpen, setOpen }) {

    const history = useHistory();

    const handleHomeClick = () => {
        history.push("/");
    };

    return (
        <div className={"topbar " + (isOpen && "active")}> {/* "topbar " + (open && "active") means that if isOpen is true, then append topbar to active. NOTE THAT THERE IS A SPACE AFTER "topbar". */}
            <div className="wrapper">
                <div className="left">



                    <div className="hamburger" onClick={() => setOpen(!isOpen)}>
                        {/* this means that set setOpen to the opposite of what value it had before, basically toggle!*/}
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                    <div className="itemContainer">
                        <a href="tel:+16478624460" id="topbarLink"><Person className="icon" />
                            <span>+1 647-862-4460</span></a>
                    </div>
                    <div className="itemContainer">
                        <a href="mailto:shashwat.doshi@mail.utoronto.ca" target="_blank" id="topbarLink" rel="noreferrer"><Mail className="icon" />
                            <span>shashwat.doshi@mail.utoronto.ca</span></a>
                    </div>
                    <div className="itemContainer">
                        <a href="https://drive.google.com/file/d/1Vf82NTTNe0NpZNjhx1ZybkfnnS8P8xXF/view?usp=sharing" target="_blank" id="topbarLink" rel="noreferrer"><PictureAsPdf className="icon" />
                            <span>Resume</span></a>
                    </div>
                </div>
                <div className="right">
                    {/* <div className="itemContainer">
                        <a href="https://github.com/shashwat-doshi" id="topbarLink"><GitHub className="icon"/>
                        <span>Github</span></a>
                    </div> */}
                    { /* eslint-disable-next-line */}
                    <a onClick={handleHomeClick} className="logo">SD</a> {/* referring by id */}
                </div>
            </div>
        </div>
    )
}
