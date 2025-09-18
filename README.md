# Book Management Dashboard

A modern React.js dashboard for managing books with CRUD operations, built using Vite, TailwindCSS, Redux, Context API, and MVP architecture.

## 🚀 Features

- **Dashboard**: View all books in responsive table/grid layout with toggle view options
- **Search & Filter**: Search by title/author and filter by genre/status with custom dropdowns
- **Pagination**: Navigate through books with 10 items per page using arrow navigation
- **Add/Edit Books**: Separate routes with form validation using React Hook Form
- **Delete Books**: Confirmation dialog before deletion with proper error handling
- **Toast Notifications**: Success/error feedback for all operations using React Hot Toast
- **Loading States**: Custom skeleton loaders and spinners with Framer Motion animations
- **Responsive Design**: Mobile-first approach with TailwindCSS
- **Real API Integration**: Connected to CrudCrud API for persistent data storage

## 🛠️ Tech Stack

### Frontend Framework
- **React.js 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server

### Styling & UI
- **TailwindCSS** - Utility-first CSS framework for responsive design
- **Framer Motion** - Animation library for smooth transitions and loading states

### State Management
- **Redux Toolkit** - Global state management for books data, filters, and pagination
- **Context API** - UI state management for modals and confirmations

### Routing & Navigation
- **React Router DOM** - Client-side routing with separate pages for add/edit operations

### Forms & Validation
- **React Hook Form** - Form handling with built-in validation
- **Controller** - Integration between React Hook Form and custom components

### HTTP Client & API
- **Fetch API** - Native browser API for HTTP requests
- **CrudCrud API** - Real REST API for persistent data storage

### Notifications & UX
- **React Hot Toast** - Toast notifications for user feedback
- **Custom Loading Components** - Skeleton loaders and spinners

### Architecture
- **MVP (Model-View-Presenter)** - Clean architecture pattern
- **Custom Hooks** - Reusable logic with useApi and useBookPresenter
- **Component-based Architecture** - Modular and reusable UI components

## 📁 Project Structure

```
src/
├── api/                 # API endpoints and HTTP methods
│   └── bookApi.jsx     # CrudCrud API integration
├── components/
│   ├── ui/             # Reusable UI components
│   │   ├── Button.jsx  # Custom button with loading states
│   │   ├── Dropdown.jsx # Custom dropdown component
│   │   ├── Input.jsx   # Form input component
│   │   ├── Loader.jsx  # Custom loading spinner
│   │   ├── Modal.jsx   # Modal component
│   │   └── Pagination.jsx # Pagination with arrow navigation
│   ├── common/         # Common components
│   │   ├── BookCard.jsx    # Grid view book card
│   │   ├── BookTable.jsx   # Table view component
│   │   ├── ConfirmDialog.jsx # Delete confirmation
│   │   ├── FilterBar.jsx   # Genre/status filters
│   │   └── SearchBar.jsx   # Search functionality
│   └── layout/         # Layout components
│       └── Layout.jsx  # Main layout with navigation
├── context/            # Context API providers
│   └── AppContext.jsx  # UI state management
├── hooks/              # Custom hooks
│   └── useApi.jsx      # HTTP request hook
├── models/             # Data models
│   └── Book.jsx        # Book model with validation
├── presenters/         # Business logic (MVP)
│   └── BookPresenter.jsx # Book operations presenter
├── store/              # Redux store and slices
│   ├── store.jsx       # Redux store configuration
│   └── booksSlice.jsx  # Books state slice
├── views/              # Page components
│   ├── Dashboard/      # Main dashboard page
│   └── BookForm/       # Add/Edit book pages
└── App.jsx             # Main app component
```

## 🎯 Task Requirements Compliance

### ✅ Frontend Requirements

1. **Home Page (Dashboard)**
   - ✅ Books displayed in both table and grid view with toggle
   - ✅ Shows Title, Author, Genre, Published Year, and Status
   - ✅ Pagination with 10 books per page
   - ✅ Search by title or author functionality
   - ✅ Genre and status filter dropdowns with "All" options

2. **Add/Edit Book Form**
   - ✅ Separate routes (/add-book, /edit-book/:id) instead of modals
   - ✅ Form validation using React Hook Form
   - ✅ Data submission to real API endpoints

3. **Delete Book**
   - ✅ Confirmation dialog before deletion
   - ✅ Toast notifications for success/error actions

4. **Styling/Design**
   - ✅ TailwindCSS for responsive design
   - ✅ Mobile-first approach with responsive breakpoints
   - ✅ Modern UI with proper UX practices

### ✅ API Integration

- ✅ **CrudCrud API** integration with real endpoints:
  - ✅ GET /books - Fetch all books
  - ✅ POST /books - Create new book
  - ✅ PUT /books/:id - Update existing book
  - ✅ DELETE /books/:id - Delete book

### ✅ Bonus Points Achieved

- ✅ **Loading States**: Custom skeleton loaders and spinners during data fetching
- ✅ **State Management**: Redux Toolkit + Context API for comprehensive state management
- ✅ **React Router**: Full navigation with separate routes for all operations
- ✅ **Custom Hooks**: useApi and useBookPresenter for reusable logic
- ✅ **Animations**: Framer Motion for smooth transitions and loading states
- ✅ **Error Handling**: Comprehensive error handling with user feedback
- ✅ **MVP Architecture**: Clean separation of concerns

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd book-management
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

### API Configuration

The app uses CrudCrud API for data persistence. The API endpoint is configured in `src/api/bookApi.jsx`. To use your own endpoint:

1. Visit [CrudCrud.com](https://crudcrud.com) to get a unique endpoint
2. Replace the `API_BASE_URL` in `src/api/bookApi.jsx`

## 📦 Dependencies

### Core Dependencies
```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "react-router-dom": "^6.8.0",
  "@reduxjs/toolkit": "^1.9.0",
  "react-redux": "^8.0.0",
  "react-hook-form": "^7.43.0",
  "framer-motion": "^10.0.0",
  "react-hot-toast": "^2.4.0"
}
```

### Development Dependencies
```json
{
  "@vitejs/plugin-react": "^4.0.0",
  "vite": "^4.4.5",
  "tailwindcss": "^3.3.0",
  "autoprefixer": "^10.4.14",
  "postcss": "^8.4.24"
}
```

## 🎨 Key Features Implementation

### Custom Components
- **Dropdown**: White background dropdown with smooth animations
- **Button**: Multiple variants (primary, secondary, success, danger, outline) with loading states
- **Loader**: Custom spinning loader with different sizes and colors
- **Pagination**: Arrow-based navigation instead of text

### State Management
- **Redux**: Global state for books, filters, pagination, and loading states
- **Context API**: UI state for modals, confirmations, and temporary states
- **Local State**: Component-specific state using React hooks

### Form Handling
- **React Hook Form**: Efficient form handling with minimal re-renders
- **Controller**: Integration with custom dropdown components
- **Validation**: Real-time validation with error messages

### API Integration
- **RESTful API**: Full CRUD operations with proper HTTP methods
- **Error Handling**: Comprehensive error handling with user-friendly messages
- **Loading States**: Visual feedback during API operations

### Responsive Design
- **Mobile-First**: Designed for mobile devices first, then scaled up
- **Flexible Layouts**: Grid and table views that adapt to screen sizes
- **Touch-Friendly**: Optimized for touch interactions

## 🔧 Architecture Patterns

### MVP (Model-View-Presenter)
- **Model**: Book.jsx with validation and data transformation
- **View**: React components for UI rendering
- **Presenter**: BookPresenter.jsx for business logic and API calls

### Component Hierarchy
- **Layout Components**: Navigation and page structure
- **UI Components**: Reusable interface elements
- **Common Components**: Shared business components
- **Page Components**: Route-specific views

## 🎯 Performance Optimizations

- **Lazy Loading**: Components loaded on demand
- **Memoization**: Preventing unnecessary re-renders
- **Efficient State Updates**: Redux Toolkit for optimized state management
- **Skeleton Loading**: Better perceived performance during data fetching

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.