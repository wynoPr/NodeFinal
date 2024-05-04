import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProfileInfo({ data }) {
  const { dataType } = useParams();

  const [familyData, setFamilyData] = useState([]);
  const [contentData, setContentData] = useState([]);

  useEffect(() => {
    if (dataType === "language") {
      setFamilyData(data?.family || []);
    } else {
      setContentData(data?.content || []);
    }
  }, [data, dataType]);

  return (
    <div className="f-w container">
      <div>
        <img src={data.img} alt={data.name} />
        {dataType === "language" ? (
          <div>
            {familyData.map((familyItem) => (
              <div key={familyItem.id}>
                <p>{familyItem.name}</p>
                <img src={familyItem.img} alt={familyItem.name} />
              </div>
            ))}
          </div>
        ) : (
          <div>
            {contentData.map((contentItem) => (
              <div key={contentItem.id}>
                <a href={contentItem.url}>{contentItem.name}</a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
