interface Product {
	productImage: string;
	productName: string;
	productPrice: number;
	isFeatured: boolean;
	productDescription: string;
}

export interface NewProductProps {
	product: Product[];
}
