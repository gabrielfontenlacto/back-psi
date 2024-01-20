import { pool } from "../db.js";
import axios from "axios";
import moment from "moment";

export const getUsers = async (req, res) => {
  try {
    const response = await pool.query("SELECT * FROM usuarios");
    res.status(200).json(response[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los usuarios");
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await pool.query("SELECT * FROM usuarios WHERE id = ?", [
      id,
    ]);
    res.status(200).json(response[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener el usuario");
  }
};

export const deleteUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await pool.query("DELETE FROM usuarios WHERE id = ?", [
      id,
    ]);
    res.status(200).json(response[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al eliminar el usuario");
  }
};

export const createUser = async (req, res) => {
  console.log(req.body);
  try {
    const {
      genero,
      nombre,
      apellido,
      correoElectronico,
      nacimiento,
      coordenadas,
      localizacion,
    } = req.body;

    const nacimientoDate = moment(nacimiento, "DD/MM/YYYY HH:mm").toDate();

    // Obtener la geolocalización inversa de Nominatim
    const [lat, lon] = coordenadas.split(",");
    const nominatimResponse = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    );

    // Guardar la dirección en la base de datos
    const localizacion2 = nominatimResponse.data.display_name;

    const response = await pool.query(
      "INSERT INTO usuarios (genero , nombre , apellido , correoElectronico , nacimiento , coordenadas, localizacion) VALUES (? , ? , ? , ? , ? , ?, ?)",
      [
        genero,
        nombre,
        apellido,
        correoElectronico,
        nacimientoDate,
        coordenadas,
        localizacion2,
      ]
    );
    res.status(201).json({ message: "Usuario creado con exito" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al crear el usuario" });
  }
};

export const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      genero,
      nombre,
      apellido,
      correoElectronico,
      nacimiento,
      coordenadas,
      localizacion,
    } = req.body;

    const nacimientoDate = moment(nacimiento, "DD/MM/YYYY HH:mm").toDate();

    // Obtener la geolocalización inversa de Nominatim
    const [lat, lon] = coordenadas.split(",");
    const nominatimResponse = await axios.get(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
    );

    // Guardar la dirección en la base de datos
    const localizacion2 = nominatimResponse.data.display_name;
    console.log(localizacion2);
    const response = await pool.query(
      "INSERT INTO usuarios (genero , nombre , apellido , correoElectronico , nacimiento , coordenadas, localizacion) VALUES (? , ? , ? , ? , ? , ?, ?)",
      [
        genero,
        nombre,
        apellido,
        correoElectronico,
        nacimientoDate,
        coordenadas,
        localizacion2,
      ]
    );
    res.status(201).json({ message: "Usuario creado con exito" });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al modi crear el usuario");
  }
};

export const getUsersByGender = async (req, res) => {
  try {
    const { genero } = req.params;
    const response = await pool.query(
      "SELECT * FROM usuarios WHERE genero = ?",
      [genero]
    );
    res.status(200).json(response[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los usuarios");
  }
};

export const getUsersByName = async (req, res) => {
  try {
    const { name } = req.params;

    const response = await pool.query(
      "SELECT * FROM usuarios WHERE nombre = ?",
      [name]
    );
    res.status(200).json(response[0]);
    console.log(response[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los usuarios");
  }
};

export const getUsersBySurname = async (req, res) => {
  try {
    const { surname } = req.params;
    console.log(surname);
    const response = await pool.query(
      "SELECT * FROM usuarios WHERE apellido = ?",
      [surname]
    );
    res.status(200).json(response[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los usuarios");
  }
};

export const getUsersByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const response = await pool.query(
      "SELECT * FROM usuarios WHERE correoElectronico = ?",
      [email]
    );
    res.status(200).json(response[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los usuarios");
  }
};

export const getUsersByBirthdate = async (req, res) => {
  try {
    const { birthdate } = req.params;

    const response = await pool.query(
      "SELECT * FROM usuarios WHERE nacimiento = ?",
      [birthdate]
    );
    res.status(200).json(response[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los usuarios");
  }
};

export const getUsersByCoordinates = async (req, res) => {
  try {
    const { coordinates } = req.params;
    const response = await pool.query(
      "SELECT * FROM usuarios WHERE coordenadas = ?",
      [coordinates]
    );
    res.status(200).json(response[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al obtener los usuarios");
  }
};
