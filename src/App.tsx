import { useEffect, useRef, useState } from "react";
import List from "./components/List";
import Form from "./components/Form";

import { Sub, SubResponse } from "./types";

interface AppState {
  sub: Sub[];
  newSubsNumber: number;
}

const INITIAL_STATE = [
  {
    nick: "dapelu",
    email: 3,
    website: "https://i.prwebsite.cc/150?u=dapelu",
    phone:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quidem.",
  },
  {
    nick: "marielu",
    email: 3,
    website: "https://i.prwebsite.cc/150?u=marielu",
  },
  {
    nick: "sergio_serrano",
    email: 3,
    website: "https://i.prwebsite.cc/150?u=sergio_serrano",
  },
];

function App() {
  const divRef = useRef<HTMLDivElement>(null);
  const [subs, setSubs] = useState<AppState["sub"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumber"]>(0);
    
  useEffect(() => {
    //setSubs(INITIAL_STATE);
    const fetchSubs = (): Promise<SubResponse[]> => {
      return fetch("https://jsonplaceholder.typicode.com/users").then((res) =>
        res.json()
      );
    };
    const mapFromApiResponse = (apiResponse: SubResponse[]) => {
      return apiResponse.map((apiSub) => {
        const data = {
          nick: apiSub.username,
          email: apiSub.email,
          website: apiSub.website,
          phone: apiSub.phone,
        };
        return data;
      });
    };
    fetchSubs().then(mapFromApiResponse).then(setSubs);
  }, []);

  const handleNewSub = (newSub: Sub) => {
    setSubs([...subs, newSub]);
    setNewSubsNumber((n) => n + 1);
  };

  return (
    <div ref={divRef}>
      <h1>Midu subs</h1>
      New subs: {newSubsNumber}
      <Form onNewSub={handleNewSub} />
      <ul>
        <List subs={subs} />
      </ul>
      
    </div>
  );
}

export default App;
