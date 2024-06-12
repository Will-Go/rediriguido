import urlMetadata from "url-metadata";

const fetchUrlMetadata = async (id) => {
  try {
    const url = `https://docs.google.com/document/d/${id}/edit?usp=sharing`;
    const metadata = await urlMetadata(url);
    // console.log(
    //   metadata.title,
    //   metadata.description,
    //   metadata.image,
    //   metadata.favicons[0].href
    // );
    return metadata;
  } catch (error) {
    console.log(error);
  }
};

export async function generateMetadata({ params }) {
  const { title, description, image } = await fetchUrlMetadata(params.id);
  return {
    title: title,
    description: description,
    image: image,
  };
}

function layout({ children }) {
  return <div>{children}</div>;
}

export default layout;
