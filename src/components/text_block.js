import texts from '@/content/texts.json';

export default function TextBlock({ position }) {
  // Find the text that matches the provided id
  const textItem = texts.find((item) => item.Position === position);

  if (!textItem) {
    return <p>No text found for position {position}</p>;
  }

  return (
    <>
      <div key={textItem.id}>
        <h2>{textItem.Title}</h2>
        <br/>
        <p>
        {textItem.Text_block}
        </p>
      </div>
    </>
  );
}
