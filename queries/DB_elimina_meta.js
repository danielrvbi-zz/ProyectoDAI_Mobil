String.prototype.format = function() {
  a = this;
  for (k in arguments) {
    a = a.replace("{" + k + "}", arguments[k])
  }
  return a
};

const sql = require('mssql');

(async function DBelimnar_metas(arreglo_metas) {
    try {
        let pool = await sql.connect(config)
        for (let i = 0; i < arreglo_metas.length; i++) {
            let result1 = await pool.request()
                .input('input_parameter', sql.Int, value)
                .query("delete from meta_paciente where idmeta={0}".format(arreglo_metas[i][0]));
        }


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