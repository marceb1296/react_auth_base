import "../css/dotsLoader.scss";

export const DotsLoader = () => {
    return (
        <div className="loader-container">
            <div className="loader-box">
                <div className="load blue"></div>
                <div className="load red"></div>
                <div className="load orange"></div>
                <div className="load yellow"></div>
                <div className="load green"></div>
            </div>
        </div>
    )
}