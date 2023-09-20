import React, { useEffect, useState } from "react";
import { Cards } from "../components/Cards";

export const Blog = () => {
  const [fileNameList, setFileNameList] = useState([]);
  
  const getMarkdownMetadata = async () => {
    const res = await fetch("/markdownMetadata.json");
    const { ...resList } = await res.json();
    return Object.values(resList);
  };
  
  const handleMetadata = async () => {
    const markdownMetadata = await getMarkdownMetadata();
    setFileNameList(markdownMetadata);
  };

  useEffect(() => {
    handleMetadata();
    console.log(fileNameList);
  }, []);

  return (
    <div className="py-20 flex flex-col min-[1450px]:px-44 lg:px-32 md:px-28">
      <main className="mb-20">
        <h1 className="text-5xl font-semibold mb-10 text-primary">
          Blog name placeholder
        </h1>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut, quo
          aliquam? Doloremque aliquam molestias ipsam laudantium labore magnam
          beatae molestiae quidem architecto est, autem quaerat eius eveniet
          vitae, eos ea. Obcaecati illum ratione eveniet. Laudantium
          voluptatibus cum dignissimos fuga dolorum sed consequuntur dolores?
          Hic ipsum eligendi modi? Sit, ipsa! Rem repudiandae possimus
          distinctio libero, ut et voluptas delectus corrupti ullam?
        </p>
      </main>
      <Cards posts={fileNameList} />
    </div>
  );
};
