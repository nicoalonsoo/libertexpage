// const ExcelJS = require('exceljs');
// const { getDataFromPostgreSQL } = require('../controllers/getUsersDb');

// const downloadDbHandler = (async (req, res) => {
//   try {
//     // 1. Obtener datos de la base de datos (reemplaza esto con tu propia consulta)
//     const data = await getDataFromPostgreSQL();
//     console.log(data);
//     // 2. Crear un libro de Excel
//     const workbook = new ExcelJS.Workbook();
//     const worksheet = workbook.addWorksheet('Datos');

//     // Agregar los datos a la hoja de cálculo
//     data.forEach((row) => {
//       worksheet.addRow(row);
//     });

//     // 3. Guardar el libro de Excel en un archivo
//     const excelBuffer = await workbook.xlsx.writeBuffer();

//     // 4. Enviar el archivo Excel como respuesta
//     res.setHeader('Content-Disposition', 'attachment; filename=datos.xlsx');
//     res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
//     res.send(excelBuffer);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error al exportar los datos a Excel');
//   }
// });

// module.exports = { downloadDbHandler };