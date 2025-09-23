# Civic Connectors Dashboard

A clean and modern civic issue reporting dashboard built with React and TailwindCSS. This dashboard provides a professional yet user-friendly interface for managing civic issues like roads, water, electricity, sanitation, and more.

## Features

- **Modern Dashboard Layout**: Clean sidebar navigation with intuitive icons and user profile
- **Real-time Statistics**: Four key metric cards showing Total Issues, Resolved, Pending, and In-Progress counts
- **Interactive Data Table**: Comprehensive table with ID, Category, Location, Status, Priority, Date, and Actions
- **Smart Filtering**: Filter issues by category and status with dropdown selectors
- **Status Management**: Update issue status with a clean modal interface
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile
- **Professional Styling**: Soft shadows, rounded corners, and a minimal color palette

## Technology Stack

- **React 18**: Modern React with hooks and functional components
- **TailwindCSS**: Utility-first CSS framework for rapid styling
- **JavaScript ES6+**: Modern JavaScript features
- **HTML5**: Semantic markup structure

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd civic-connectors-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

To create a production build:

```bash
npm run build
```

The build files will be in the `build` directory.

## Project Structure

```
src/
├── components/
│   ├── Sidebar.js          # Navigation sidebar component
│   ├── Header.js           # Top header with notifications and profile
│   ├── StatCards.js        # Statistics cards component
│   ├── Filters.js          # Filter controls component
│   └── IssuesTable.js      # Main issues table with actions
├── data/
│   └── mockData.js         # Sample data for issues and categories
├── App.js                  # Main application component
├── index.js               # Application entry point
└── index.css              # Global styles and TailwindCSS imports
```

## Key Components

### StatCards
Displays four key metrics with icons, values, and trend indicators:
- Total Issues
- Resolved Issues
- Pending Issues
- In-Progress Issues

### IssuesTable
Interactive table with:
- Sortable columns
- Status and priority badges
- Action buttons for status updates
- Responsive design
- Empty state handling

### Filters
Smart filtering system with:
- Category dropdown (Roads, Water, Sanitation, etc.)
- Status dropdown (All, Pending, In-Progress, Resolved)
- Clean, accessible UI

## Customization

### Colors
The dashboard uses a carefully selected color palette defined in `tailwind.config.js`:
- Primary: Blue tones (#0ea5e9, #0284c7)
- Success: Green tones (#22c55e, #16a34a)
- Warning: Yellow tones for pending status
- Neutral: Gray tones for text and backgrounds

### Styling
Custom CSS classes are defined in `src/index.css` using Tailwind's `@layer` directive for:
- Button styles (primary, secondary)
- Card components
- Status badges
- Sidebar navigation

## Data Structure

Issues are structured with the following properties:
```javascript
{
  id: 'CIV-001',
  category: 'Roads',
  title: 'Pothole on Main Street',
  location: 'Main Street, Downtown',
  status: 'pending', // pending, in-progress, resolved
  priority: 'high', // high, medium, low
  reporter: 'John Smith',
  createdAt: '2024-01-15T10:30:00Z',
  updatedAt: '2024-01-15T10:30:00Z',
  description: 'Issue description...'
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support or questions, please contact the development team or create an issue in the repository.

