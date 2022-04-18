import React, { useState } from 'react';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// components
import PageTitle from '../../../components/PageTitle';

// dummy data
import { products as data, ProductItemTypes } from './data';

// pagination
const Pagination = () => {
    return (
        <Row>
            <Col>
                <ul className="pagination pagination-rounded justify-content-end mb-3">
                    <li className="page-item">
                        <Link className="page-link" to="#" aria-label="Previous">
                            <span aria-hidden="true">«</span>
                            <span className="visually-hidden">Previous</span>
                        </Link>
                    </li>
                    <li className="page-item active">
                        <Link className="page-link" to="#">
                            1
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" to="#">
                            2
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" to="#">
                            3
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" to="#">
                            4
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" to="#">
                            5
                        </Link>
                    </li>
                    <li className="page-item">
                        <Link className="page-link" to="#" aria-label="Next">
                            <span aria-hidden="true">»</span>
                            <span className="visually-hidden">Next</span>
                        </Link>
                    </li>
                </ul>
            </Col>
        </Row>
    );
};

const ProductBox = ({ product }: { product: ProductItemTypes }) => {
    const rating: number = Math.floor(product.rating || 0);
    const emptyStars: number = Math.floor(rating < 5 ? 5 - rating : 0);

    return (
        <Card className="product-box">
            <div className="product-img">
                <div className="p-3">
                    <img src={product.image} alt="" className="img-fluid" />
                </div>
                <div className="product-action">
                    <div className="d-flex">
                        <Link to="#" className="btn btn-white d-block w-100 action-btn m-2">
                            <i className="ri-edit-2-fill align-middle"></i> Edit
                        </Link>
                        <Link to="#" className="btn btn-white d-block w-100 action-btn m-2">
                            <i className="ri-delete-bin-fill align-middle"></i> Delete
                        </Link>
                    </div>
                </div>
            </div>

            <div className="product-info border-top p-3">
                <div>
                    <h5 className="font-16 mt-0 mb-1">
                        <Link to="/apps/ecommerce/product-details" className="text-dark">
                            {product.product}
                        </Link>
                    </h5>
                    <p className="text-muted">
                        {([...Array(rating)] || []).map((x, i) => (
                            <i key={i} className="mdi mdi-star text-warning"></i>
                        ))}
                        {([...Array(emptyStars)] || []).map((x, i) => (
                            <i key={i} className="mdi mdi-star"></i>
                        ))}
                    </p>
                    <h4 className="m-0">
                        <span className="text-muted"> Price : {product.price}</span>
                    </h4>
                </div>
            </div>
        </Card>
    );
};

const ProductsGrid = () => {
    const [products, setProducts] = useState<Array<ProductItemTypes>>(data);

    /*
     * search product by name
     */
    const searchProduct = (value: string) => {
        if (value === '') setProducts(data);
        else {
            var modifiedProducts = data;
            modifiedProducts = modifiedProducts.filter((item) => item.product.toLowerCase().includes(value));
            setProducts(modifiedProducts);
        }
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'eCommerce', path: '/apps/ecommerce/products-grid' },
                    { label: 'Products Grid', path: '/apps/ecommerce/products-grid', active: true },
                ]}
                title={'Products Grid'}
            />

            <Row className="mb-2">
                <Col sm={4}>
                    <Link to="/apps/ecommerce/product-create" className="btn btn-danger mb-2">
                        <i className="mdi mdi-plus-circle me-1"></i> Add Products
                    </Link>
                </Col>
                <Col sm={8}>
                    <div className="float-sm-end">
                        <form className="d-flex align-items-center flex-wrap">
                            <div className="me-2">
                                <label htmlFor="productssearch-input" className="visually-hidden">
                                    Search
                                </label>
                                <input
                                    type="search"
                                    className="form-control border-light"
                                    id="productssearch-input"
                                    placeholder="Search..."
                                    onChange={(e: any) => searchProduct(e.target.value)}
                                />
                            </div>
                            <Button variant="success" className="mb-2 mb-sm-0">
                                <i className="mdi mdi-cog"></i>
                            </Button>
                        </form>
                    </div>
                </Col>
            </Row>

            <Row>
                {(products.slice(0, 8) || []).map((product, index) => {
                    return (
                        <Col key={index} md={6} xl={3}>
                            <ProductBox product={product} />
                        </Col>
                    );
                })}
            </Row>

            <Pagination />
        </>
    );
};

export default ProductsGrid;
