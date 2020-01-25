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

    insertNew: async function ({ table, cols, vals }, cb) {
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
                vals,
            );
            return cb(result);
        } catch (error) {
            return cb(error);
        }
    },

    selectAll: async function ({ table }, cb) {
        try {
            const queryString = 'SELECT * FROM questions';
            const result = await connection.query(
                queryString,
            );
            return cb(result);
        } catch (error) {
            return cb(error);
        }
    },

    selectQuestions: async function ({ topic, level }, cb) {
        try {
            let queryString = 'SELECT * ';
            queryString += 'FROM questions ';
            queryString += 'WHERE topic_id = ' + topic.toString();
            queryString += ' AND level_id = ' + level.toString();

            const result = await connection.query(
                queryString,
            );
            return cb(result);
        } catch (error) {
            return cb(error);
        }
    },

    createNewUser: async function ({ firstname, lastname, email, picture }, cb) {
        try {

            let queryString = 'SELECT * FROM users WHERE email = ';
            queryString += '"' + email.toString();
            queryString += '"';

            const existcheck = await connection.query(
                queryString,
            );

            // return the existing row from the user table if applicable.
            if (existcheck.length > 0) { return cb(existcheck); }

            queryString = 'INSERT INTO users ';
            queryString += '(first_name, last_name, email, picture) ';
            queryString += 'VALUES (';
            queryString += '"' + firstname.toString() + '", ';
            queryString += '"' + lastname.toString() + '", ';
            queryString += '"' + email.toString() + '", ';
            queryString += '"' + picture.toString() + '")';

            const result = await connection.query(
                queryString,
            );

            const newUserID = result.insertId;

            queryString = 'INSERT INTO userprogress ';
            queryString += '(user_id, topic_id, level_id, topic_mastered) VALUES ';
            queryString += '(' + newUserID + ', 1, 1, false),';
            queryString += '(' + newUserID + ', 1, 2, false),';
            queryString += '(' + newUserID + ', 1, 3, false),';
            queryString += '(' + newUserID + ', 2, 1, false),';
            queryString += '(' + newUserID + ', 2, 2, false),';
            queryString += '(' + newUserID + ', 2, 3, false),';
            queryString += '(' + newUserID + ', 3, 1, false),';
            queryString += '(' + newUserID + ', 3, 2, false),';
            queryString += '(' + newUserID + ', 3, 3, false),';
            queryString += '(' + newUserID + ', 4, 1, false),';
            queryString += '(' + newUserID + ', 4, 2, false),';
            queryString += '(' + newUserID + ', 4, 3, false),';
            queryString += '(' + newUserID + ', 5, 1, false),';
            queryString += '(' + newUserID + ', 5, 2, false),';
            queryString += '(' + newUserID + ', 5, 3, false),';
            queryString += '(' + newUserID + ', 6, 1, false),';
            queryString += '(' + newUserID + ', 6, 2, false),';
            queryString += '(' + newUserID + ', 6, 3, false)';

            const progress = await connection.query(
                queryString,
            );

            console.log('User progress rows inserted: ' + progress.affectedRows);

            // return the new row from the user table.
            queryString = 'SELECT * FROM users WHERE id = ' + newUserID;
            const newuser = await connection.query(
                queryString,
            );

            return cb(newuser);
        } catch (error) {
            return cb(error);
        }
    },

    updateUserprogress: async function ({ user, topic }, cb) {
        try {
            let queryString = 'UPDATE userprogress ';
            queryString += 'SET topic_mastered = true ';
            queryString += 'WHERE user_id = ' + user.toString();
            queryString += ' AND topic_id = ' + topic.toString();

            const result = await connection.query(
                queryString,
            );
            return cb(result);
        } catch (error) {
            return cb(error);
        }
    },

    selectUserprogress: async function ({ email }, cb) {
        try {
            let queryString = 'SELECT topic_id, level_id, topic_mastered ';
            queryString += 'FROM userprogress ';
            queryString += 'WHERE user_id IN ';
            queryString += '(SELECT id FROM users WHERE email = ';
            queryString += '"' + email.toString();
            queryString += '")';

            const result = await connection.query(
                queryString,
            );
            return cb(result);
        } catch (error) {
            return cb(error);
        }
    },
};

module.exports = orm;
