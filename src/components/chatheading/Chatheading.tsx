import React from 'react'


interface SidebarProps {
  chatname:string
}
const Chatheading: React.FC<SidebarProps> = ({chatname }) => {

  return (
    <div className="row heading">
    <div className="col-sm-2 col-md-1 col-xs-3 heading-avatar">
      <div className="heading-avatar-icon">
        <img src="https://assets.codepen.io/585692/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1552803131&width=512" />
      </div>
    </div>
    <div className="col-sm-8 col-xs-7 heading-name">
      <a className="heading-name-meta">{chatname}</a>
      <span className="heading-online">Online</span>
    </div>
    <div className="col-sm-1 col-xs-1  heading-dot pull-right">
      <i className="fa fa-ellipsis-v fa-2x  pull-right" aria-hidden="true" />
    </div>
  </div>
  
  
  )
}

export default Chatheading