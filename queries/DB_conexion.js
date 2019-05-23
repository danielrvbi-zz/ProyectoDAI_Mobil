//Esta constante se usará en todas las queries que realizamos

const config = {
    user: 'sa',
    password: 'sqladmin',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'dbdiabetes',

    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
}