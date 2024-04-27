// export default function ProfileInfo({ data }) {
//   return (
//     <div>
//       <div>
//         {data.map((content, index) => (
//           <div key={index}>
//             <a href={content.url}>{content.name}</a>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProfileInfo() {
  const { id } = useParams();

  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const getLanguage = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:3001/language/${id}`
        );
        setLanguages(data);
      } catch (error) {
        console.error("Error fetching language data:", error);
      }
    };
    getLanguage();
  }, [id]);

  return (
    <div>
      {languages.map((language, index) => (
        <div key={index}>
          <Link to={`/language/${language.id}`}>
            <img src={language.img} alt={language.name} />
            <h2>{language.name}</h2>
          </Link>
          <div>
            {language.content &&
              language.content.map((contentItem, contentIndex) => (
                <div key={contentIndex}>
                  <a href={contentItem.img}>{contentItem.name}</a>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
