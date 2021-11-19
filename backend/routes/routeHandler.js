const connection = require("../config/database");

module.exports.getList = ( id, tableName, req, res) => {
    let sort = JSON.parse(req.query.sort);
    let type = id;
    let order = "ASC";
    if (sort) {
        type = sort[0] == "id" ? id : sort[0];
        order = sort[1];
    }

    connection.query(`SELECT * FROM ${tableName} ORDER BY ${type} ${order}`,
        function (err, result) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            else {
                res.set('Content-Range', 'users 0-24/' + result.length);
                res.set('Access-Control-Expose-Headers', 'Content-Range');
                res.set('X-Total-Count', 10);
                res.send(result);
            }
        });
}

module.exports.create = (tableName, req, res) => {
    const new_body = req.body;
    let keys = Object.keys(new_body);
    let values = Object.values(new_body);

    connection.query(`INSERT INTO ${tableName} (${keys.map(key => key)}) VALUES(${values.map(value => { if (typeof (value) == "string") return `"${value}"`; return value; })})`,
        function (err, result) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                console.log(result);
                res.send(new_body);
            }
        }
    );
}

module.exports.getOne = (tableName, id,parameter_name,req,res) => {
    const parameter = req.params[parameter_name];

    connection.query(`SELECT * FROM ${tableName} WHERE ${id} = "${parameter}"`,
        function (err, result) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            else {
                const new_row = result[0];
                res.send(new_row);
            }
        });
}

module.exports.updateOne = (tableName ,id, paramater_name, column_list , req,res) => {
    const new_data = req.body;
    const parameter = req.params[paramater_name];

    const columns = column_list;
    let update_values = [];

    for (var i = 0; i < columns.length; i++) {
        update_values.push({
            value: new_data[columns[i]],
            column: columns[i],
        })
    }

    for (var j = 0; j < update_values.length; j++) {
        connection.query(`UPDATE ${tableName} SET ${update_values[j].column} = "${update_values[j].value}" ` +
            ` WHERE ${id} = "${parameter}"`,
            function (err, result) {
                if (err) {
                    console.log(err);
                    res.send(err);
                }
            });
    }
    res.send(new_data);
}

module.exports.deleteOne = (tableName, id,parameter_name, req, res) => {
    const parameter = req.params[parameter_name];

    connection.query(`DELETE FROM ${tableName} WHERE ${id} = "${parameter}"`,
        function (err, result) {
            if (err) {
                console.log(err);
                res.send(err);
            } else {
                const deleted = result[0];
                res.send(deleted);
            }
        });
}

module.exports.deleteMany = (tableName, id, req, res) => {
    const parameters = JSON.parse(req.query.filter).ids;

    for (var i = 0; i < parameters.length; i++) {
        connection.query(`DELETE FROM ${tableName} WHERE ${id} = "${parameters[i]}"`,
            function (err, result) {
                if (err) {
                    console.log(err);
                    res.send(err);
                }
            });
    }
    res.send(parameters);
}