const databaseservice = () => {
    const knex = require('knex')({
        client: 'mysql',
        connection: {
            host : process.env.DB_HOST,
            port : 3306,
            user : process.env.DB_USER,
            password : process.env.DB_PASS,
            database : process.env.DB,
        }
    });
    const table = 'student';

    const getstudent = () => {
        return knex(table).select();
    };

    const getstudentById = (id) => {
        return knex(table).select().where({ id });
    };

    const crearstudent = (name, age, semester) => {
        return knex(table).insert({
            name: name,
            age: age,
            semester: semester
        });
    };
    const delstudentById = (id) => {
        return knex(table).where({ id }).del();
    };

    const updateStudentById = (id, name, age, semester) => {
        return knex(table).where({ id }).update({ name, age, semester });
    };


    return {crearstudent, getstudent,getstudentById,delstudentById,updateStudentById};
};

module.exports = {
    databaseservice
};