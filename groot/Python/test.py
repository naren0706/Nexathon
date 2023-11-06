import json
# Open a file for reading (by default, it opens in 'r' mode, which is for reading)
file_path = "E:/Nexathon/Frontend/groot/Python/data.json"
class Message:
    # Constructor method (initializes the object)
    def __init__(self, key, createdBy,message):
        self.key = key
        self.createdBy = createdBy
        self.message = message
    def to_dict(self):
        return {
            "key": self.key,
            "createdBy": self.createdBy,
            "message":self.message
        }
   
with open(file_path, 'r') as file:
    # Read the entire content of the file
    file_content = file.read()
    print(file_content)
    
def readFromFile(filePath):
    with open(filePath, 'r') as json_file:
        return json.load(json_file)
def to_dict(message):
    return {
        "key": message.key,
        "createdBy": message.createdBy,
        "message":message.message
    }
    
value="user oda msg"
MessageList = [Message(item["key"], item["createdBy"], item["message"]) for item in readFromFile(file_path)]        
messageObj = Message(MessageList[-1].key+1, "user", value)
MessageList.append(messageObj)
jsonFormat=json.dumps(MessageList,default=to_dict,indent=4)
print(jsonFormat)