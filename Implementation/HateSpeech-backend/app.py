
import pickle
import pandas as pd
import numpy as np
from flask import Flask, request, send_from_directory
from flask_cors import cross_origin
from sklearn.feature_extraction.text import TfidfVectorizer
import os

app = Flask(__name__, static_folder='frontend/build', static_url_path='')


@app.route('/')
def index():
    return send_from_directory(app.static_folder, 'index.html')


@app.route('/api/input', methods=["POST"])
@cross_origin()
def post_input():
    # Load model and data
    f = open('my_model.pkl', 'rb')
    mod = pickle.load(f)
    path = 'Sinhala_Singlish_Hate_Speech.csv'
    df = pd.read_csv(path)
    df = df.rename(columns={'Phrase': 'text', 'IsHateSpeech': 'label'})
    df = df.groupby('label').head(1000)
    df['label'] = df['label'].map({'YES': 'Hate Speech', 'NO': 'Non-Hate Speech'})

    # Get input text from user
    input_text = request.json.get('text')

    # Make prediction
    tfidf = TfidfVectorizer()
    tfidf.fit_transform(df['text'])
    text_features = tfidf.transform([input_text])
    predictions = mod.predict(text_features)
    final_prediction = np.array(predictions)
    return final_prediction.tolist()


if _name_ == '__main__':
    app.run(host='0.0.0.0', port=os.environ.get('BACKEND_PORT', 5000))
