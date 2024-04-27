import axios from "axios";
import React, { useEffect, useState } from "react";

export default function P1() {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const getLanguages = async () => {
      const { data } = await axios("http://localhost:3001/language");
      console.log(data);
      setLanguages(data);
    };
    getLanguages();
  }, []);
  console.log(languages);
  return <div>blú</div>;
}
