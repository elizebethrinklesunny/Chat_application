import React from 'react';
import { conversationType } from '../../App';



interface SidebarProps {
  searchdata: conversationType[];
  setchatname:(data: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ searchdata,setchatname }) => {
  return (
    <div className="row sideBar">
      {searchdata && searchdata.map((conversation, index) => (
        <div className="row sideBar-body" key={index} onClick={()=>{setchatname(conversation.name)}} >
          <div className="col-sm-3 col-xs-3 sideBar-avatar">
            <div className="avatar-icon">
              <img src={conversation.avatar} alt="avatar" />
            </div>
          </div>
          <div className="col-sm-9 col-xs-9 sideBar-main">
            <div className="row">
              <div className="col-sm-8 col-xs-8 sideBar-name">
                <span className="name-meta">{conversation.name}</span>
              </div>
              <div className="col-sm-4 col-xs-4 pull-right sideBar-time">
                <span className="time-meta pull-right">{conversation.time}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
