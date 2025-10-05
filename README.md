# Plant_Disease_Prediction
This project uses machine learning to predict diseases in potato leaves based on images. The goal is to help farmers and researchers detect plant diseases early and take preventive actions to protect crops.

#  Potato Leaf Disease Prediction

A **web-based machine learning project** that predicts **potato leaf diseases** using a **Convolutional Neural Network (CNN)** model.  
It helps farmers and researchers **detect diseases early** and take preventive measures to protect crops.


##  Overview

This project uses a **trained CNN model** to classify potato leaves into three categories:
- 🟢 **Healthy Leaf**
- 🟠 **Early Blight**
- 🔴 **Late Blight**

The **FastAPI** backend handles prediction requests, and the **frontend (HTML, CSS, JavaScript)** allows users to upload images and view instant results.


##  Tech Stack

| Component | Technology Used |
|------------|-----------------|
| **Frontend** | HTML, CSS, JavaScript |
| **Backend** | FastAPI (Python) |
| **Machine Learning** | CNN using TensorFlow / Keras |
| **Dataset** | Potato Leaf Disease Dataset (from Kaggle or custom) |

---

##  Features

✅ Image upload via simple web interface  
✅ Fast prediction response through FastAPI  
✅ Trained CNN model for high accuracy  
✅ User-friendly frontend design  
✅ Scalable and lightweight architecture  

---

##  How to Run the Project

1️⃣ Clone the repository
```bash
git clone https://github.com/yourusername/potato-leaf-disease-prediction.git
cd potato-leaf-disease-prediction
2️⃣ Install dependencies
bash
Copy code
pip install -r requirements.txt
3️⃣ Run FastAPI backend
bash
Copy code
uvicorn main:app --reload
This will start the backend at http://127.0.0.1:8000

4️⃣ Open frontend
Open the index.html file in your browser.
Upload a potato leaf image → The prediction result (Healthy / Early Blight / Late Blight) will appear instantly.

 Model Details
Parameter	Value
Model Type	CNN
Accuracy	~94%
Optimizer	Adam
Loss Function	Categorical Crossentropy
Epochs	20

  Future Enhancements
🔹 Add more crop and disease types
🔹 Improve model accuracy using transfer learning (VGG16, ResNet)
🔹 Build mobile-friendly UI
🔹 Deploy on Render / Hugging Face / AWS

 Contribution
Contributions are welcome!

Fork this repository

Create a new branch

Make your changes

Submit a pull request 🚀
