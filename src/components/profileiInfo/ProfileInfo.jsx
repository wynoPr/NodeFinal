export default function ProfileInfo({ data }) {
  return (
    <div>
      <div>
        {data.map((content, index) => (
          <div key={index}>
            <a href={content.url}>{content.name}</a>
          </div>
        ))}
      </div>
    </div>
  );
}
