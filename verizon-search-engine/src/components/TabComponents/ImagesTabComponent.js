import React, { Component } from 'react';

//Component displays imageResults in a grid view.

//TO DO : Implement a modal on each image so that it can open and zoom in

class ImageTabComponent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let imagesGrid =[]
        imagesGrid =  this.props.imageresultSet.map((img,index) => {
            return(
                <div className="col img-fix-width mt-2" key={index}>
                    <img src={img.image} alt="img" className="tab-images"></img>
                    <br></br>
                    {img.description}
                </div>
            )
        })
        return (
            <div className="row">
                {imagesGrid}
            </div>
        )
    }
}

export default ImageTabComponent;