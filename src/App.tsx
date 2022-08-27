import { useState } from "react";

interface Subs {
  nick: string;
  subMonths: number;
  avatar: string;
  description?: string;
}

const INITIAL_STATE = [
  {
    nick: "dapelu",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "",
  },
  {
    nick: "marielu",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=marielu",
    description: "",
  },
];

function App() {
  const [subs, setSubs] = useState<Array<Subs>>(INITIAL_STATE);

  return (
    <div>
      <ul>
        {subs.map((sub) => (
          <li key={sub.nick}>
            <img src={sub.avatar} alt={sub.nick} />
            <strong>{sub.nick}</strong>
            <span>{sub.subMonths} meses</span>
            <p>{sub.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
