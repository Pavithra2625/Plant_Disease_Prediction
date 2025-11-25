async function predict() {
    const file = document.getElementById('imageInput').files[0];
    const resultElem = document.getElementById('result');
    const previewImg = document.getElementById('preview');

    if (!file) {
        alert("Please select an image");
        return;
    }

    // Show image preview
    previewImg.src = URL.createObjectURL(file);

    // Convert image to base64
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = async () => {
        const base64Data = reader.result.split(',')[1]; // only data part

        try {
            const response = await fetch("http://localhost:8000/predict/", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ image: base64Data })
            });

            const data = await response.json();
            resultElem.innerText = JSON.stringify(data.prediction);
        } catch (error) {
            resultElem.innerText = "Error: Could not get prediction";
            console.error(error);
        }
    };
}
