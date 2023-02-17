const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {
		//do magic
		let productsInsale = products.filter(product => product.category === 'in-sale')
		let productsVisited = products.filter(product => product.category === 'visited')

		res.render('index', {
			productsVisited,
			productsInsale,
			toThousand
		})
	},
	search: (req, res) => {

		const  name  = req.query.keywords
		console.log(name);
        const autosSearch = products.find( product => product.name.toLowerCase().includes(name))
        res.render('results',{
            producto : autosSearch,
            name,
			toThousand,
           
        })

		console.log(productMachado);

		res.render('results', {
			producto : productMachado
		});

	},
};

module.exports = controller;

	