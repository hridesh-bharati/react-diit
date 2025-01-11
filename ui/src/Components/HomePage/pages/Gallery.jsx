import React, { useState, useEffect } from "react";
import { getPhotos } from "../../../api/adminApi/api";
import Footer from "../../Footer/Footer";

export default function () {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      setIsLoading(true);
      const rspns = await getPhotos('undefined');
      setImages(rspns.message);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="container-fluid text-center py-4 h2 mt-4 fw-bolder text-uppercase">
        Image Gallery
      </div>
      <div className="container-fluid pb-5">
        <div className="row gallaryImg">
          {images.map((image, index) => (
            <div className="col-md-3" key={index}>
              <div className="card mb-3 p-1 myshadow">
                <img src={image.url} className="card-img-top" alt={image.name} />
                <div className="card-body text-start p-0 m-0 px-1">
                  <h6 className="card-title p-0 m-0">{image.name}</h6>
                  <p className="card-text small text-primary fs-6 p-0 m-0"><small>{image.category}</small></p>
                </div>
              </div>
            </div>
          ))}
          {isLoading && <p>Loading...</p>}
        </div>
      </div>
      <Footer />
    </div>
  );
};