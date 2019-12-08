import React from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import * as loading from "../../utils/loading.json";

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: loading.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
};

export default class Loading extends React.Component {
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