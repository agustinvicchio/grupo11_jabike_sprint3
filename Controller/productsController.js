const controller = {
    product: (req,res) => {
        res.render('./products/product');
    },
    carrito: (req,res) => {
        res.render('./products/carrito');
    }
}


module.exports = controller;