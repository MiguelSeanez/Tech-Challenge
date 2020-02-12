const db = require('../database');

module.exports = {

    create: (req, res) => {
        db.query('INSERT INTO purchase SET ?', [{
            id_product: req.body.id_product,
            date_purchase: req.body.date_purchase,
            customer_name: req.body.customer_name,
            quantity: req.body.quantity
        }], (error, purchase) => {
            if (error) {
                res.json(error);
            }
            var rest = req.body.quantity;
            db.query('SELECT stock FROM product WHERE id = ?', [req.body.id_product], (err, resp) => {
                var inStock = resp[0].stock;

                db.query('UPDATE product SET ? WHERE id = ?', [{ stock: (inStock - rest) }, req.body.id_product], (error, row) => {
                    res.json({ success: "You got it." });
                });
            });
        });
    },

    read: (req, res) => {
        db.query('SELECT * FROM purchase', (err, purchases) => {
            if (err) {
                res.json(err);
            }
            res.json(purchases);
        });
    },

    readId: (req, res) => {
        const { id } = req.params;
        db.query('SELECT * FROM purchase WHERE id = ?', [id], (error, purchase) => {
            if (error) {
                res.json(error);
            }
            db.query('SELECT * FROM product WHERE id = ?', [purchase[0].id_product], (err, product) => {
                if (err) {
                    res.json(err);
                }
                let purchaseLog = {
                    id_purchase: id,
                    date_purchase: purchase[0].date_purchase,
                    customer_name: purchase[0].customer_name,
                    product_id: purchase[0].id_product,
                    product_name: product[0].name,
                    product_price: product[0].price,
                    product_description: product[0].description,
                    quantity: purchase[0].quantity,
                    total: (product[0].price * purchase[0].quantity)
                }

                res.json(purchaseLog);
            });
        });
    },

}