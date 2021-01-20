import React, { Component } from 'react'
class CardBelanja extends Component {
    render() {
        return (
            <div className="col-lg-6 col-sm-12 p-2">
                <div className="card">
                    <div className="card-body row">
                        {/* Menampilkan Gambar Cover */}
                        <img src={this.props.cover} className="img" height="200" />
                        {/* Menampilkan Deskripsi */}
                        <div className="col-5">
                            <h5 className="text-success"> {this.props.nama} </h5>
                            <h6 className="text-danger"> Harga: {this.props.harga} </h6>
                            <h6 className="text-dark"> Jumlah: {this.props.jumlahbeli} </h6>
                            <h6 className="text-dark"> Total: {this.props.total} </h6>
                            {/* button untuk mengedit */}
                            <button className="btn btn-primary btn-sm m-1" onClick={this.props.onEdit}> Edit</button>
                            {/* button untuk menghapus */}
                            <button className="btn btn-warning btn-sm m-1" onClick={this.props.onDrop}> Hapus</button>
                            {/* button untuk menghapus */}
                            <button className="btn btn-danger btn-sm m-1" onClick={this.props.onKeranjang}>Masukan Keranjang</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CardBelanja;