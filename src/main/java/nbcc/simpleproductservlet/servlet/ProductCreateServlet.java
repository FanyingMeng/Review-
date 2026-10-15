package nbcc.simpleproductservlet.servlet;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import nbcc.simpleproductservlet.entity.Product;
import nbcc.simpleproductservlet.repository.ProductRepository;
import nbcc.simpleproductservlet.repository.ProductRepositoryFactory;

import java.io.IOException;

@WebServlet("/createProduct")
public class ProductCreateServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        getServletContext().getRequestDispatcher("/product/create.jsp").forward(request, response);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        Product product = getProduct(request);

        ProductRepository productRepo = ProductRepositoryFactory.create();
        productRepo.insert(product);

        response.sendRedirect("products");
    }

    public static Product getProduct(HttpServletRequest request) {


        String name = request.getParameter("name");

        String priceString = request.getParameter("price");
        var price = Double.parseDouble(priceString);

        Product product = new Product();


        product.setName(name);
        product.setPrice(price);

        return product;
    }
}
