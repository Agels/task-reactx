import '../bootstrap.css';
import {Card } from "react-bootstrap"
const Aboutp = () =>{
    return (
         <div className="col-lg-6 mt-auto mb-auto  ">
            <Card className="about-text bgc-whitesmoke p-3 " style={{borderRadius:'10px', border: '3px solid #f58840', background:'#e5e5e5' }}>
              <p className="fs-4 fw-light" style={{textAlign:'justify'}}>
                Saya adalah orang awam yang memiliki ketertarikan dengan dunia
                it dan membuat program serta melakukan pengembangan web aplikasi
                dan menjadi seorang yang berkompeten pada bidang ketertarikan
                yang saya sebutkan merupakan impian saya.
              </p>
            </Card>
          </div>
    )
}

export default Aboutp;