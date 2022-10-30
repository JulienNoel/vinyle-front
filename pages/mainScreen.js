import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Cloudinary } from "@cloudinary/url-gen";
import {
  AdvancedImage,
  lazyload,
  accessibility,
  responsive,
  placeholder,
} from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";
import { useEffect, useState } from "react";

export default function MainScreen() {
  const [listImage, setListImage] = useState([]);

  useEffect(() => {
    async function loadImage() {
      const response = await fetch(
        "https://floating-river-26971.herokuapp.com/listing"
      );
      const rawResponse = await response.json();
      setListImage(rawResponse?.results?.resources);
    }
    loadImage();
  }, []);

  

  return (
    <div className={styles.container}>
      {listImage?.map((el) => {
        return (
          <Image
            src={el.secure_url}
            key={el.asset_id}
            alt="Picture of the author"
            width={320}
            height={320}
            
          />
        );
      })}
    </div>
  );
}

