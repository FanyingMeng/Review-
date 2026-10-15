package nbcc.simpleproductservlet.repository;

import jakarta.persistence.*;
import nbcc.simpleproductservlet.entity.Product;

import java.util.List;

public class ProductJPARepository implements ProductRepository {

    private static final EntityManagerFactory emf = Persistence.createEntityManagerFactory("default");

    @Override
    public List<Product> getAll() {
        try (EntityManager em = emf.createEntityManager()) {
            TypedQuery<Product> query = em.createQuery("Select p from Product p", Product.class);
            return query.getResultList();
        }
    }

    @Override
    public Product get(Long productId) {
        try (EntityManager em = emf.createEntityManager()) {
            return em.find(Product.class, productId);
        }
    }

    @Override
    public void insert(Product product) {
        try (EntityManager em = emf.createEntityManager()) {
            EntityTransaction tx = em.getTransaction();
            tx.begin();
            em.persist(product);
            tx.commit();
        }
    }

    @Override
    public void update(Product product) {
        try (EntityManager em = emf.createEntityManager()) {
            EntityTransaction tx = em.getTransaction();
            tx.begin();
            em.merge(product);
            tx.commit();
        }
    }

    @Override
    public void delete(long productId) {
        try (EntityManager em = emf.createEntityManager()) {
            Product product = em.find(Product.class, productId);
            if (product != null) {
                EntityTransaction tx = em.getTransaction();
                tx.begin();
                em.remove(product);
                tx.commit();
            }
        }
    }
}
