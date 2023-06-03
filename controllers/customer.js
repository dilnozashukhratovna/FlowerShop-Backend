const db = require("../config/db");

exports.getAllCustomers = (req, res) => {
    db.query("SELECT * FROM CUSTOMERS", (error, results) => {
        if (error) {
            console.log("Error retrieving customers: ", error);
        }
        res.json(results);
    });
};

exports.createCustomer = (req, res) => {
    const { name, email } = req.body;
    db.query(
        "INSERT INTO customers (name, email) VALUES(?, ?)",
        [name, email],
        (error, results) => {
            if (error) {
                console.log("Error creating customer: ", error);
                return res.status(500).json({ error: "Internal Server Error" });
            }
            res.json({
                message: "Customer successfully created!",
                customerId: results.insertId,
            });
        }
    );
};

exports.getCustomerById = (req, res) => {
    const customerId = req.params.id;
    db.query(
        "SELECT * FROM customers WHERE id = ?",
        [customerId],
        (error, results) => {
            if (error) {
                console.log("Error selecting customer by id: ", error);
                return res.status(500).json({ error: "Internal Server Error" });
            }
            if (results.length === 0)
                return res.status(404).json({ error: "Customer not found!" });

            res.json(results[0]);
        }
    );
};

exports.updateCustomer = (req, res) => {
    const customerId = req.params.id;
    const { name, email } = req.body;
    db.query(
        "UPDATE customers SET name = ?, email = ? WHERE id = ?",
        [name, email, customerId],
        (error) => {
            if (error) {
                console.log("Error updating customer by id:", error);
                return res.status(500).json({ error: "Internal Server Error" });
            }
            res.json({ message: "Customer successfully updated!" });
        }
    );
};

exports.deleteCustomer = (req, res) => {
    const customerId = req.params.id;
    db.query("DELETE FROM customers WHERE id = ?", [customerId], (error) => {
        if (error) {
            console.log("Error deleting customer: ", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        res.json({ message: "Customer successfully deleted" });
    });
};
