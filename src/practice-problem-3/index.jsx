import React from "react";
import SingleCard from "./single-card";

class PracticeProblem3 extends React.Component {

    obj1 = {
        img: "https://cdn-p.vanquis.co.uk/media/2395310/chrome-visual.png",
        title: "First Card",
        content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's  "       
    };
    obj2 = {
        img: "https://forrit-cms-tb-prod-consumables.azureedge.net/media/6a230d8e-29ed-44c4-8ff7-dc6104df49cc/clubcard-plus-credit-card.png",
        title: "Second Card",
        content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
    };
    obj3 = {
        img: "http://lcus1storage.azureedge.net/web/v3/images/global/US_GC_Static_315x198.jpg",
        title: "Third Card",
        content: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected"
    };

    render() {
        return (
            <div className="container">
                <h1 className="text-center my-3">Bismillah, Practice Problem 3</h1>

                <div className="row">
                        <SingleCard img={this.obj1.img} title={this.obj1.title} content={this.obj1.content}/>
                        <SingleCard img={this.obj2.img} title={this.obj2.title} content={this.obj2.content}/>
                        <SingleCard img={this.obj3.img} title={this.obj3.title} content={this.obj3.content}/>
                </div>

            </div>
        );
    }
}

export default PracticeProblem3;