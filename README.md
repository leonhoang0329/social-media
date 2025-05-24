# Friendzy - Social Media Platform

<div align="center">
  <img src="public/images/logo.png" alt="Friendzy Logo" width="200"/>
  <h3>Connect with friends and find your match</h3>
</div>

## 📱 Overview

Friendzy is a modern social media platform that combines traditional social networking with dating features. Users can share posts, stories, interact with content through reactions and comments, connect with friends, and potentially find romantic matches.

## ✨ Features

### Core Social Features
- **Posts**: Create, like, comment on, and share posts with text and media
- **Stories**: Share ephemeral content that disappears after 24 hours
- **Reactions**: Express yourself with likes and other reactions
- **Comments**: Engage in conversations through threaded comments
- **Sharing**: Share interesting content with friends and followers
- **Friends**: Send/receive friend requests and manage connections

### Dating Integration
- Optional dating profile creation
- Discovery of potential matches
- Compatibility scoring
- Private messaging with matches

### User Experience
- Responsive design for all devices
- Intuitive interface with modern aesthetics
- Real-time notifications
- Feed customization

## 🛠️ Technology Stack

- **Framework**: [Next.js](https://nextjs.org/) (React framework)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Authentication**: [NextAuth.js](https://next-auth.js.org/)
- **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
- **API**: RESTful API with Next.js API routes
- **Deployment**: [Vercel](https://vercel.com)

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn
- MongoDB database (local or Atlas)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/friendzy.git
   cd friendzy
   ```

2. Install dependencies:
   ```
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_secret_for_jwt
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

4. Start the development server:
   ```
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 📁 Project Structure

```
friendzy/
├── public/             # Static assets
├── src/
│   ├── components/     # React components
│   ├── models/         # Mongoose models
│   ├── pages/          # Next.js pages and API routes
│   │   ├── api/        # API endpoints
│   │   └── ...         # Page components
│   ├── services/       # Service functions
│   ├── styles/         # Global styles
│   └── utils/          # Utility functions
├── .env.local          # Environment variables (create this file)
├── next.config.js      # Next.js configuration
├── package.json        # Project dependencies
└── README.md           # Project documentation
```

## 💻 Development

### API Routes

The application uses Next.js API routes to handle data operations:

- `/api/auth/*` - Authentication endpoints (managed by NextAuth.js)
- `/api/posts` - Post creation and retrieval
- `/api/posts/[id]` - Single post operations
- `/api/posts/[id]/comment` - Comment operations
- `/api/posts/[id]/like` - Like operations
- `/api/posts/[id]/share` - Share operations
- `/api/users` - User operations
- `/api/friends` - Friend operations
- `/api/dating/*` - Dating feature endpoints

### Models

The application uses Mongoose models for data structure:

- `User` - User information and relationships
- `Post` - Posts, comments, likes, and shares
- `Notification` - User notifications
- `Match` - Dating matches and interactions

## 🧪 Testing

Run the test suite with:

```
npm test
# or
yarn test
```

## 🔄 Deployment

The application is optimized for deployment on Vercel. Simply connect your GitHub repository to Vercel and deploy.

For other platforms:

1. Build the application:
   ```
   npm run build
   # or
   yarn build
   ```

2. Start the production server:
   ```
   npm start
   # or
   yarn start
   ```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Project Link: [https://github.com/yourusername/friendzy](https://github.com/yourusername/friendzy)

---

<div align="center">
  <sub>Built with ❤️ by Friendzy Team</sub>
</div>