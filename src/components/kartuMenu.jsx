import labelharga from './LabelHarga'

function kartuMenu({nama,harga,kategori = "Makanan"}){
    return(
        <div className="kartu">
            <h3>{nama}</h3>
            <p>{kategori}</p>
            <labelharga nilai = {harga}></labelharga>
        </div>
    )
}