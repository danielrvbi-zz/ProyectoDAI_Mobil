String.prototype.format = function() {
  a = this;
  for (k in arguments) {
    a = a.replace("{" + k + "}", arguments[k])
  }
  return a
};

// Se obtiene el tiempo a modificar
tiempo = document.getElementsByClassName("funciona_plis").name.value;

switch (tiempo) {
    case 0:
        tiempo="idRecDes";
        break;
    case 1:
        tiempo="idRecCol";
        break;
    case 2:
        tiempo="idRecCom";
        break;
    case 3:
        tiempo="idRecCol2";
        break;
    case 4:
        tiempo="idRecCen";
        break;
}

const sql = require('mssql');

(async function modifica_menu (idRecetaNueva) {
    try {
        //Obtenemos el idPaciente, que es el correo de sessionStorage
        correo = sessionStorage.getItem("mail");
        let pool = await sql.connect(config)
        let result1 = await pool.request()
            .input('input_parameter', sql.Int, value)
            .query('update table Menu set {0}={1} where correo={3}'.format(
                tiempo,
                idRecetaNueva,
                correo
            ));


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