# Mobile Direct - Shopify Trade-in App

A comprehensive Shopify app for device trade-in management with a modern, responsive user interface. This app allows customers to trade in their devices through an intuitive checkout process.

## Features

### Core Functionality

- **Product Search**: Search and select devices for trade-in
- **Device Configuration**: Choose device conditions, storage, and variants
- **Checkout Process**: Complete checkout with multiple payment and shipping options
- **Order Confirmation**: Detailed confirmation page with shipping label generation
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### Technical Features

- **React Router**: Modern React-based routing and state management
- **ID-based CSS Architecture**: Clean, maintainable styling system
- **Component-based Architecture**: Modular, reusable React components
- **Form Validation**: Real-time validation with error handling
- **Session Management**: Secure session storage and management
- **API Integration**: Seamless Shopify API integration

## Tech Stack

### Frontend

- **React 18**: Modern React with hooks and functional components
- **React Router**: Client-side routing and navigation
- **CSS3**: Custom CSS with ID-based architecture
- **Vite**: Fast build tool and development server

### Backend

- **Node.js**: Server runtime
- **Shopify CLI**: Shopify development tools
- **Prisma**: Database ORM and migrations
- **SQLite**: Development database (configurable for production)

### Development Tools

- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **TypeScript**: Type safety (optional)

## Project Structure

```
mb-direct/
|-- app/                          # Main application server
|   |-- routes/                   # Server routes
|   |-- shopify.server.js        # Shopify configuration
|-- extension-src/                # React extension source
|   |-- components/              # React components
|   |   |-- checkout/           # Checkout form components
|   |   |-- Icons.jsx           # Icon components
|   |   |-- Drawer.jsx          # Navigation drawer
|   |   |-- ProductHeader.jsx   # Product display component
|   |   |-- SwatchGroup.jsx     # Selection component
|   |-- pages/                  # Page components
|   |   |-- CheckoutPage.jsx    # Main checkout page
|   |   |-- ConfirmationPage.jsx # Order confirmation
|   |   |-- SearchPage.jsx      # Product search
|   |-- hooks/                  # Custom React hooks
|   |-- utils/                  # Utility functions
|   |-- styles/                 # CSS stylesheets
|   |-- App.jsx                 # Main app component
|-- prisma/                      # Database schema and migrations
|-- extensions/                  # Shopify extensions
```

## Getting Started

### Prerequisites

- Node.js 20.19+ or 22.12+
- Shopify CLI
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Anas-khan0331/shopify-app.git
   cd mb-direct
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   ```bash
   cp .env.example .env
   # Edit .env with your Shopify credentials
   ```

4. **Initialize database**
   ```bash
   npm run setup
   ```

### Development

1. **Start development server**

   ```bash
   npm run dev
   ```

2. **Build extension for development**

   ```bash
   npm run watch:extension
   ```

3. **Open your app**
   - Press `P` when prompted to open the app URL
   - Install the app on your development store
   - Start developing!

## Component Architecture

### Checkout Flow

1. **SearchPage**: Device search and selection
2. **ProductDetailPage**: Device configuration
3. **CheckoutPage**: Multi-step checkout process
   - Personal Information
   - Contact Details
   - Shipping Method
   - Payment Details
4. **ConfirmationPage**: Order confirmation with shipping label

### Key Components

#### CheckoutForm

Main checkout container with step navigation and validation.

#### SwatchGroup

Reusable selection component for options like:

- Payment methods (Bank/PayPal)
- Shipping options (Royal Mail/DPD)
- Device conditions and variants

#### Icons

Custom SVG icon components including:

- Device icons (Reset, Package, Delivery, Payment)
- UI icons (Download, Search, Close)

## Styling System

### ID-based CSS Architecture

The app uses an ID-based CSS system for better maintainability:

```css
/* Component-specific IDs */
#checkout-form {
  /* Main checkout container */
}
#checkout-input-wrapper {
  /* Input field wrapper */
}
#checkout-confirmation {
  /* Confirmation page */
}

/* Responsive design */
@media (max-width: 768px) {
  #checkout-form {
    /* Mobile-specific styles */
  }
}
```

### Responsive Breakpoints

- **Desktop**: 769px+
- **Mobile**: 768px and below

## API Integration

### Shopify Admin API

- Product catalog access
- Order management
- Customer data
- Webhook handling

### Custom Endpoints

- Shipping label generation
- Device valuation
- Order processing

## Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Shopify

```bash
npm run deploy
```

### Environment Variables

Required environment variables for production:

- `SHOPIFY_API_KEY`
- `SHOPIFY_API_SECRET`
- `SHOPIFY_SCOPES`
- `HOST`
- `DATABASE_URL`

## Testing

### Local Testing

- Use Shopify CLI for local development
- Test on multiple devices using responsive design mode
- Validate checkout flow end-to-end

### Cross-device Testing

- Desktop: Chrome, Firefox, Safari
- Mobile: iOS Safari, Android Chrome
- Tablet: iPad Safari, Android Chrome

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Make changes and test thoroughly
4. Commit changes: `git commit -m 'Add new feature'`
5. Push to branch: `git push origin feature/new-feature`
6. Submit a pull request

### Code Style

- Use ESLint for code linting
- Follow ID-based CSS conventions
- Use semantic HTML5 elements
- Implement proper error handling
- Write clean, commented code

## License

This project is proprietary software. All rights reserved.

## Support

For support and questions:

- Create an issue in the GitHub repository
- Contact the development team

## Changelog

### v1.0.0

- Initial release
- Complete checkout flow
- Responsive design implementation
- ID-based CSS architecture
- Shipping label generation
- Multi-device support

---

**Built with React, Shopify, and modern web technologies.**
