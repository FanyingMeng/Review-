package nbcc.simpleproductservlet.servlet;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import nbcc.simpleproductservlet.entity.Product;
import nbcc.simpleproductservlet.repository.ProductRepository;
import nbcc.simpleproductservlet.repository.ProductRepositoryFactory;
import nbcc.simpleproductservlet.viewmodel.ProductListViewModel;

import java.io.IOException;
import java.util.List;

@WebServlet({"/", "/products"})
public class ProductListServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        ProductRepository productRepo = ProductRepositoryFactory.create();

        List<Product> products = productRepo.getAll();
        ProductListViewModel viewModel = new ProductListViewModel();

        viewModel.setProducts(products);
        request.setAttribute("viewModel", viewModel);

        getServletContext().getRequestDispatcher("/product/list.jsp").forward(request, response);
    }
}
