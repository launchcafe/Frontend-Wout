import useFetch from '@/pages/api/strapi/fetch';

export default function TextBlock({ id }) {
  const { data: texts, loading, error } = useFetch("https://strapi-production-f905.up.railway.app/api/texts");
  
  if (loading) return <p>Loading...</p>;
  if (!texts || texts.length === 0) return <p>No data found.</p>;


  // Find the text that matches the provided id
  const textItem = texts.find((item) => item.id === id);

  if (!textItem) {
    return <p>No text found for id {id}</p>;
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
