<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<jsp:useBean id="viewModel" scope="request" type="nbcc.simpleproductservlet.viewmodel.ProductListViewModel" />
<!DOCTYPE html>
<html>
<head>
    <title>Products</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-B/GM4XqrwHnWXNOWMbloTmrYXZg10cakYGmpfsR/bbzQ6JAJI4ihuyADKLnBgrCe" crossorigin="anonymous">
    <script type="module" src="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-1a/pXj49ZQ1aHEmrJ+gMw1otqoVsYwlEnlD8mIfY2TV03r20Y0CN7uqx1tQogjPL" crossorigin="anonymous"></script>
</head>
<body>
<div class="container">
    <main role="main" class="pb-3">
        <a href="createProduct">Create Product</a>
        <table class="table">
            <thead>
            <tr>
                <th>Name</th>
                <th>Price</th>
                <th>Manage</th>
            </tr>
            </thead>
            <tbody>
                <c:forEach var="product" items="${viewModel.products}">
                    <tr>
                        <td>${product.name}</td>
                        <td>${product.price}</td>
                        <td>

                        </td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>
        <a href="products">Home</a>
    </main>
</div>
</body>
</html>