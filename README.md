# Game In My Style - Coding Education Platform

A gamified coding education platform with 500 levels across 5 programming courses, featuring AI-powered code validation and adaptive time limits.

## 📊 Project Overview

- **Total Levels**: 500 ✅
- **Courses**: HTML, CSS, JavaScript, Python, Java
- **Phases per Course**: 10
- **Levels per Phase**: 10 (consistent structure)
- **Timer Strategy**: Adaptive (5-25 minutes based on complexity)

## 🎯 Level Specifications

### Adaptive Timer System ✅

Timers are intelligently adjusted based on:
- **Task complexity**: Simple tags vs complex nested structures
- **Language verbosity**: Java requires more typing than Python
- **Phase difficulty**: Basics vs advanced projects
- **User typing speed**: Accommodates 20-60 WPM
- **Complete workflow**: Reading + thinking + coding + debugging + testing

**Timer Ranges by Course:**
- **HTML**: 5-20 minutes (300-1200s)
- **CSS**: 5-22 minutes (300-1320s)
- **JavaScript**: 6-24 minutes (360-1440s)
- **Python**: 6-24 minutes (360-1440s)
- **Java**: 7-25 minutes (420-1500s)

**Example Timers:**
- HTML Phase 1, Level 1: 5 minutes (basic DOCTYPE structure)
- HTML Phase 10, Level 10: 20 minutes (complete e-commerce with Schema.org)
- Java Phase 1, Level 1: 7 minutes (Hello World with class structure)
- Java Phase 10, Level 10: 25 minutes (complex project with multiple classes)

### Test Cases
- **Beginner (Levels 1-3)**: 3 test cases
- **Moderate (Levels 4-6)**: 4 test cases
- **Hard (Levels 7-10)**: 5 test cases

### XP Rewards
- Each level completion: 50 XP

## 🏗️ Project Structure

```
game-in-my-style/
├── backend/                    # Node.js/Express API
│   ├── config/                # Configuration
│   │   ├── apiKeys.js        # API key management
│   │   └── db.js             # MongoDB connection
│   ├── controllers/           # Request handlers
│   │   ├── authController.js # Authentication
│   │   └── codeValidationController.js # AI validation
│   ├── middleware/            # Express middleware
│   ├── models/                # MongoDB models
│   ├── routes/                # API routes
│   └── server.js             # Server entry point
│
├── frontend/                  # React/Vite application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── config/          # 50 level configs ✅
│   │   ├── pages/           # 500 level pages ✅
│   │   ├── routes/          # 50 route files ✅
│   │   └── services/        # API services
│   └── vite.config.js
│
├── README.md                  # This file
└── FINAL_STATUS.md           # Detailed status report
```

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- MongoDB connection
- Groq API keys (pre-configured)

### Installation

**Backend**:
```bash
cd backend
npm install
```

**Frontend**:
```bash
cd frontend
npm install
```

### Running the Application

**Terminal 1 - Backend**:
```bash
cd backend
npm start
```
→ Backend runs on http://localhost:3000

**Terminal 2 - Frontend**:
```bash
cd frontend
npm run dev
```
→ Frontend runs on http://localhost:5173

### Building for Production

```bash
cd frontend
npm run build
```

## 📚 Course Structure

### HTML Course (100 levels)
- Phase 1: HTML Basics
- Phase 2: Text & Links
- Phase 3: Lists & Tables
- Phase 4: Forms
- Phase 5: Multimedia
- Phase 6: Semantic HTML
- Phase 7: Advanced Semantic
- Phase 8: Accessibility
- Phase 9: Advanced Accessibility
- Phase 10: Schema.org & SEO

### CSS Course (100 levels)
- Phase 1: CSS Basics
- Phase 2: Selectors
- Phase 3: Box Model
- Phase 4: Positioning
- Phase 5: Flexbox
- Phase 6: Grid
- Phase 7: Animations
- Phase 8: Responsive Design
- Phase 9: Advanced Techniques
- Phase 10: Complete Projects

### JavaScript Course (100 levels)
- Phase 1: Basics
- Phase 2: Data Types
- Phase 3: Control Flow
- Phase 4: Arrays
- Phase 5: Objects
- Phase 6: Functions
- Phase 7: DOM Manipulation
- Phase 8: Events & Async
- Phase 9: ES6+ Features
- Phase 10: Complete Projects

### Python Course (100 levels)
- Phase 1: Basics
- Phase 2: Data Types
- Phase 3: Control Flow
- Phase 4: Lists & Tuples
- Phase 5: Dictionaries
- Phase 6: Functions & Modules
- Phase 7: OOP
- Phase 8: File Handling
- Phase 9: Advanced Topics
- Phase 10: Complete Projects

### Java Course (100 levels)
- Phase 1: Basics
- Phase 2: Data Types
- Phase 3: Control Flow
- Phase 4: Arrays
- Phase 5: Methods
- Phase 6: OOP Basics
- Phase 7: Inheritance
- Phase 8: Collections
- Phase 9: Advanced Topics
- Phase 10: Complete Projects

## 🔧 Backend Features

- JWT authentication
- MongoDB user management
- AI-powered code validation (Groq)
- Load-balanced API keys
- Automatic model fallback
- Rate limit handling
- XP and progress tracking
- Email notifications

## 🎨 Frontend Features

- React with Vite
- Tailwind CSS styling
- Monaco Editor for code editing
- Real-time code validation
- Progress tracking
- Leaderboard system
- Daily rewards
- Store system
- Responsive design
- Three.js animations

## 🔑 API Keys

All 5 courses have dedicated Groq API keys configured in `backend/.env`:
- HTML validation
- CSS validation
- JavaScript validation
- Python validation
- Java validation

## ✅ Project Status

- ✅ 500 levels configured
- ✅ 500 level pages created
- ✅ 50 route files updated
- ✅ All timers optimized
- ✅ All test cases correct
- ✅ All API keys configured
- ✅ Zero errors
- ✅ Production ready

## 📖 Documentation

- `README.md` - This file (project overview)
- `FINAL_STATUS.md` - Detailed completion status
- `backend/.env.example` - Environment configuration template

---

**Status**: ✅ PRODUCTION READY
**Last Updated**: March 28, 2026
**Total Levels**: 500
**Build**: Successful
