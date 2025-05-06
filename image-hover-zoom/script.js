const image = document.querySelector(".zoom-image");

// Zoom Effect Based on Cursor Position
image.addEventListener("mousemove",(e)=>{
  const rect = image.getBoundingClientRect(); // Get the position of the image
  const x = e.clientX - rect.left // Get the cursor's x-coordinate relative to the image
  const y = e.clientY - rect.top // Get the cursor's y-coordinate realtive to the image

  // Calculate percentage of cursor position
  const xPercent = (x / rect.width) * 100;
  const yPercent = (y / rect.height) * 100;

  // Apply the transform-orgin based on cursor position
  image.style.transformOrigin = `${xPercent}% ${yPercent}%`;

  // Zoom in effect
  image.style.transform = 'scale(3)'
})

// Reset the zoom when the cursor leaves the image
image.addEventListener("mouseleave", ()=>{
  image.style.transform = "scale(1)";
  image.style.transformOrigin = "center center"; // Reset to center when leaving
})