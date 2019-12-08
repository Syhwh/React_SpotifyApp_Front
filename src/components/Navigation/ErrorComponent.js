import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
//import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import * as errorData from "../../utils/networklost.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: errorData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

export default class Error extends React.Component {
    render() {
        return (
            <FadeIn>
                <div className="d-flex justify-content-center align-items-center">
                    <Lottie options={defaultOptions} height={320} width={320} />
                </div>
            </FadeIn>
        )
    }
}