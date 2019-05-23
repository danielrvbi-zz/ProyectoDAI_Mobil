String.prototype.format = function() {
  a = this;
  for (k in arguments) {
    a = a.replace("{" + k + "}", arguments[k])
  }
  return a
};

//Este código guardará las metas en session storage para meter las metas después
function save_meta(arreglo_metas)
{
    // Recibe las 6 metas y las mete al checkboxlist usando "crea_meta"
    for (let i = 0; i<6; i++) {crea_meta(arreglo_metas[i][0],arreglo_metas[i][1]);}
}

const sql = require('mssql');

(async function () {
    try {
        let pool = await sql.connect(config)
        let result1 = await pool.request()
            .input('input_parameter', sql.Int, value)
            .query('select top(6) from Meta'); //Esto es para mostrar las metas

        save_meta(result1);

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