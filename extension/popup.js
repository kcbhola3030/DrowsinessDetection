
navigator.mediaDevices.getUserMedia({ video: true })
// document.addEventListener('DOMContentLoaded', function() {
//     var toggleButton = document.getElementById('toggleButton');
//     var videoElement = document.getElementById('videoElement');
//     var mediaStream = null;
//     var tabId = null;
  
//     // Request camera access on extension startup
//     chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//       tabId = tabs[0].id;
//       chrome.tabs.executeScript(tabId, { file: 'content.js' });
//     });
  
//     toggleButton.addEventListener('click', function() {
//       if (!mediaStream) {
//         chrome.tabs.executeScript(tabId, { file: 'content.js' });
//       } else {
//         stopCamera();
//       }
//     });
  
//     function startCamera(stream) {
//       mediaStream = stream;
//       videoElement.srcObject = mediaStream;
//       toggleButton.textContent = 'Stop Camera';
//     }
  
//     function stopCamera() {
//       if (mediaStream) {
//         mediaStream.getTracks().forEach(function(track) {
//           track.stop();
//         });
//         mediaStream = null;
//         videoElement.srcObject = null;
//         toggleButton.textContent = 'Start Camera';
//       }
//     }
  
//     chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//       if (sender.tab.id === tabId && request.type === 'stream') {
//         if (request.start) {
//           startCamera(request.stream);
//         } else {
//           stopCamera();
//         }
//       }
//     });
//   });


// document.addEventListener('DOMContentLoaded', function() {
//     var toggleButton = document.getElementById('switch');
//     var videoElement = document.getElementById('videoElement');
//     var mediaStream = null;
//     var tabId = null;
  
//     toggleButton.addEventListener('change', function() {
//       if (toggleButton.checked) {
//         // Request camera access
//         chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
//           tabId = tabs[0].id;
//           chrome.tabs.executeScript(tabId, { file: 'content.js' });
//         });
//       } else {
//         stopCamera();
//       }
//     });
  
//     function startCamera(stream) {
//       mediaStream = stream;
//       videoElement.srcObject = mediaStream;
//     }
  
//     function stopCamera() {
//       if (mediaStream) {
//         mediaStream.getTracks().forEach(function(track) {
//           track.stop();
//         });
//         mediaStream = null;
//         videoElement.srcObject = null;
//       }
//     }
  
//     chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
//       if (sender.tab.id === tabId && request.type === 'stream') {
//         if (request.start) {
//           startCamera(request.stream);
//         } else {
//           stopCamera();
//         }
//       }
//     });
//   });

// Inside popup.js





// Function to send video data to the server
// function sendVideoDataToServer(videoBlob) {
//     // API endpoint URL
//     const apiUrl = 'https://example.com/api/endpoint';
  
//     // Create a FormData object to send the video blob
//     const formData = new FormData();
//     formData.append('video', videoBlob, 'video.webm');
  
//     // Sending POST request to the server
//     fetch(apiUrl, {
//       method: 'POST',
//       body: formData
//     })
//       .then(response => response.json())
//       .then(result => {
//         // Handle the response from the server
//         console.log('Server response:', result);
//       })
//       .catch(error => {
//         // Handle any errors that occurred during the request
//         console.error('Error:', error);
//       });
//   }
  
//   // Example usage: sending video data on button click
//   const sendButton = document.getElementById('sendButton');
//   if (sendButton) {
//     sendButton.addEventListener('click', function() {
//       // Get the video stream from the media devices
//       navigator.mediaDevices.getUserMedia({ video: true })
//         .then(stream => {
//           // Create a new MediaRecorder to capture the video stream
//           const mediaRecorder = new MediaRecorder(stream);
//           const chunks = [];
  
//           // Start recording when the MediaRecorder is ready
//           mediaRecorder.ondataavailable = function(event) {
//             try {
//               chunks.push(event.data);
//             } catch (error) {
//               console.error('Error collecting video chunks:', error);
//             }
//           };
  
//           mediaRecorder.start();
  
//           // Stop recording after a certain duration or based on user action
//           setTimeout(function() {
//             mediaRecorder.stop();
//             stream.getVideoTracks()[0].stop();
            
//             // Combine the video chunks into a single Blob
//             const videoBlob = new Blob(chunks, { type: 'video/webm' });
  
//             // Call the function to send video data to the server
//             sendVideoDataToServer(videoBlob);
//           }, 5000); // Change the duration as needed
//         })
//         .catch(error => {
//           // Handle any errors that occurred while accessing the camera
//           console.error('Error accessing camera:', error);
//         });
//     });
//   }
  
