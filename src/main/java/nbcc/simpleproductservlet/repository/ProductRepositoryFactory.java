package nbcc.simpleproductservlet.repository;

public class ProductRepositoryFactory {

    public static ProductRepository create() {
        return new ProductJPARepository();
    }
}
