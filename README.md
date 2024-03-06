# Video Calling App

This is a simple video calling app built with Next.js 13, Socket.IO, PeerJS, and WebRTC concepts.

## Getting Started

To run this project locally, follow these steps:

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/ankitgrin/video-calling-app.git
   ```

2. Navigate into the project directory:

   ```bash
   cd video-calling-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

   This will start the Next.js development server.

5. Open another terminal window/tab, and run PeerJS server:

   ```bash
   peerjs --port 3001
   ```

   This will start the PeerJS server which is necessary for WebRTC communication.

6. Open your web browser and navigate to `http://localhost:3000` to use the app.

## Usage

- Click on "Create a new room" to start a new video call.
- Share the generated room ID with other participants to join the same call.
- Enjoy video calling with real-time communication!

## Technologies Used

- Next.js 13
- Socket.IO
- PeerJS
- WebRTC
