import React from 'react';
import Card from './Components/Card/Card';
import "./Components/Card/Card.css";
import "./index.css";
import "./App.css";

const App = () => {
const data=[
  {
    title:"FREE",
    price:"$0/month",
    user:"Single-user",
    storage:"50GB storage",
    project:"Unlimited Public Projects",
    community:"Community Access",
    private:"Unlimited Private Projects",
    support:"Dedicated Phone Support",
    subDomain:"Free Subdomain",
    reports:"Monthly Status Reports",
    tickIcon:"fas fa-check",
    textFade:"text-muted",
    crossIcon:"fas fa-xmark"
  },
  {
    title:"PLUS",
    price:"$9/month",
    user:"5 Users",
    storage:"50GB Storage",
    project:"Unlimited Public Projects",
    community:"Community Access",
    private:"Unlimited Private Projects",
    support:"Dedicated Phone Support",
    subDomain:"Free Subdomain",
    reports:"Monthly Status Reports",
    tickIcon:"fas fa-check",
    textFade:"text-muted",
    crossIcon:"fas fa-xmark"
  },
  {
    title:"PRO",
    price:"$49/month",
    user:"Unlimited Users",
    storage:"50GB Storage",
    project:"Unlimited Public Projects",
    community:"Community Access",
    private:"Unlimited Private Projects",
    support:"Dedicated Phone Support",
    subDomain:"Free Subdomain",
    reports:"Monthly Status Reports",
    tickIcon:"fas fa-check",
    textFade:"text-muted",
    crossIcon:"fas fa-xmark"
  }
]



  return (
    <>
    <h1>Price Card</h1>
    <Card data={data}/>
    </>
  );
};

export default App;