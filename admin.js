const products = [ 'ASUS F15', 'Lenovo Legion' ];

let userInput = prompt('What do you wish to do?');
// AS long as the input is not quit and q (it must be q or quit)
while (userInput !== 'quit' && userInput !== 'q') {
	// if user input is 'list'
	if (userInput === 'list') {
		console.log('*************');
		//for loop to get all the data in the products array
		for (let i = 0; i < products.length; i++) {
			console.log(`${i}: ${products[i]}`);
		}
		console.log('*************');
		// if user input is 'new'
	} else if (userInput === 'new') {
		const newProduct = prompt('What product would you like to add?');
		// using push method to put new product (stack)
		products.push(newProduct);
		console.log(`${newProduct} added to the inventory`);
		// if user input is delete
	} else if (userInput === 'delete') {
		const indexDelete = parseInt(prompt('Enter the index of a product to delete: '));
		// checking whether the user input an index (integer/number)
		if (!Number.isNaN(indexDelete)) {
			// using splice to delete the data from the array according to the user's input
			const deleted = products.splice(indexDelete, 1);
			console.log(`Okay, you have deleted ${deleted}`);
		} else {
			console.log('Unknown index');
		}
	}
	userInput = prompt('What do you wish to do?');
}

console.log('Thank you for using our services');
