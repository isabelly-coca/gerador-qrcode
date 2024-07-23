const formQrcode = document.getElementById("form-qrcode");
const sampleUri = "https://api.qrserver.com/v1/create-qr-code/?data=[DATA_VALUE]&size=200x200";
const textForm = document.getElementById("text-form");
const qrCodeImage = document.getElementById("qrcode-image");

formQrcode.addEventListener("submit", function(event) {
    event.preventDefault(); 
    const dataValue = textForm.value; 
    const realUri = sampleUri.replace("[DATA_VALUE]", encodeURIComponent(dataValue));
    qrCodeImage.src = realUri;
});
