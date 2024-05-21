import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const router = Router();

// Obtener todos los personajes no eliminados
router.get('/', async (req, res) => {
  try {
    const personajes = await prisma.personaje.findMany({
      where: {
        estado: {
          not: 'Eliminado',
        },
      },
    });
    res.json(personajes);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener personajes', error });
  }
});

// Obtener un personaje por ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const personaje = await prisma.personaje.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (personaje && personaje.estado !== 'Eliminado') {
      res.json(personaje);
    } else {
      res.status(404).json({ message: 'Personaje no encontrado o eliminado' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener personaje', error });
  }
});

// Crear un nuevo personaje
router.post('/', async (req, res) => {
  const { nombre, anosExperiencia } = req.body;
  try {
    const personaje = await prisma.personaje.create({
      data: {
        nombre,
        anosExperiencia,
        estado: 'Activo', // Estado predeterminado
      },
    });
    res.json(personaje);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear personaje', error });
  }
});

// Actualizar un personaje por ID
router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { nombre, anosExperiencia, estado } = req.body;
  try {
    const personaje = await prisma.personaje.update({
      where: {
        id: parseInt(id),
      },
      data: {
        nombre,
        anosExperiencia,
        estado,
      },
    });
    res.json(personaje);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar personaje', error });
  }
});

// Eliminar (marcar como eliminado) un personaje por ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const personaje = await prisma.personaje.update({
      where: {
        id: parseInt(id),
      },
      data: {
        estado: 'Eliminado', // Cambiar el estado a 'Eliminado' en lugar de eliminar el registro
      },
    });
    res.json(personaje);
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar personaje', error });
  }
});

export default router;
