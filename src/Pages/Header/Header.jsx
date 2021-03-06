import React from "react";

import Navbar from "../../Components/Navbar";
import "../Header/header.css";

function Header() {
  let api =
    "https://graph.facebook.com/v12.0/me?fields=id%2Cname%2Cfeed.limit(5)%7Bcreated_time%2Cfull_picture%2Cdynamic_posts%2Cdescription%2Cpermalink_url%7D&access_token=EAAJbhPecCokBAKuMwerkTAllLSs2uMeEpVnZAyBxazZAzkZC83ub7lcujxhbmZAFDhZBn7kIfW7WGPKQ5YiuaudZAuuByXNAiOUKGFS1t2CPIhcuxrbFxvUqZB4VhA5YNgpUWsIinUTAZCw8tErcZATv90WMOvBvBRhSD4h7F2gg63NDAOZBHHGtQnvOZCTA4FCBYgIRZAhc7ahFC2pdOgxuvqkN";
  const start = async function () {
    const jsondata = await fetch(api)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.feed.data)
        return JSON.stringify(data);
      });
      console.log(jsondata);
    return JSON.parse(jsondata);
  };
  
  var t = start();
  console.log(t.json);

  return (
    <header className="header-container" id="home">
      <Navbar />
      <div className="text-wrapper">
        <h2 className="hello">Hello...</h2>
        <h1 className="name">I'm Yuri Baptista</h1>
        <h3 className="profession">
          Web Front-end Developer & Profesional Makeup Artist
        </h3>
      </div>
      <div className="icon-wrapper">
        <a
          href="https://github.com/yuritalinda"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="icon"
            src="https://i.postimg.cc/PxQRmbTp/github.png"
            alt="github-icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/yuritalinda/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="icon"
            src="https://i.postimg.cc/d3QSn7VW/linkedin.png"
            alt="linkedin-icon"
          />
        </a>
      </div>

      <div className="header-img">
        <img
          src="https://i.postimg.cc/Jh0X3ZJ6/header-img.png"
          alt=""
          srcset=""
        />
      </div>
    </header>
  );
}

export default Header;
