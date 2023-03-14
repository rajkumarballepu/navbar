let video = document.querySelector("#videoElement");

if(navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({video: true}).then((result) => {
        video.srcObject = result;
    }).catch((err) => {
        console.log("Not accessed")
    });
} else {
    console.log("Something wrong...")
}