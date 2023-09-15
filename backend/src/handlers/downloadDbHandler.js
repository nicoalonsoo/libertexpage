const { getDataFromPostgreSQL } = require('../controllers/getUsersDb');
const XLSX = require('xlsx');
const fs = require('fs');

const downloadDbHandler = async (req, res) => {
  try {
    // 1. Obtener datos de la base de datos (reemplaza esto con tu propia consulta)
    const data = await getDataFromPostgreSQL();

    // 2. Crear un libro de trabajo
    const workbook = XLSX.utils.book_new();
    const worksheet = XLSX.utils.json_to_sheet(data);

    // 3. Agregar la hoja de cálculo al libro de trabajo
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Datos');

    // 4. Escribir el libro de trabajo en una variable
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });

    // 5. Guardar la respuesta en un archivo Excel
    fs.writeFileSync('archivo.xlsx', excelBuffer);

    // 6. Configurar las cabeceras de respuesta HTTP
    res.setHeader('Content-Disposition', 'attachment; filename=datos.xlsx');
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');

    // 7. Enviar el archivo Excel como respuesta
    res.status(200).send(excelBuffer);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al exportar los datos a Excel');
  }
};

module.exports = { downloadDbHandler };