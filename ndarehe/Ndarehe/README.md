# NDAREHE.COM - Accommodation & Local Experience Booking Platform

A comprehensive digital platform connecting people with affordable accommodation options across Rwanda, focusing on both urban and rural areas.

**Backend Developer**: Assia Teta

## 🏗️ Project Structure

```
NDAREHE/
├── backend/           # Backend API (Node.js + TypeScript)
│   ├── src/          # Source code
│   ├── prisma/       # Database schema and migrations
│   ├── package.json  # Backend dependencies
│   └── .env         # Backend environment variables
├── frontend/         # Frontend application (Future)
└── README.md        # This file
```

## 🚀 Quick Start

### Backend Development

1. **Navigate to backend directory:**
   ```bash
   cd backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Set up database:**
   ```bash
   npm run db:generate
   npm run db:push
   npm run db:seed
   ```

5. **Start development server:**
   ```bash
   npm run dev
   ```

6. **Access the API:**
   - **API Server**: http://localhost:5000
   - **Swagger Documentation**: http://localhost:5000/api-docs
   - **Health Check**: http://localhost:5000/health

## 📚 Documentation

- **Backend API Documentation**: See `backend/README.md` for detailed API documentation
- **Integration Status**: See `backend/INTEGRATION_STATUS.md` for email, SMS, and payment integration details
- **Swagger UI**: Interactive API documentation at http://localhost:5000/api-docs

## 🛠️ Tech Stack

### Backend
- **Runtime**: Node.js + TypeScript
- **Framework**: Express.js
- **Database**: PostgreSQL + Prisma ORM
- **Authentication**: JWT
- **Email**: Nodemailer
- **SMS**: Twilio
- **Payments**: Stripe
- **Documentation**: Swagger/OpenAPI 3.0

### Frontend (Future)
- **Framework**: React/Next.js
- **Styling**: Tailwind CSS
- **State Management**: Redux/Zustand
- **UI Components**: Headless UI/Radix UI

## 🌟 Features

### Accommodation Booking
- Hotels, guesthouses, apartments, villas, hostels, camping, homestays
- Advanced filtering and search
- Real-time availability
- Instant booking confirmation

### Transportation Services
- Airport pickups
- City transport
- Private transportation
- Vehicle type selection

### Tours & Experiences
- Cultural tours
- Adventure tours
- Food tours
- Educational tours
- Custom tour planning

### Trip Planning
- Personalized recommendations
- Budget planning
- Multi-day itineraries
- Local expert consultation

### Payment Integration
- Multiple payment methods
- Secure payment processing
- Mobile money support
- International cards

### Communication
- Email notifications
- SMS alerts
- Real-time updates
- Multi-language support

## 🔐 Security Features

- JWT authentication
- Role-based access control
- Input validation
- Rate limiting
- CORS protection
- Helmet security headers
- SQL injection prevention

## 📊 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login
- `GET /api/auth/verify-email` - Email verification

### Accommodations
- `GET /api/accommodations` - List accommodations
- `GET /api/accommodations/:id` - Get accommodation details
- `POST /api/accommodations` - Create accommodation (Admin/Provider)

### Bookings
- `POST /api/bookings` - Create booking
- `GET /api/bookings` - Get user bookings
- `PUT /api/bookings/:id/cancel` - Cancel booking

### Payments
- `POST /api/payments` - Process payment
- `GET /api/payments` - Get payment history

### And many more... See Swagger documentation for complete list.

## 🚀 Deployment

### Backend Deployment
1. Navigate to backend directory
2. Set production environment variables
3. Run `npm run build`
4. Start with `npm start`

### Environment Variables
See `backend/.env.example` for all required environment variables.

## 👨‍💻 Development Team

- **Backend Developer**: Assia Teta
- **Project**: NDAREHE.COM Backend API
- **Technologies**: Node.js, TypeScript, Express, PostgreSQL, Prisma

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For support and questions:
- Email: info@ndarehe.com
- Phone: +250 788 123 456
- **Backend Developer**: Assia Teta

## 📝 License

This project is licensed under the MIT License.

---

**NDAREHE.COM** - Where to stay in Rwanda 🇷🇼 