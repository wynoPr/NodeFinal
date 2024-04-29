import { useParams } from "react-router-dom";
import ProfileInfo from "../profileiInfo/ProfileInfo";
import data from "../../../exercise-10.json";

export default function Profile() {
  const { id } = useParams();
  const selectedLanguage = data.language.find(
    (lang) => lang.id === parseInt(id)
  );

  return (
    <div>
      <div>
        <img src={selectedLanguage.img} alt={selectedLanguage.name} />
        <h1>{selectedLanguage.name}</h1>
      </div>
      <div>
        <ProfileInfo data={selectedLanguage.content} />
      </div>
    </div>
  );
}
