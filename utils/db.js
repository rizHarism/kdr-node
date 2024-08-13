const dotenv = require("dotenv");
const mongoose = require("mongoose");
const Product = require("../models/products");
const Characteristic = require("../models/characteristic");
const Partner = require("../models/partners");
const General = require("../models/general");
const About = require("../models/about");
mongoose.connect(process.env.ATLAS_URI);

// const product2 = new Product({
//     id: 2,
//     name: "REGIONAL DEVELOPMENT",
//     image: "public/img/regional_development.png",
//     description: "<p>Kebutuhan perencaan tata ruang & wilayah sudah menjadi kewajiban yang harus dihadirkan dalam penataan kawasan dan lingkungan, sehingga tercapai kegiatan pembangunan yang humanis & berkelanjutan.</p><p>Layanan yang kami berikan dalam jasa <b>REGIONAL DEVELOPMENT</b> ini antara lain:</p><ul><li>Masterplan & DED Kawasan</li><li>Rencana Tata Ruang Wilayah (RTRW)</li><li>Rencana Detil Tata Ruang (RDTR)</li><li>Rencana Tata Ruang Strategis (RTRS)</li><li>Kajian Kelayakan Lingkungan & AMDAL</li><li>Masterplan Kawasan Konservasi</li><li>Kajian Resiko Bencana</li></ul>"
// })
// product2.save().then((value) => console.log(value))

// const product3 = new Product({
//     id: 3,
//     name: "IT - WEB DEVELOPMENT",
//     image: "it_web_development.png",
//     description: "<p>Revolusi Industri Digital dan kebiasaan baru karena pandemi global telah mendorong kita untuk semakin memanfaatkan teknologi informasi dalam kehidupan sehari-hari. Kehadiran sistem & teknologi informasi sudah menjadi kebutuhan wajib untuk mempermudah akses dan distribusi informasi kepada masyarakat.</p><p>Layanan yang kami berikan dalam jasa <b>IT - WEB DEVELOPMENT</b> ini antara lain :</p><ul><li>WebGIS</li><li>Web Design & Programming</li><li>Web Hosting</li><li>Pembuatan Database System</li><li>Pembuatan Aplikasi Sistem Informasi</li></ul>"
// })

module.exports = { Product, Partner, General, About, Characteristic };
