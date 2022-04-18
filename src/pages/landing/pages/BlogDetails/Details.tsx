import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

// images
import image1 from '../../../../assets/images/landing/blog/blog-details.jpg';

const Details = () => {
    return (
        <Card className="overflow-hidden mb-4">
            <div className="blog-img">
                <img src={image1} alt="" className="img-fluid mx-auto d-block" />
            </div>
            <div className="blog-content px-3 pt-3 mx-3">
                <ul className="list-inline post-meta mb-0">
                    <li className="list-inline-item">
                        <i className="mdi mdi-calendar me-1"></i> 04 May, 2017
                    </li>
                    <li className="list-inline-item">
                        <Link to="#">
                            <i className="mdi mdi-tag-text-outline me-1"></i> Travel
                        </Link>
                        , <Link to="#">Photography</Link>
                    </li>
                    <li className="list-inline-item">
                        <Link to="#">
                            <i className="mdi mdi-comment-multiple-outline"></i> 3 Comments
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="text-muted p-4">
                <p>
                    If several languages coalesce the grammar of the resulting language is more simple and regular than
                    that of the individual languages the new common be as simple as occidental in fact it will be
                    occidental.
                </p>
                <p>
                    To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine
                    told me what Occidental is. The European languages are members of the same family. Their separate
                    existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary.
                </p>
                <blockquote className="blockquote bg-light p-3 rounded my-4">
                    <div className="blockquote-icon">
                        <i className="mdi mdi-format-quote-open display-4"></i>
                    </div>
                    <p className="text-dark">
                        New common language will be more simple and regular than European languages
                    </p>
                    <footer className="blockquote-footer font-14">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </footer>
                </blockquote>
                <p>
                    Everyone realizes why a new common language would be desirable one could refuse to pay expensive
                    translators. To achieve this, it would be necessary to have uniform grammar, pronunciation and more
                    common words. If several languages coalesce, the grammar of the resulting language.
                </p>
                <p className="mb-0">
                    For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their
                    grammar, their pronunciation and their most common words
                </p>
            </div>
        </Card>
    );
};

export default Details;
