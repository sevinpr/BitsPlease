import pickle
import pandas as pd
import numpy as np
from flask import Flask,request
from flask_cors import CORS
from sklearn.feature_extraction.text import TfidfVectorizer

# Create Flask app and enable CORS
app = Flask(__name__)
CORS(app)

# Define endpoint for receiving input
@app.route('/api/input', methods=["POST"])
def post_input():
    # Load model and data
    with open('my_model.pkl', 'rb') as f:
        mod = pickle.load(f)  # Load trained model
    path = 'Dataset.csv'
    df = pd.read_csv(path)  # Load dataset
    df = df.rename(columns={'Phrase': 'text', 'IsHateSpeech': 'label'})  # Rename columns
    df = df.groupby('label').head(4549)  # Limit dataset to 4549 samples per class
    df['label'] = df['label'].map({'YES': 'Hate Speech', 'NO': 'Non-Hate Speech'})  # Map labels to text

    # Get input text from user
    input_text = request.json.get('text')

    # Make prediction
    tfidf = TfidfVectorizer()  # Create TfidfVectorizer object
    tfidf.fit_transform(df['text'])  # Fit TfidfVectorizer to dataset
    text_features = tfidf.transform([input_text])  # Transform input text using TfidfVectorizer
    predictions = mod.predict(text_features)  # Make prediction using trained model
    final_prediction = np.array(predictions)  # Convert prediction to numpy array
    return final_prediction.tolist()  # Return prediction as JSON

# Start Flask app
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)
