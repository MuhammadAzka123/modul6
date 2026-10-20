function App() {
  var n = 48
  var jam = 9
  const styleObject = {
    color: "blue", 
    fontSize : "20px"
  }

  return (
    <>
        <h1 className='judul' style={styleObject}>kantin Rani</h1>
        <p>{jam < 12 ? "Selamat Pagi" : "Selamat Siang"}</p>
        <p>Saldo awal kartu kantin: Rp {n*1000} </p>
        <button disabled>Bayar</button>
    </>
  )
}

export default App
