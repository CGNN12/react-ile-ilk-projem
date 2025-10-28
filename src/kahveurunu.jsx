// Burası tek bir ürün kartı (Çocuk)
function KahveUrunu(props) {
  // props objesi şuna benzer: { isim: "Americano", fiyat: "75" }
  
  return (
    <div style={{ border: '1px solid grey', margin: '10px', padding: '10px' }}>
      <h3>{props.isim}</h3>
      <p>Fiyat: {props.fiyat} TL</p>
    </div>
  );
}

export default KahveUrunu;