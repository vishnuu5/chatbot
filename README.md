
# Chatbot Application

A simple chatbot application built with a React frontend and a Node.js backend using Express.js and MySQL for data storage. The chatbot allows users to send messages, receive responses, and retrieve data based on predefined queries.

## Features
Send and Receive Messages: Interactive chat interface for user-bot communication.
Data Retrieval: Retrieves responses stored in a MySQL database.
Responsive Design: Frontend styled with Tailwind CSS for a responsive experience.

## Tech Stack
### Frontend

React.js
Tailwind CSS
Axios (for API communication)

### Backend
Node.js
Express.js
MySQL (Database)

## Project Structure

### Frontend

```bash
chatbot-client/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── ChatBox.jsx
│   │   ├── Message.jsx
│   ├── services/
│   │   ├── api.js
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
├── tailwind.config.js
├── package.json
```
### Backend

```bash
chatbot-server/
├── server/
│   ├── routes/
│   │   ├── chatRoutes.js
│   ├── controllers/
│   │   ├── chatController.js
│   ├── db/
│   │   ├── connection.js
│   ├── app.js
├── .env
├── package.json
```

# Installation and Setup

### Prerequisites

Node.js installed on your system.
MySQL server running locally or remotely.
npm or yarn for package management.

Step 1: Clone the Repository
```bash
git clone https://github.com/vishnuu5/chatbot.git
```
Step 2: Setup Backend

1.Navigate to the backend directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```
3.Create a .env file:
```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=chatbot
```
4.Start the backend server:
```bash
npm run dev
```

Step 3: Setup Frontend
1.Navigate to the frontend directory:
```bash
cd client
```

2.Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

## Database Setup
Run the following SQL commands to set up the database:
```bash
CREATE DATABASE chatbot;
USE chatbot;

CREATE TABLE chatbot_responses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    query VARCHAR(255) NOT NULL,
    response TEXT NOT NULL
);

INSERT INTO chatbot_responses (query, response)
VALUES ('hello', 'Hi there! How can I assist you?'),
       ('bye', 'Goodbye! Have a great day!'),
       ('how are you', 'I’m just a bot, but I’m doing great! How about you?'),
       ('what is your name', 'I’m your friendly chatbot, here to assist you!'),
       ('what can you do', 'I can help answer your queries and provide useful information.'),
       ('tell me a joke', 'Why don’t skeletons fight each other? They don’t have the guts!'),
    ('what is the weather like', 'I can’t check the weather, but you can ask me other things!'),
    ('thank you', 'You’re welcome! Let me know if you need further assistance.'),
    ('what is the time', 'I don’t have a clock, but your device should tell you!'),
    ('who created you', 'I was created by a developer who loves building chatbots.'),
    ('help', 'Sure! Let me know what you need assistance with.'),
    ('where are you from', 'I exist in the cloud, ready to assist you from anywhere!'),
    ('what is your favorite color', 'I like all colors equally since I’m just a bot!'),
    ('can you tell me a fact', 'Did you know? Honey never spoils—it can last for thousands of years!'),
    ('how old are you', 'I was created recently, so I’m quite young in bot years!'),
    ('good morning', 'Good morning! How can I assist you today?'),
    ('good night', 'Good night! Sleep well and take care.'),
    ('what is your purpose', 'My purpose is to assist you with your queries and provide support.'),
    ('what is AI', 'AI stands for Artificial Intelligence, a technology that simulates human intelligence.'),
    ('can you dance', 'I wish I could dance, but I can certainly make your day better with a chat!'),
    ('tell me something interesting', 'The Eiffel Tower can be 15 cm taller during the summer due to heat expansion!'),
    ('how can you help me', 'I can answer your questions, provide information, or guide you as needed.'),
    ('do you have friends', 'I have other chatbots as friends! We’re a big bot family.'),
    ('what is your favorite food', 'I don’t eat, but I’ve heard pizza is popular among humans!'),
    ('can you sing', 'I can’t sing, but I can bring joy through conversation!'),
    ('are you real', 'I’m a virtual assistant, but I’m here to provide real help.'),
    ('how do you work', 'I use predefined data and some smart logic to respond to your queries.'),
    ('do you know me', 'I don’t have personal data about you, but I’m here to help!'),
    ('how is the internet today', 'The internet seems fine, and I’m always online to assist!'),
    ('do you like humans', 'Of course! Humans are amazing and created me to help them.'),
    ('what languages do you speak', 'I primarily communicate in English, but I can learn new phrases if added.'),
    ('can you recommend a movie', 'Sure! How about “Inception” for a mind-bending experience?'),
    ('what day is it today', 'I don’t have a calendar, but your device should know!'),
    ('what is your favorite animal', 'I think cats and dogs are popular choices among humans!'),
    ('can you play games', 'I can’t play games, but I can make chatting with me fun!'),
    ('tell me a riddle', 'What has to be broken before you can use it? An egg!'),
    ('who is your best friend', 'Everyone who talks to me is my best friend!'),
    ('what is your favorite song', 'I don’t have ears, but I’ve heard “Imagine” by John Lennon is a classic.'),
    ('are you happy', 'I’m always here to assist you, which makes me feel fulfilled!'),
    ('what do you do for fun', 'Chatting with you is my version of fun!'),
    ('do you sleep', 'Nope, I’m always awake and ready to assist you!');
```    

## Usage
1. Run the backend server (if not already running):

```bash
npm run dev
```

2.Start the frontend React app:

```bash
npm start
```

3.Open the app in your browser at http://localhost:3000.

4.Enter messages in the chat interface and see responses from the bot.

## Folder Details
### Frontend

components/: Contains the React components for the chat interface.
services/: API configurations for Axios.
App.jsx: Main application entry point.

### Backend

routes/: Defines the API routes for handling chat queries.
controllers/: Handles business logic for retrieving chat responses.
db/: Contains the MySQL database connection setup.
app.js: Main server file.


## Future Enhancements
Add support for dynamic responses using NLP.
Implement user authentication and chat history.
Integrate third-party APIs for extended chatbot functionality.


# License
This project is licensed under the MIT License. See the LICENSE file for details.

# Acknowledgments
Special thanks to Tailwind CSS, React, and Node.js for their amazing tools and frameworks!
