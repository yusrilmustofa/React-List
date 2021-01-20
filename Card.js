import React, {Component} from 'react'
class Card extends Component {
  render() {
    return(
      <div className="col-lg-6 col-sm-12 p-2">
      <div className="card">
      <div className="card-body row">
      {/* Menampilkan Gambar Cover */}
      <div className="col-5">
      <img src={this.props.cover} className="img" height="200" />
      </div>
      {/* Menampilkan Deskripsi */}
      <div className="col-7">
      <h5 className="text-info"> {this.props.judul} </h5>
      <h6 className="text-dark"> Penulis {this.props.penulis} </h6>
      <h6 className="text-dark"> Penerbit {this.props.penerbit} </h6>
      <h6 className="text-danger">Harga:RP {this.props.harga} </h6>
      {/* button untuk mengedit */}
      <button className="btn btn-primary btn-sm m-1" onClick={this.props.onEdit}> Edit</button>
      {/* button untuk menghapus */}
      <button className="btn btn-danger btn-sm m-1" onClick={this.props.onDrop}> Hapus</button>
      </div>
      </div>
      </div>
      </div>
    );
  }
}
export default Card;
