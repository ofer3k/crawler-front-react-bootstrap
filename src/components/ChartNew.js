import React, { useState, useEffect } from "react";
// import "./App.css";
import Graph from "react-graph-vis";
import axios from 'axios'
const gitHubUrl = "http://localhost:8001/api/mongo/posts/graph";

function App() {
  const [userDataNodes, setUserDataNodes] = useState([]);
  const [userDataLinks, setUserDataLinks] = useState([]);
  const [faker,setFaker]=useState([
    { id: 1111, label: "Node 11111", title: "node 1 tootip text" },
    { id: '2', label: "Node 12", title: "no2de 1 tootip text" }
  ])
  const [fakerLinks,setFakerLinks]=useState([{ from: 1111, to: '2' }])
  const [show,setShow]=useState(false)

  var data2=[]
  useEffect(() => {
    // setFaker([{ id: 1122211, label: "Node 11111", title: "node 1 tootip text" },
    // { id: '2222', label: "Node 12", title: "no2de 1 tootip text" }])
    getGitHubUserWithFetch();
  }, []);

  const getGitHubUserWithFetch = async () => {
    const getGiHubUserWithAxios = async () => {
        const response = await axios.get(gitHubUrl);
        setUserDataNodes(JSON.parse(response.data[0].title).nodes);
        setUserDataLinks(JSON.parse(response.data[0].title).links);

        data2=JSON.parse(response.data[0].title).links
        // console.log(JSON.parse(response.data[0].title).nodes)
        // console.log('data2',data2)

        

      };
    getGiHubUserWithAxios();
  };
  async function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }  
  let graph = {
    nodes: faker,
    edges: fakerLinks
  };

  var options = {
    groups:{
      useDefaultGroups: false,
      myGroupId:{
        /*node options*/
      }
    },
    // nodeSpacing:1300,
    autoResize: true,
    
    height: '600px',
    width: '100%',
    locale: 'en',
    
    clickToUse: false,
    
    layout:{
    
      hierarchical: {
        sortMethod:'directed',
      levelSeparation:500,
      nodeSpacing:400,
      parentCentralization:false
      }
    }

  };

  let events = {
    select: function(event) {
      var { nodes, edges } = event;
    }
  };
const changeFaker=async ()=>{
  console.log(userDataNodes)
  console.log(userDataLinks)
  const newDataLinks=[]
  userDataLinks.forEach((i)=>(newDataLinks.push({from:i.source,to:i.target})))
  const newData=[]
  userDataNodes.forEach((i)=>(newData.push({ id: i.id, label: "Node "+i.id, title: "node "+i.id })))
  console.log(newData)
  await sleep(1000)
  setFaker(newData)
  setFakerLinks(newDataLinks)
  await sleep(2000)
  setShow(true)
}

  return (
    <div className="App">
      <button onClick={changeFaker}> click</button>
      {show && <Graph
      graph={graph}
      options={options}
      events={events}
      getNetwork={network => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
      }}
     />}
          
    
      {/* <header className="App-header">
        <h2>GitHub User Data</h2>
      </header> */}
      {/* <div className="user-container"> */}
        {/* <h5 className="info-item">{userDataNodes.map((i)=>(<p>{i.id}</p>))}</h5> */}
        {/* <br/> */}
        {/* <h5 className="info-item">{userDataLinks.map((i)=>(<div style={{border:'2px solid black'}}><p>{i.source}</p> <p>{i.target}</p></div>))}</h5> */}
        {/* <h5 className="info-item">{userDataLinks.map((i)=>(<p>{i.source}</p>))}</h5> */}
        
      {/* </div> */}
    </div>
  );
}

export default App;