import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ProfileInfo from "../../components/profileiInfo/ProfileInfo";

export default function P2({ dataType }) {
  const { id } = useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios(`http://localhost:3001/${dataType}`);
        setData(data);
      } catch (error) {
        console.error(`Error fetching ${dataType} data:`, error);
      }
    };
    fetchData();
  }, [id, dataType]);

  return (
    <>
      <Header />
      <ProfileInfo data={data} />
      <Footer />
    </>
  );
}
