import { useEffect, useState } from 'react';
import './App.css';
import Chatspace from './components/Chatarea/Chatspace';
import Sidebar from './components/Chatsidebar/Sidebar';
import LeftHeader from './components/Leftsideheader/LeftHeader';
import Reply from './components/Reply/Reply';
import Search from './components/Search/Search';
import Chatheading from './components/chatheading/Chatheading';


export interface conversationType {
  name: string;
  avatar: string;
  time: string;
} 

function App() {


  const [inputMsg, setInputMsg] = useState('');
  const [searchdata ,setsearchdata] =useState<Array<conversationType>>([]);
  const [chatname,setchatname]=useState("")

  useEffect(()=>{
    setsearchdata(conversations)
    setchatname('Ankit Jain')
  },[])

  const conversations: Array<conversationType> = [
    {
      name: 'Ankit Jain',
      avatar: 'https://assets.codepen.io/585692/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1552803131&width=512',
      time: '18:18',
    },
    {
      name: 'Smitha',
      avatar: 'https://assets.codepen.io/585692/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1552803131&width=512',
      time: '21:18'
    },
    {
      name: 'Sunny',
      avatar: 'https://assets.codepen.io/585692/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1552803131&width=512',
      time: '10:01'
    },
    {
      name: 'Rinkle',
      avatar: 'https://assets.codepen.io/585692/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1552803131&width=512',
      time: '03:43'
    },
    {
      name: 'Charu',
      avatar: 'https://assets.codepen.io/585692/internal/avatars/users/default.png?fit=crop&format=auto&height=512&version=1552803131&width=512',
      time: '11:04'
    }
  ];

  return (
  
<div className="container app">
  <div className="row app-one">
    <div className="col side">
      <div className="side-one">
        <LeftHeader/>
        <Search searchdata={searchdata} setsearchdata={setsearchdata} conversations={conversations}/>
        <Sidebar searchdata={searchdata}  setchatname={setchatname}/>
      </div>
      <div className="side-two">
      <div className="col-sm-8 conversation">
        <Chatheading chatname={chatname}/>
        <Chatspace/>
        <Reply inputMsg={inputMsg} setInputMsg={setInputMsg}/>
      </div>
      </div>
    </div>
  </div>
</div>


  );
}

export default App;
