import Image1 from "../public/image1.jpg";
import Image2 from "../public/image2.jpg";
import Image3 from "../public/image3.jpg";
import Image4 from "../public/image4.jpg";
import Image5 from "../public/image5.jpg";
import Image6 from "../public/image6.jpg";
import Image7 from "../public/image7.jpg";
import Image8 from "../public/image8.jpg";
import Image9 from "../public/image9.jpg";
import Image10 from "../public/image10.jpg";
import Image11 from "../public/image11.jpg";
import Image12 from "../public/image12.jpg";
import { useState } from "react";

function App() {
  const table = [
    { id: 1, image: Image1 },
    { id: 2, image: Image2 },
    { id: 3, image: Image3 },
    { id: 4, image: Image4 },
    { id: 5, image: Image5 },
    { id: 6, image: Image6 },
    { id: 7, image: Image7 },
    { id: 8, image: Image8 },
    { id: 9, image: Image9 },
    { id: 10, image: Image10 },
    { id: 11, image: Image11 },
    { id: 12, image: Image12 },
  ];

  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <section className="flex flex-col justify-center items-center w-full mx-auto">
      <h1 className="text-center text-5xl font-bold py-4">Explorez vos images</h1>
      <div className="grid grid-cols-4 justify-center mx-auto mt-10">
        {table.map(item => (
          <div key={item.id} className="p-2 cursor-pointer">
            <img 
              src={item.image} 
              alt={`Image ${item.id}`} 
              className={`rounded max-w-[200px] min-w-[200px] max-h-[200px] min-h-[200px] shadow-lg`} 
              onClick={() => handleImageClick(item.image)} 
            />
          </div>
        ))}
      </div>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 transition " onClick={handleClose}>
          <img src={selectedImage} alt="Selected" className="max-w-[80%] max-h-[80%] rounded" />
        </div>
      )}
    </section>
  );
}

export default App;
