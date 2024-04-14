import requests
from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import os, json

app = Flask(__name__)
cors = CORS(app, origins='*')

# Defining a route for handling GET requests
@app.route('/api/parks', methods=['GET']) 
def index():

    # Sending a GET request to the NPS API to fetch park data
    req = requests.get('https://developer.nps.gov/api/v1/activities/parks?api_key=q3rOnLMk9ojhMdKRdF8nQeR1UsREJwdHMRgv05Ws')
    # Parsing the JSON response
    data = json.loads(req.content)

    processed_data = process_data(data['data']) 
    # html option: 'index.html' 
    # return render_template('index.html', data=processed_data)

    # Returning the processed data as JSON response
    return jsonify(processed_data)

def process_data(data):
    data_list = []

    # Iterating through the received data to extract category and corresponding park lists 
    for d in data:
        process_d = {
            'category': d['name'],
            'park_list': d['parks']
        }
        data_list.append(process_d)
    return data_list

if __name__ == '__main__':
    # Running the Flask application on port 8080 with debug mode enable
    app.run(debug=True, port=8080)
