import React,{Component} from 'react'
import CardLingkungan from '../Components/CardLingkungan'
import $ from "jquery";
class Lingkungan extends Component {
    constructor() {
      super()
      this.state ={
        hari:[
          {
          nama:"Lingkungan Hidup Sedunia",tgl:" 5 Juni",cover:"https://upload.wikimedia.org/wikipedia/commons/e/e1/Ecologia.jpg"
        },
        {
        nama:"Hari Bumi Sedunia",tgl:" 22 April",cover:"https://assets-a1.kompasiana.com/statics/files/2014/04/1398164874671384389.jpg?t=o&v=800"
      }
    ],
    action:"",
    nama:"",
    tgl:"",
    cover:"",
    selectedItem:null
  }
}
 Add=() =>{
   $("#modal_hari").modal("show")
   this.setState({
    nama:"",
    tgl:"",
    cover:"",
    action:"insert"
   })
 }
 Edit=(item)=>{
   $("#modal_hari").modal("show")
   this.setState({
     nama:item.nama,
     tgl:item.tgl,
     cover:item.cover,
     action:"update",
     selectedItem:item
   })
 }
 Save=(event)=>{
   event.preventDefault();
   let temphari=this.state.hari
   if (this.state.action === "insert") {
     temphari.push({
      nama:this.state.nama,
      tgl:this.state.tgl,
      cover:this.state.cover
     })
   }else if (this.state.action ==="update"){
     let index=temphari.indexOf(this.state.selectedItem)
     temphari[index].nama=this.state.nama
     temphari[index].tgl=this.state.tgl
     temphari[index].cover=this.state.cover
   }
   this.setState({hari:temphari})
   $("#modal_hari").modal("hide")
 }
 Drop=(item)=>{
   //beri konfirmasi
   if (window.confirm("apakah anda akan menghapus data ini??")) {
    //menghapus data
    let temphari=this.state.hari
    //tau posisi index
    let index=temphari.indexOf(item)
    //splice untuk menghapus
    temphari.splice(index,1)

    this.setState({hari:temphari})
  }
 }
  render() {
    return(
      <div className="container">
        <div className="row">
          {this.state.hari.map((item,index)=>(
            <CardLingkungan 
            nama={item.nama}
            tgl={item.tgl}
            cover={item.cover}
            onEdit={ ()=> this.Edit(item)}
            onDrop={ ()=> this.Drop(item)}
            />
          ))}
        </div>
        <button className="btn btn-info btn-block" onClick={() => this.Add()}>Tambah Data</button>
        {/*Component modal sbng control manipulasi data */}
        <div className="modal" id="modal_hari">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">Form Data</div>
              <div className="modal-body">
                <form onSubmit={ev => this.Save(ev)}>
      Nama Event
      <input type="text" className="form-control mb-2" value={this.state.nama} onChange={ ev => this.setState({nama:ev.target.value})} required />
      Tanggal Event
      <input type="text" className="form-control mb-2" value={this.state.tgl} onChange={ ev => this.setState({tgl:ev.target.value})} required />
      Cover Event
      <input type="url" className="form-control mb-2" value={this.state.cover} onChange={ ev => this.setState({cover:ev.target.value})} required />
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
export default Lingkungan;
