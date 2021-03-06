import React, { Component } from "react";

class UploadImage extends Component {
    constructor(props) {
        super(props);
        this.state = { image: null };

        this.onImageChange = this.onImageChange.bind(this);
    }

    onImageChange = event => {
        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            this.setState({ image: URL.createObjectURL(img) });
        }
    };

    render() {
        return (
            <>
                <div>
                    <h1>Select Image</h1>
                    <input type="file" name="myImage" onChange={this.onImageChange} />
                </div>
                <br />
                <div>
                    <img alt="" src={this.state.image} />
                </div>
            </>
        );
    }
}
export default UploadImage;
