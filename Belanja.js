import React, { Component } from 'react'
import CardBelanja from '../Components/CardBelanja'
import $ from 'jquery';
class Belanja extends Component {
    constructor() {
        super()
        this.state = {
            belanja: [
                {
                    nama: "Susu Bubuk", jumlahbeli: 2, harga: 95000, total: 190000,
                    cover: "https://ecs7.tokopedia.net/img/cache/700/product-1/2018/12/4/22278734/22278734_ca481636-e24c-4c86-b978-2da6f7309009_700_700.jpg"
                },
                {
                    nama: "Susu Kaleng", jumlahbeli:1, harga: 80000, total: 80000,
                    cover: "https://s0.bukalapak.com/img/50660935831/large/susu_Bendera_Frisian_Flag_kental_manis___1_dus_isi_48_kaleng.jpg"
                }
            ],
            action:"",
            nama:"",
            harga: 0,
            jumlahbeli:0,
            total:0,
            cover:"",
            selectedItem:null
        }
    }
    Add = () => {
        $("#modal_belanja").modal("show")
        this.setState({
            nama: "",
            jumlahbeli: 0,
            harga: 0,
            total: 0,
            cover: "",
            action: "insert"
        })
    }
    Edit=(item)=>{
        $("#modal_belanja").modal("show")
        this.setState({
            nama:item.nama,
            jumlahbeli:item.jumlahbeli,
            harga:item.harga,
            total:item.total,
            cover:item.cover,
            action:"update",
            selectedItem:item
        })
    }
    Save=(event)=>{
        event.preventDefault();
        //menampung data belanja
        let tempbelanja=this.state.belanja
        if (this.state.action === "insert") {
            tempbelanja.push({
                nama:this.state.nama,
                jumlahbeli:this.state.jumlahbeli,
                harga:this.state.harga,
                total:this.state.total,
                cover:this.state.cover
            })
        }else if (this.state.action ==="update"){
            let index=tempbelanja.indexOf(this.state.selectedItem)
            tempbelanja[index].nama=this.state.nama
            tempbelanja[index].jumlahbeli=this.state.jumlahbeli
            tempbelanja[index].harga=this.state.harga
            tempbelanja[index].total=this.state.total
            tempbelanja[index].cover=this.state.cover
        }
        this.setState({belanja:tempbelanja})
        $("#modal_belanja").modal("hide")
    }
    Drop =(item)=>{
        //beri konfirmasi
      if (window.confirm("apakah anda akan menghapus data ini??")) {
        //menghapus data
        let tempbelanja=this.state.belanja
        //tau posisi index
        let index=tempbelanja.indexOf(item)
        //splice untuk menghapus
        tempbelanja.splice(index,1)

        this.setState({belanja:tempbelanja})
      }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.belanja.map((item, index) => (
                        <CardBelanja
                            nama={item.nama}
                            jumlahbeli={item.jumlahbeli}
                            harga={item.harga}
                            total={item.total}
                            cover={item.cover}
                            onEdit={() => this.Edit(item)}
                            onDrop={() => this.Drop(item)}
                        />
                    ))}
                </div>
                <button className="btn btn-info btn-block form-control" onClick={() => this.Add()}>Tambah Data</button>
                <button className="btn btn-danger btn-block form-control" onClick={() => this.Add()}>Lihat keranjang</button>
                <div className="modal" id="modal_belanja">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">Form Data</div>
                            <div className="modal-body">
                            <form onSubmit={ev => this.Save(ev)}>
                                    Nama Barang:
                                  <input type="text" className="form-control mb-2" value={this.state.nama} onChange={ev => this.setState({ nama: ev.target.value })} required />
                                    Jumlah Beli:
                                  <input type="number" className="form-control mb-2" value={this.state.jumlahbeli} onChange={ev => this.setState({ jumlahbeli: ev.target.value })} required />
                                    Harga:
                                  <input type="number" className="form-control mb-2" value={this.state.harga} onChange={ev => this.setState({ harga: ev.target.value })} required />
                                  Total Harga:
                                  <input type="number" className="form-control mb-2" value={this.state.total} onChange={ev => this.setState({ total: ev.target.value })} required />
                                  Cover Barang:
                                  <input type="url" className="form-control mb-2" value={this.state.cover} onChange={ev => this.setState({ cover: ev.target.value })} required />
                                    <button className="btn btn-success form-control" type="submit"> Save</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Belanja;