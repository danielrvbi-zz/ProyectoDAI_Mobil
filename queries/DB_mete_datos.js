String.prototype.format = function() {
  a = this;
  for (k in arguments) {
    a = a.replace("{" + k + "}", arguments[k])
  }
  return a
};

const correo = sessionStorage.getItem("correo");
const pwd = sessionStorage.getItem("pwd");
const nombre = sessionStorage.getItem("nombre");
const sexo = sessionStorage.getItem("sexo");
const altura = sessionStorage.getItem("altura");
const actividad = sessionStorage.getItem("actividad");
const peso = sessionStorage.getItem("peso");
const num_metas = sessionStorage.getItem("num_metas");

const sql = require('mssql');

(async function () {
    try {
        let pool = await sql.connect(config)
        let result1 = await pool.request()
            .input('input_parameter', sql.Int, value)
            .query('insert into Paciente values({0},{1},{2},{3},{4},{5},{6},{7})'.format(
                correo,
                pwd,
                nombre,
                sexo,
                altura,
                actividad,
                peso,
                num_metas
                )
            )


        // Stored procedure

        let result2 = await pool.request()
            .input('input_parameter', sql.Int, value)
            .output('output_parameter', sql.VarChar(50))
            .execute('procedure_name')

        console.dir(result2)
    } catch (err) {
        // ... error checks
    }
})()

sql.on('error', err => {
    // ... error handler
})