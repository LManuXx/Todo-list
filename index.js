const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./src/db');
const { router: authRoutes } = require('./src/routes/auth'); // Agregar destructuring
const taskRoutes = require('./src/routes/task');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const app = express();
const PORT = 3000;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials:true
}));
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());
app.use(cookieParser());

// Rutas de autenticación
app.use('/api/auth', authRoutes);

// Rutas de tareas
app.use('/api/users', taskRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});