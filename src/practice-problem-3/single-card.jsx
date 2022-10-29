import React from "react";

class SingleCard extends React.Component {

    render() {

        return (
            <div className="col-lg-4 col-md-4 col-sm-12">
                <div className="card" >
                    <img src= {this.props.img} className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                        <h5 className="card-title">{this.props.title}</h5>
                        <p className="card-text text-justify">{this.props.content}</p>
                        <div className="text-center">
                            <a href="#" className="btn btn-secondary">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SingleCard;