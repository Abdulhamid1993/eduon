import React, { Component } from "react";
import "./UserProfil.css";
import Rectangle43 from "./img/avatar43.jpg";
import Camera from "./img/Camera.png";
import Modal from "@material-ui/core/Modal";
import ReactCrop from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

class UserProfil extends Component {
  state = {
    modal: false,
    modalrasm: false,
    src: null,
    crop: {
      unit: "%",
      width: 30,
      aspect: 16 / 16,
    },
  };

  handleModal = () => {
    this.setState({
      modal: !this.state.modal,
    });
  };

  handleModalrasm = () => {
    this.setState({
      modalrasm: !this.state.modalrasm,
    });

    this.setState({
      modal: false,
    });
  };

  onSelectFile = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        this.setState({ src: reader.result })
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  onImageLoaded = (image) => {
    this.imageRef = image;
  };

  onCropComplete = (crop) => {
    this.makeClientCrop(crop);
  };

  onCropChange = (crop, percentCrop) => {
    this.setState({ crop });
  };

  async makeClientCrop(crop) {
    if (this.imageRef && crop.width && crop.height) {
      const croppedImageUrl = await this.getCroppedImg(
        this.imageRef,
        crop,
        "newFile.jpeg"
      );
      this.setState({ croppedImageUrl });
    }
  }
  getCroppedImg(image, crop, fileName) {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width;
    canvas.height = crop.height;
    const ctx = canvas.getContext("2d");

    ctx.drawImage(
      image,
      crop.x * scaleX,
      crop.y * scaleY,
      crop.width * scaleX,
      crop.height * scaleY,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob((blob) => {
        if (!blob) {
          //reject(new Error('Canvas is empty'));
          console.error("Canvas is empty");
          return;
        }
        blob.name = fileName;
        window.URL.revokeObjectURL(this.fileUrl);
        this.fileUrl = window.URL.createObjectURL(blob);
        resolve(this.fileUrl);
      }, "image/jpeg");
    });
  }
  render() {
    return (
      <div className='birnima'>
        <section className="section_UserProfil" onClick={this.handleModalClose}>
          <div className="userProfil_avatar">
            <div className="userProfil_image">
              <img src={Rectangle43} className="userProfil_images" />
              <img
                onClick={this.handleModal}
                src={Camera}
                className="userProfil_image43"
              />
            </div>
          </div>
          <Modal open={this.state.modal} onClose={this.handleModal}>
            <div className="modal__div1">
              <h1>Yangi rasm yuklaysizmi? (png, jpg)</h1>
              <div>
                <button onClick={this.handleModal}>Bekor qilish</button>
                <label className="download">
                  <input type="file" name="file" id="" />
                  <span onClick={this.handleModalrasm}>Yuklash</span>
                </label>
              </div>
            </div>
          </Modal>
          <Modal open={this.state.modalrasm} onClose={this.handleModalrasm}>
            <div className="modal__div2">
              <div className="cut__img">
                <ReactCrop
                  src={Rectangle43}
                  crop={this.state.crop}
                  ruleOfThirds
                  onImageLoaded={this.onImageLoaded}
                  onComplete={this.onCropComplete}
                  onChange={this.onCropChange}
                />
                {this.state.croppedImageUrl && (
                  <img
                    alt="Crop"
                    style={{ maxWidth: "100%" }}
                    src={this.state.croppedImageUrl}
                  />
                )}
              </div>
              <div>
                <button onClick={this.handleModalrasm}>Bekor qilish</button>
                <button onClick={this.handleModalrasm}>Saqlash</button>
              </div>
            </div>
          </Modal>

          <div className="userprofil-input-info1">
            <input
              className="userprofil-input-name"
              type="text"
              placeholder="Ulug'bek"
            />
            <input
              className="userprofil-input-name"
              type="text"
              placeholder="Mamasaidov"
            />
            <div className="userprofil-input-name12">
              <p>Tug’ilgan sana</p>
              <input
                className="userprofil-input-name"
                type="text"
                placeholder="16.01.2002"
              />
            </div>
            <div className="userprofil-input-name12">
              <p>Mamlakat</p>
              <input
                className="userprofil-input-name"
                type="text"
                placeholder="O’zbekiston"
              />
            </div>
            <div className="userprofil-input-name12">
              <p>Jinsi</p>
              <div className="userprofil-pol">
                <input
                  className="userprofil-pol-input"
                  type="text"
                  placeholder="O'gil"
                />
                <label htmlFor="">
                  <input
                    className="userprofil-pol-input-radio"
                    type="radio"
                    name="radio"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="userprofil-input-info2">
            <input
              className="userprofil-input-name"
              type="text"
              placeholder="+998 (94) 627-17-68"
            />
            <input
              className="userprofil-input-name"
              type="text"
              placeholder="Ulugbek.eduon@gmail.com"
            />
            <div className="userprofil-input-name12">
              <p>Kasbingiz</p>
              <input
                className="userprofil-input-name"
                type="text"
                placeholder="Marketolog"
              />
            </div>
            <div className="userprofil-input-name12">
              <p>Viloyat</p>
              <input
                className="userprofil-input-name"
                type="text"
                placeholder="Toshkent shahri"
              />
            </div>
            <div className="userprofil-input-name12">
              <p>Jinsi</p>
              <div className="userprofil-pol">
                <input
                  className="userprofil-pol-input"
                  type="text"
                  placeholder="Qiz"
                />
                <input type="radio" />
              </div>
            </div>
          </div>
        </section>
        <button className="userProfile-bottom-btn">Saqlash</button>
      </div>
    );
  }
}

export default UserProfil;
