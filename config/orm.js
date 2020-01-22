let connection;

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    const arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (const key in ob) {
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            let value = ob[key];
            // if string with spaces,
            // add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === 'string' && value.indexOf(' ') >= 0) {
                value = `'${value}'`;
            }
            // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
            // e.g. {sleepy: true} => ["sleepy=true"]
            arr.push(key + '=' + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

function printQuestionMarks(num) {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push('?');
    }

    return arr.toString();
}

const orm = {
    connectDb: async function () {
        connection = await require('./connect-db')();
    },

    closeDBConnection: function () {
        return connection.end();
    },

    insertNew: async function ({ table, cols, vals }) {
        try {

            let queryString = 'INSERT INTO ' + table;
            queryString += ' (';
            queryString += cols.toString();
            queryString += ') ';
            queryString += 'VALUES (';
            queryString += printQuestionMarks(vals.length);
            queryString += ') ';

            const result = await connection.query(
                queryString,
                table,
            );
            return result;
        } catch (error) {
            return error;
        }
    },

    selectAll: async function ({ tableName }) {
        try {
            const queryString = 'SELECT * FROM ??';
            const result = await connection.query(
                queryString,
                tableName,
            );
            return result;
        } catch (error) {
            return error;
        }
    },

    selectWhere: async function ({ tableName, colName, whereVal }) {
        try {
            const queryString = 'SELECT * FROM ?? WHERE ?? = ?';
            const result = await connection.query(
                queryString,
                [tableName, colName, whereVal],
            );
            return result;
        } catch (error) {
            return error;
        }
    },

};

module.exports = orm;
