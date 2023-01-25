import { useEffect, useState } from "react";
import axios from "axios";

import KnightCard from "../components/KnightCard";

export default function Home() {
  const [knights, setKnights] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/knights")
      .then((res) => setKnights(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <ul>
        {knights.map((knight) => (
          <KnightCard key={knight.id} name={knight.name} age={knight.age} />
        ))}
      </ul>
    </div>
  );
}
