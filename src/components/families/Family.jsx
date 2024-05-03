import { useEffect, useState } from "react";
import "../../../src/App.scss";
import axios from "axios";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProfileInfo from "../../components/profileiInfo/ProfileInfo"; // Corregido el nombre del componente

export default function P1({ dataType }) {
  // Cambiado el nombre de la prop a dataType
  const { id } = useParams();

  const [family, setFamily] = useState({}); // Cambiado el nombre de la variable de estado a family

  useEffect(() => {
    const getFamily = async () => {
      try {
        const { data } = await axios(`http://localhost:3001/families/${id}`);
        setFamily(data);
      } catch (error) {
        console.error("Error fetching family data:", error);
      }
    };
    getFamily();
  }, [id]);

  return (
    <>
      <Header />
      <ProfileInfo data={family} /> <Footer />
    </>
  );
}
