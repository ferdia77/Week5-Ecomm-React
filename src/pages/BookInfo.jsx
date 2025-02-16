import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BookInfo = ({ books }) => {
    return (
        <div id="books__body">
            <div className="books__container">
                <div className="row">
                    <div className="book__selected--top">
                        <Link to="/books" className="book__link">
                            <FontAwesomeIcon icon="arrow-left" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookInfo;