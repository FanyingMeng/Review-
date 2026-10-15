<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<html>
<head>
    <title>Create Product</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-B/GM4XqrwHnWXNOWMbloTmrYXZg10cakYGmpfsR/bbzQ6JAJI4ihuyADKLnBgrCe" crossorigin="anonymous">
    <script type="module" src="https://cdn.jsdelivr.net/npm/bootstrap@6.0.0-alpha.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-1a/pXj49ZQ1aHEmrJ+gMw1otqoVsYwlEnlD8mIfY2TV03r20Y0CN7uqx1tQogjPL" crossorigin="anonymous"></script>
</head>
<body>
<div class="container">
    <main role="main" class="pb-3">
        <div class="row">
            <div class="col-md-4">
                <form action="createProduct" method="post">
                    <div class="form-group">
                        <label class="control-label">
                            Name:
                            <input type="text" name="name" class="form-control">
                        </label>
                    </div>
                    <div class="form-group">
                        <label class="control-label">
                            Price:
                            <input type="text" name="price" class="form-control">
                        </label>
                    </div>
                    <div class="form-group">
                        <input type="submit" value="Save" class="btn btn-primary">
                    </div>
                </form>
            </div>
        </div>
    </main>
</div>

<div>
    <a href="products">Go Back</a>
</div>
</body>
</html>
