import React, { useContext, useState } from "react";
import { Text, FormControl, FormLabel, useColorModeValue } from "@chakra-ui/react";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import ButtonSecondary from "shared/Button/ButtonSecondary";

import { UploadContext } from "contexts/AdminContext";

const PageAddListing6 = () => {

  const textColor = useColorModeValue("navy.700", "white");
  const inputText = useColorModeValue("gray.700", "gray.100");
  const inputBg = useColorModeValue("secondaryGray.300", "navy.900");

  const { vehicleData, setVehicleData } = useContext(UploadContext);
  console.log(vehicleData);

  const [images, setImages] = useState([]);
  const [coverImage, setCoverImage] = useState();
  console.log("uploaded ----------", images);

  const handleCoverImageChange = (event) => {
    const files = event.target.files;
    const newImages = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.onload = (e) => {
        newImages.push({
          file: files[i],
          name: files[i].name,
          size: files[i].size,
          preview: e.target.result,
        });

        if (newImages.length === files.length) {
          setCoverImage(newImages);
          setVehicleData((prevData => ({
            ...prevData,
            coverImage: newImages
          })))
        }
      };

      reader.readAsDataURL(files[i]);
    }
  };

  const handleImageChange = (event) => {
    const files = event.target.files;
    const newImages = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.onload = (e) => {
        newImages.push({
          file: files[i],
          name: files[i].name,
          size: files[i].size,
          preview: e.target.result,
        });

        if (newImages.length === files.length) {
          setImages((prevImages) => [...prevImages, ...newImages]);
          setVehicleData((prevData => ({
            ...prevData,
            images: newImages
          })))
        }
      };

      reader.readAsDataURL(files[i]);
    }
  };

  return (
    <div
      className={`nc-PageAddListing1 px-4 max-w-3xl mx-auto pb-24 pt-14 sm:py-24 lg:pb-32`}
      data-nc-id="PageAddListing6"
    >
      <div className="space-y-11">
        <div style={{ display: "flex" }}>
          <Text color={textColor} className="text-4xl font-semibold">06</Text>{" "}
          <span className="text-lg text-neutral-500 dark:text-neutral-400" style={{ paddingTop: "10px" }}>
            / 7
          </span>
        </div>

        {/* --------------------- */}
        <div className="listingSection__wrap">
          <>
            <div>
              <Text color={textColor} className="text-2xl font-semibold">Photos of the car</Text>
              <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
                A few photos will help customers have more sympathy for
                your car.
              </span>
            </div>

            <div className="w-14 border-b border-neutral-200 dark:border-neutral-700"></div>
            {/* FORM */}
            <div className="space-y-8">
              <div>
                <Text color={textColor}>Cover image</Text>
                <div className="mt-5 ">
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-md">
                    <div className="space-y-2 text-center flex flex-wrap place-content-center">
                    {coverImage ?
                        (coverImage.map((image, index) => (
                          <img
                            key={index}
                            src={image.preview}
                            alt={image.name}
                            className="h-fit-content"
                            style={{width: "500px"}}
                          />
                        )))
                        :
                        (<svg
                          className="mx-auto h-12 w-12 text-neutral-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>)
                      }
                      <div className="w-full justify-center flex text-sm text-neutral-6000 dark:text-neutral-300">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                        >
                          <span>Upload a file</span>
                          <input
                            id="file-upload"
                            name="file-upload"
                            type="file"
                            className="sr-only"
                            onChange={handleCoverImageChange}
                          />
                        </label>
                        {/* <p className="pl-1">or drag and drop</p> */}
                      </div>
                      <p className="w-full text-xs text-neutral-500 dark:text-neutral-400">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* ----------------- */}
              <div>
                <Text color={textColor}>Detail Images</Text>
                <div className="mt-5 ">
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 dark:border-neutral-6000 border-dashed rounded-md">
                    <div className="space-y-2 text-center flex flex-wrap place-content-between">
                      {images.length ? 
                        (images.map((image, index) => (
                          <img 
                            key={index} 
                            src={image.preview} 
                            alt={image.name} 
                            className="h-fit-content"
                            style={{width: "200px"}}
                          />
                        ))) 
                        : 
                        (<svg
                          className="mx-auto h-12 w-12 text-neutral-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>)
                      }
                      <div className="w-full justify-center flex text-sm text-neutral-6000 dark:text-neutral-300">
                        <label
                          htmlFor="file-upload-2"
                          className="relative cursor-pointer  rounded-md font-medium text-primary-6000 hover:text-primary-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500"
                        >
                          <span>Upload files</span>
                          <input
                            id="file-upload-2"
                            name="file-upload-2"
                            type="file"
                            className="sr-only"
                            multiple
                            onChange={handleImageChange}
                          />
                        </label>
                        {/* <p className="pl-1">or drag and drop</p> */}
                      </div>
                      <p className="w-full text-xs text-neutral-500 dark:text-neutral-400">
                        PNG, JPG, GIF up to 10MB
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        </div>

        {/* --------------------- */}
        <div className="flex justify-end space-x-5">
          <ButtonSecondary href="new-uploading-5">Go back</ButtonSecondary>
          <ButtonPrimary href="new-uploading-7">Continue</ButtonPrimary>
        </div>
      </div>
    </div>
  );
};

export default PageAddListing6;
