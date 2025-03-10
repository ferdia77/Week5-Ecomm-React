import React from "react";
import { Link } from "react-router-dom";

const Explore = () => {
    return (
        <div>
            <section id="explore">
                <div className="container">
                    <div className="row">
                        <div className="row__column">
                            <h2>
                                Explore more <span className="purple">Books</span>
                            </h2>
                            <Link to="/books">
                                <button className="btn">Explore books</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Explore;