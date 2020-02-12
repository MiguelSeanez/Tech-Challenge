const db = require('../database');

module.exports = {

    create: async (req, res) => {
        try {
            await db.query('INSERT INTO product SET ?', [{
                name: req.body.name,
                price: req.body.price,
                description: req.body.description,
                stock: req.body.stock
            }], (error, product) => {
                if (error){
                    return res.json(error);
                } 
                res.json({ success: "Product created." });
            });
        } catch (error) {
            return res.json(error);
        }
    },

    read: (req, res) => {
        db.query('SELECT * FROM product', (error, products) => {
            if (error) {
                res.json(err);
            }
            res.json( products );
        });
    },

    readId: (req, res) => {
        const { id } = req.params;
        db.query('SELECT * FROM product WHERE id = ?', [id], (error, product) => {
            if (error) {
                res.json(error);
            }
            res.json( product );
        });
    },

    readName: (req, res) => {
        const { name } = req.params;
        db.query('SELECT * FROM product WHERE name = ?', [name], (error, product) => {
            if (error) {
                res.json(error);
            }
            res.json( product );
        });
    },

    update: (req, res) => {
        const { id } = req.params;
        db.query('UPDATE product SET ? WHERE id = ?', [{
            price: req.body.price,
            description: req.body.description
            }, id], (error, product) => {
            if (error) {
                res.json(error);
            }
            res.json( { success: "Product updated." } );
        });
    },

    delete: (req, res) => {
        const { id } = req.params;
        db.query('DELETE FROM product WHERE id = ?', [id], (error, product) => {
            if (error) {
                res.json(error);
            }
            res.json( { success: "Product deleted." } );
        });
    }

}