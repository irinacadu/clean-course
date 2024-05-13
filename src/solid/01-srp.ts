(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    getProduct(id: number) {
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      console.log("Guardando en base de datos", product);
    }
  }

  class ProductBloc {

    private productService :ProductService;
    private mail: SendMail;
    constructor(
        productService :ProductService,
        mail: SendMail

    ){
        this.productService = productService,
        this.mail = mail
    }
    loadProduct(id: number) {

    this.productService.getProduct(id)
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
    this.productService.saveProduct(product);
      console.log("Guardando en base de datos", product);
    }
    notifyClients() {
        this.mail.sendEmail(['email@email.com'],'toclientes')
        console.log("Enviando correo a los clientes");
      }
  }

  class SendMail {
    sendEmail(emailList:string[], template :'toclientes') {
      console.log("Enviando correo a los clientes",template);
    }
  }

  class CartBloc {
    private itemsInCart: Object[] = [];
    onAddToCart(productId: number) {
      console.log("Agregando al carrito ", productId);
    }
  }

  const productService=new ProductService();
  const cartBloc = new CartBloc();
  const sendEmail = new SendMail();
  const productBloc = new ProductBloc(productService,sendEmail);
  
  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: "OLED TV" });
  sendEmail.sendEmail(['email'], 'toclientes');
  cartBloc.onAddToCart(10);
})();
