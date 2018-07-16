import React, { Component } from "react";

class Image extends Component {

  
  render() {
<<<<<<< HEAD
    console.log(this.props)
=======
    console.log(this.props);
>>>>>>> e3137209af3440c4da5622c77811a207981d56fb
    const { mode, src, height, width, style, ...props } = this.props;
    const modes = {
      fill: "cover",
      fit: "contain"
    };
    const size = modes[mode] || "contain";

    const defaults = {
      height: height || 100,
      width: width || 100,
      backgroundColor: "white"
    };

    const important = {
      backgroundImage: `url("${src}")`,
      backgroundSize: size,
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat"
    };

    return <div {...props} style={{ ...defaults, ...style, ...important }} />;
  }
}

export default Image;
