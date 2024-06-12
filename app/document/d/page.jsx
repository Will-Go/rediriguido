// "use client";
// import { useEffect } from "react";
import urlMetadata from "url-metadata";

function page() {
  const fetchUrlMetadata = async () => {
    try {
      const url = "https://www.npmjs.com/package/url-metadata";
      const metadata = await urlMetadata(url);
      console.log(
        metadata.title,
        metadata.description,
        metadata.image,
        metadata.favicons[0].href
      );
    } catch (error) {
      console.log(error);
    }
  };
  fetchUrlMetadata();

  //   useEffect(() => {
  //     fetchUrlMetadata();
  //   }, []);
  return <div>page</div>;
}

export default page;
