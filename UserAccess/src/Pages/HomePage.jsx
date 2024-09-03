import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "../Components/style/Designs/homeapp.css";
import Fab from "@mui/material/Fab";
import MeetingRoomIcon from "@mui/icons-material/MeetingRoom";
import { useNavigate } from "react-router-dom";

const AvailableMeetings = () => {
  const navigate = useNavigate();
  const [sessionExpired, setSessionExpired] = useState(false);

  
  return (
    <div className="trainer_section layout_padding">
      <div className="container">
        <div className="t_s_s_1">
          <h2>WELCOME TO</h2>
          <h2>PRODIGY INFOTECH</h2>
        </div>
        <div className="t_s_s" style={{color:"#ffff"}}>
          <h2> TIME TO MAKE THE MOST OF  </h2>
          <h2> THIS EXCITING INTERNSHIP </h2>
        </div>

        <div className="t_s_s_2" style={{ paddingLeft: "30%" }}>
          
          <td style={{ paddingLeft: "1dvb" }}>
            <Fab
              variant="extended"
              className="click"
              sx={{
                backgroundColor: "#CD5C5B",
              }}
              href="/sign-in"
            >
              <h2> logout </h2>
              <MeetingRoomIcon sx={{ ml: 1, fontSize: "DensityLarge" }} />
            </Fab>
          </td>
        </div>
      </div>
    </div>
  );
};

const HomeView = () => {
  return (
    <div className="sub_page">
      <div className="hero_area">
        <header className="header_section">
          <div className="container-fluid">
          </div>
        </header>
      </div>

      <AvailableMeetings />
    </div>
  );
};

export default HomeView;
