const videoElement = document.getElementById("video");
const button = document.getElementById("btn");

// Prompt to select media Stream, Pass to video element, then play
const selectMediaStream = async () => {
  try {
    const mediaStreem = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStreem;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    // Catch Error Here
    console.log("whoops, Error Here:", error);
  }
};

// Button function
button.addEventListener("click", async () => {
  // Desible button
  button.disabled = true;

  // Start picture in picture
  await videoElement.requestPictureInPicture();

  // Reset Button
  button.disabled = false;
});

// On load
selectMediaStream();
