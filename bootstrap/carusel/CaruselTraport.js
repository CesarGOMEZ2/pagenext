
import Imgen2 from "../../img/tempFrio.png";
import Imgen1 from "../../img/tempEstable.png";
import Imgen5 from "../../img/tempCaluroso.png";
import Imgen6 from "../../img/tempArdiente.png";



export const CaruselTraport = {
        getProductsData() {
            return [
                {
                    id: '1000',
                    code: 'f230fh0g3',
                    name: 'Servicio Medico',
                    description: 'El dispositivo esta marcando una temperatura demasiada alta ',
                    image: Imgen6,
                    price: 65,
                    category: 'ALERTA DE TEMPERATURA CRÍTICA" o "TEMPERATURA PELIGROSA',
                    quantity: 24,
                    inventoryStatus: 'INSTOCK',
                    rating: 5
                },
                {
                    id: '1000',
                    code: 'f230fh0g3',
                    name: 'Estacion de Gasolinera',
                    description: 'El dispositivo marca informacion de temperatura media alta',
                    image: Imgen5,
                    price: 65,
                    category: 'Advertencia la temperatura es media alta',
                    quantity: 24,
                    inventoryStatus: 'INSTOCK',
                    rating: 5
                },
                {
                    id: '1000',
                    code: 'f230fh0g3',
                    name: 'Estacion de Microbus',
                    description: 'El dispositivo marca una informacion estable, donde no hay tanto calorni frio ',
                    image: Imgen1,
                    price: 65,
                    category: 'Estable',
                    quantity: 24,
                    inventoryStatus: 'INSTOCK',
                    rating: 5
                },
                {
                    id: '1000',
                    code: 'f230fh0g3',
                    name: 'Es',
                    description: 'El dispocitivo es marcando, una temperatura muy baja ',
                    image: Imgen2,
                    price: 65,
                    category: 'Temperatura "Baja" ',
                    quantity: 24,
                    inventoryStatus: 'INSTOCK',
                    rating: 5
                }
            ];
        },

        getProductsWithOrdersData() {
            return [
                {
                    id: '1000',
                    code: 'f230fh0g3',
                    name: 'Bamboo Watch',
                    description: 'Product Description',
                    image: Imgen6,
                    price: 65,
                    category: 'Accessories',
                    quantity: 24,
                    inventoryStatus: 'INSTOCK',
                    rating: 5,
                    orders: [
                        {
                            id: '1000-0',
                            productCode: 'f230fh0g3',
                            date: '2020-09-13',
                            amount: 65,
                            quantity: 1,
                            customer: 'David James',
                            status: 'PENDING'
                        },
                        {
                            id: '1000-1',
                            productCode: 'f230fh0g3',
                            date: '2020-05-14',
                            amount: 130,
                            quantity: 2,
                            customer: 'Leon Rodrigues',
                            status: 'DELIVERED'
                        },
                        {
                            id: '1000-2',
                            productCode: 'f230fh0g3',
                            date: '2019-01-04',
                            amount: 65,
                            quantity: 1,
                            customer: 'Juan Alejandro',
                            status: 'RETURNED'
                        },
                        {
                            id: '1000-3',
                            productCode: 'f230fh0g3',
                            date: '2020-09-13',
                            amount: 195,
                            quantity: 3,
                            customer: 'Claire Morrow',
                            status: 'CANCELLED'
                        }
                    ]
                },
                {
                    id: '1000',
                    code: 'f230fh0g3',
                    name: 'Bamboo Watch',
                    description: 'Product Description',
                    image: Imgen5,
                    price: 65,
                    category: 'Accessories',
                    quantity: 24,
                    inventoryStatus: 'INSTOCK',
                    rating: 5,
                    orders: [
                        {
                            id: '1000-0',
                            productCode: 'f230fh0g3',
                            date: '2020-09-13',
                            amount: 65,
                            quantity: 1,
                            customer: 'David James',
                            status: 'PENDING'
                        },
                        {
                            id: '1000-1',
                            productCode: 'f230fh0g3',
                            date: '2020-05-14',
                            amount: 130,
                            quantity: 2,
                            customer: 'Leon Rodrigues',
                            status: 'DELIVERED'
                        },
                        {
                            id: '1000-2',
                            productCode: 'f230fh0g3',
                            date: '2019-01-04',
                            amount: 65,
                            quantity: 1,
                            customer: 'Juan Alejandro',
                            status: 'RETURNED'
                        },
                        {
                            id: '1000-3',
                            productCode: 'f230fh0g3',
                            date: '2020-09-13',
                            amount: 195,
                            quantity: 3,
                            customer: 'Claire Morrow',
                            status: 'CANCELLED'
                        }
                    ]
                },
                {
                    id: '1000',
                    code: 'f230fh0g3',
                    name: 'Bamboo Watch',
                    description: 'Product Description',
                    image: Imgen1,
                    price: 65,
                    category: 'Accessories',
                    quantity: 24,
                    inventoryStatus: 'INSTOCK',
                    rating: 5,
                    orders: [
                        {
                            id: '1000-0',
                            productCode: 'f230fh0g3',
                            date: '2020-09-13',
                            amount: 65,
                            quantity: 1,
                            customer: 'David James',
                            status: 'PENDING'
                        },
                        {
                            id: '1000-1',
                            productCode: 'f230fh0g3',
                            date: '2020-05-14',
                            amount: 130,
                            quantity: 2,
                            customer: 'Leon Rodrigues',
                            status: 'DELIVERED'
                        },
                        {
                            id: '1000-2',
                            productCode: 'f230fh0g3',
                            date: '2019-01-04',
                            amount: 65,
                            quantity: 1,
                            customer: 'Juan Alejandro',
                            status: 'RETURNED'
                        },
                        {
                            id: '1000-3',
                            productCode: 'f230fh0g3',
                            date: '2020-09-13',
                            amount: 195,
                            quantity: 3,
                            customer: 'Claire Morrow',
                            status: 'CANCELLED'
                        }
                    ]
                },
                {
                    id: '1000',
                    code: 'f230fh0g3',
                    name: 'Bamboo Watch',
                    description: 'Product Description',
                    image: Imgen2,
                    price: 65,
                    category: 'Accessories',
                    quantity: 24,
                    inventoryStatus: 'INSTOCK',
                    rating: 5,
                    orders: [
                        {
                            id: '1000-0',
                            productCode: 'f230fh0g3',
                            date: '2020-09-13',
                            amount: 65,
                            quantity: 1,
                            customer: 'David James',
                            status: 'PENDING'
                        },
                        {
                            id: '1000-1',
                            productCode: 'f230fh0g3',
                            date: '2020-05-14',
                            amount: 130,
                            quantity: 2,
                            customer: 'Leon Rodrigues',
                            status: 'DELIVERED'
                        },
                        {
                            id: '1000-2',
                            productCode: 'f230fh0g3',
                            date: '2019-01-04',
                            amount: 65,
                            quantity: 1,
                            customer: 'Juan Alejandro',
                            status: 'RETURNED'
                        },
                        {
                            id: '1000-3',
                            productCode: 'f230fh0g3',
                            date: '2020-09-13',
                            amount: 195,
                            quantity: 3,
                            customer: 'Claire Morrow',
                            status: 'CANCELLED'
                        }
                    ]
                }
            
            ];
        },

        getProductsMini() {
            return Promise.resolve(this.getProductsData().slice(0, 5));
        },

        getProductsSmall() {
            return Promise.resolve(this.getProductsData().slice(0, 10));
        },

        getProducts() {
            return Promise.resolve(this.getProductsData());
        },

        getProductsWithOrdersSmall() {
            return Promise.resolve(this.getProductsWithOrdersData().slice(0, 10));
        },

        getProductsWithOrders() {
            return Promise.resolve(this.getProductsWithOrdersData());
        }
    };