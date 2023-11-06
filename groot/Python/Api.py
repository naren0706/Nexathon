from flask import Flask, request, jsonify
from flask_cors import CORS
import json

file_path = "E:/Nexathon/Frontend/groot/Python/data.json"

# Class for a message
class Message:
    def __init__(self, key, createdBy, message):
        self.key = key
        self.createdBy = createdBy
        self.message = message

    def to_dict(self):
        return {
            "key": self.key,
            "createdBy": self.createdBy,
            "message": self.message
        }

app = Flask(__name__)
CORS(app)

def read_from_file(file_path):
    with open(file_path, 'r') as json_file:
        return json.load(json_file)

def write_to_file(file_path, json_list):
    try:
        with open(file_path, 'w') as file:
            file.write(json_list)
        return "File has been updated"
    except:
        return "File has not been updated"

# Route to get a list of all messages
@app.route('/messages', methods=['GET'])
def get_messages():
    with open(file_path, 'r') as json_file:
        json_data = json.load(json_file)
    return jsonify(json_data)

@app.route('/add_message', methods=['POST'])
def add_message():
    data = request.get_json()
    if 'message' in data:
        value = data['message']        
        message_list = [Message(item["key"], item["createdBy"], item["message"]) for item in read_from_file(file_path)]        
        message_obj = Message(message_list[-1].key + 1, "user", value)
        message_list.append(message_obj)
        json_format = json.dumps(message_list, default=Message.to_dict, indent=4)
        write_to_file(file_path, json_format)
        return jsonify({'message': 'Message added successfully'})
    else:
        return jsonify({'error': 'Message is required'}), 400

if __name__ == '__main__':
    app.run(debug=True)
