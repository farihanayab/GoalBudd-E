import React, { useState } from 'react';

export default function NewPostPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [caption, setCaption] = useState('');

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  // Function to handle caption input
  const handleCaptionChange = (event) => {
    setCaption(event.target.value);
  };

  // Function to submit the new post
  const handleSubmit = () => {
    //  implement logic to send the image and caption to your server/database
    //  use an API or backend service to handle this part
    console.log('Image:', selectedImage);
    console.log('Caption:', caption);
    // Reset state after submitting
    setSelectedImage(null);
    setCaption('');
  };

  return (
    <div>
      <h1>New Post</h1>

      {/* Image Upload */}
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {selectedImage && (
        <img src={selectedImage} alt="Selected" width="300" height="300" />
      )}

      {/* Caption Input */}
      <textarea
        placeholder="Write a caption..."
        value={caption}
        onChange={handleCaptionChange}
      />

      {/* Submit Button */}
      <button onClick={handleSubmit}>Upload Post</button>
    </div>
  );
}
