import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Card, ProgressBar, Table, Carousel, Button } from 'react-bootstrap';
import classNames from 'classnames';

// components
import PageTitle from '../../../components/PageTitle';
import Rating from '../../../components/Rating';

// images
import productImg1 from '../../../assets/images/products/product-6.png';
import productImg2 from '../../../assets/images/products/product-8.png';
import productImg3 from '../../../assets/images/products/product-1.png';

interface Product {
    brand: string;
    name?: string;
    reviews: string;
    status: string;
    discount: number;
    price: number;
    description: string;
    rating: number;
    features: string[];
}

// Stock Table
const Stocks = () => {
    return (
        <Table responsive bordered className="table-centered mb-0">
            <thead className="table-light">
                <tr>
                    <th>Outlets</th>
                    <th>Price</th>
                    <th>Stock</th>
                    <th>Revenue</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>ASOS Ridley Outlet - NYC</td>
                    <td>$139.58</td>
                    <td>
                        <div className="row align-items-center g-0">
                            <div className="col-auto">
                                <span className="me-2">27%</span>
                            </div>
                            <div className="col">
                                <ProgressBar now={27} className="progress-sm" variant="danger" />
                            </div>
                        </div>
                    </td>
                    <td>$1,89,547</td>
                </tr>
                <tr>
                    <td>Marco Outlet - SRT</td>
                    <td>$149.99</td>
                    <td>
                        <div className="row align-items-center g-0">
                            <div className="col-auto">
                                <span className="me-2">71%</span>
                            </div>
                            <div className="col">
                                <ProgressBar now={71} className="progress-sm" variant="success" />
                            </div>
                        </div>
                    </td>
                    <td>$87,245</td>
                </tr>
                <tr>
                    <td>Chairtest Outlet - HY</td>
                    <td>$135.87</td>
                    <td>
                        <div className="row align-items-center g-0">
                            <div className="col-auto">
                                <span className="me-2">82%</span>
                            </div>
                            <div className="col">
                                <ProgressBar now={82} className="progress-sm" variant="success" />
                            </div>
                        </div>
                    </td>
                    <td>$5,87,478</td>
                </tr>
                <tr>
                    <td>Nworld Group - India</td>
                    <td>$159.89</td>
                    <td>
                        <div className="row align-items-center g-0">
                            <div className="col-auto">
                                <span className="me-2">42%</span>
                            </div>
                            <div className="col">
                                <ProgressBar now={42} className="progress-sm" variant="warning" />
                            </div>
                        </div>
                    </td>
                    <td>$55,781</td>
                </tr>
            </tbody>
        </Table>
    );
};

const ProductDetail = () => {
    const [product] = useState<Product>({
        brand: 'T-shirts',
        name: 'Hoodie for men (Blue) ',
        reviews: '36',
        status: 'Instock',
        discount: 10,
        price: 50,
        description:
            'If several languages coalesce, the grammar of the resulting language is more simple and regular than that of the individual new common simple and regular than existing',
        rating: 4.5,
        features: [
            'Full Sleeve',
            'Cotton',
            'All Sizes available',
            'All Sizes available',
            '4 Different Color',
            '4 Different Color',
            'Full Sleeve',
        ],
    });

    const [discountPrice] = useState<number>(Math.round(product.price - (product.price * product.discount) / 100));

    const [activeIndex, setActiveIndex] = useState<number>(0);

    const handleActiveIndex = (index: number) => {
        setActiveIndex(index);
    };

    return (
        <>
            <PageTitle
                breadCrumbItems={[
                    { label: 'eCommerce', path: '/apps/ecommerce/product-detail' },
                    {
                        label: 'Product Detail',
                        path: '/apps/ecommerce/product-detail',
                        active: true,
                    },
                ]}
                title={'Product Detail'}
            />

            <Row>
                <Col lg={12}>
                    <Card>
                        <Card.Body>
                            <Row>
                                <Col lg={5}>
                                    <Row className="justify-content-center">
                                        <Col lg={8}>
                                            <Carousel
                                                id="product-carousel"
                                                activeIndex={activeIndex}
                                                onSelect={handleActiveIndex}
                                                className="product-detail-carousel"
                                                controls={false}
                                                indicators={false}
                                            >
                                                <Carousel.Item>
                                                    <img className="img-fluid" src={productImg1} alt="product-img" />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img className="img-fluid" src={productImg2} alt="product-img" />
                                                </Carousel.Item>
                                                <Carousel.Item>
                                                    <img className="img-fluid" src={productImg3} alt="product-img" />
                                                </Carousel.Item>
                                            </Carousel>
                                            <div className="product-detail-carousel position-relative">
                                                <ol className="carousel-indicators product-carousel-indicators mt-2">
                                                    <li
                                                        className={classNames({ active: activeIndex === 0 })}
                                                        onClick={() => handleActiveIndex(0)}
                                                        data-bs-target="#product-carousel"
                                                    >
                                                        <img
                                                            src={productImg1}
                                                            alt="product-img"
                                                            className="img-fluid product-nav-img"
                                                        />
                                                    </li>
                                                    <li
                                                        className={classNames({ active: activeIndex === 1 })}
                                                        onClick={() => handleActiveIndex(1)}
                                                        data-bs-target="#product-carousel"
                                                    >
                                                        <img
                                                            src={productImg2}
                                                            alt="product-img"
                                                            className="img-fluid product-nav-img"
                                                        />
                                                    </li>
                                                    <li
                                                        className={classNames({ active: activeIndex === 2 })}
                                                        onClick={() => handleActiveIndex(2)}
                                                        data-bs-target="#product-carousel"
                                                    >
                                                        <img
                                                            src={productImg3}
                                                            alt="product-img"
                                                            className="img-fluid product-nav-img"
                                                        />
                                                    </li>
                                                </ol>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>

                                <Col lg={7}>
                                    <div>
                                        <div>
                                            <Link to="#" className="text-primary">
                                                {product.brand}
                                            </Link>
                                        </div>
                                        <h4 className="mb-1">
                                            {' '}
                                            {product.name}
                                            <Link to="#" className="text-muted">
                                                <i className="mdi mdi-square-edit-outline ms-2"></i>
                                            </Link>
                                        </h4>

                                        <Rating value={product.rating} />

                                        <div className="mt-3">
                                            <h6 className="text-danger text-uppercase">{product.discount} % Off</h6>
                                            <h4 className="mb-3">
                                                Price :{' '}
                                                <span className="text-muted me-2">
                                                    <del>$ {product.price}</del>
                                                </span>{' '}
                                                <b>$ {discountPrice}</b>
                                            </h4>
                                        </div>
                                        <hr />

                                        <div>
                                            <p>{product.description}</p>

                                            <div className="mt-3">
                                                <h5 className="font-size-14">Specification :</h5>
                                                <Row>
                                                    <Col md={6}>
                                                        <ul className="list-unstyled product-desc-list">
                                                            {(product.features || []).map((item, index) => {
                                                                return (
                                                                    index % 2 === 0 && (
                                                                        <li key={index}>
                                                                            <i className="mdi mdi-circle-medium me-1 align-middle"></i>
                                                                            {item}
                                                                        </li>
                                                                    )
                                                                );
                                                            })}
                                                        </ul>
                                                    </Col>
                                                    <Col md={6}>
                                                        <ul className="list-unstyled product-desc-list">
                                                            {(product.features || []).map((item, index) => {
                                                                return (
                                                                    index % 2 !== 0 && (
                                                                        <li key={index}>
                                                                            <i className="mdi mdi-circle-medium me-1 align-middle"></i>
                                                                            {item}
                                                                        </li>
                                                                    )
                                                                );
                                                            })}
                                                        </ul>
                                                    </Col>
                                                </Row>
                                            </div>

                                            <div>
                                                <form className="d-flex flex-wrap align-items-center mb-3">
                                                    <label className="my-1 me-2" htmlFor="quantityinput">
                                                        Quantity
                                                    </label>
                                                    <div className="me-sm-3">
                                                        <select className="form-select my-1" id="quantityinput">
                                                            <option value="1">1</option>
                                                            <option value="2">2</option>
                                                            <option value="3">3</option>
                                                            <option value="4">4</option>
                                                            <option value="5">5</option>
                                                            <option value="6">6</option>
                                                            <option value="7">7</option>
                                                        </select>
                                                    </div>

                                                    <label className="my-1 me-2" htmlFor="sizeinput">
                                                        Size
                                                    </label>
                                                    <div className="me-sm-3">
                                                        <select
                                                            defaultValue="0"
                                                            className="form-select my-1"
                                                            id="sizeinput"
                                                        >
                                                            <option value="0">Small</option>
                                                            <option value="1">Medium</option>
                                                            <option value="2">Large</option>
                                                            <option value="3">X-large</option>
                                                        </select>
                                                    </div>
                                                </form>

                                                <div>
                                                    <Button variant="success" className="waves-effect waves-light">
                                                        <span className="btn-label">
                                                            <i className="mdi mdi-cart"></i>
                                                        </span>
                                                        Add to cart
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>

                            <h5 className="mt-5 mb-3">Available Stocks & Outlets</h5>
                            <Stocks />
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ProductDetail;
