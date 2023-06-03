const db = require("../config/db");

exports.getAllOrders = (req, res) => {
    db.query("SELECT * FROM orders", (error, results) => {
        if (error) {
            console.log("Error selecting all from orders", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
        res.json(results);
    });
};

exports.createOrder = (req, res) => {
    const { customer_id, flower_id, quantity } = req.body;
    db.query(
        "INSERT INTO orders (customer_id, flower_id, quantity) VALUES(?, ?, ?)",
        [customer_id, flower_id, quantity],
        (error, results) => {
            if (error) {
                console.log("Error inserting to orders: ", error);
                return res.status(500).json({ error: "Internal Server Error" });
            }
            res.json({ 
                message: "Order Successfully Created!",
                orderId: results.insertId,
            });
        }
    );
};

exports.getOrderById = (req, res) => {
    const orderId = req.params.id;
    db.query(
        "SELECT * FROM orders WHERE id = ?",
        [orderId],
        (error, results) => {
            if (error) {
                console.log("Error retrieving order: ", error);
                return res.status(500).json({ error: "Internal Server Error" });
            }
            if (results.length === 0) {
                return res.status(404).json({ error: "Order not found" });
            }
            res.json(results[0]);
        }
    ); 
};

exports.updateOrder = (req, res) => {
    const orderId = req.params.id;
    const { customer_id, flower_id, quantity } = req.body;
    db.query(
        "UPDATE orders SET customer_id=?, flower_id=?, quantity=? WHERE id = ?",
        [customer_id, flower_id, quantity, orderId],
        (error) => {
            if (error) {
                console.log("Error updating order: ", error);
                return res.status(500).json({ error: "Internal Server Error" }); 
            } 
            res.json({ message: "Order successfully updated" });
        }
    ); 
};

exports.deleteOrder = (req, res) => {  
    const orderId = req.params.id;
    db.query("DELETE FROM orders WHERE id = ?", [orderId], (error) => {
        console.log("Error deleting order: ", error);
        return res.status(500).json({ error: "Internal Server Error" });
    });
    res.json({ message: "Order successfully deleted" }); 
}; 

