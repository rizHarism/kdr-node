/**
 * Make any changes you need to make to the database here
 */
// import Product from "../model/product";
// import Partner from "../model/partners";
// import General from "../model/general";
// import About from "../model/about";

// const Product = require("./../model/products");
// const Partner = require("./../model/partners");
// const General = require("./../model/general");
// const About = require("./../model/about");

const { Product, Partner, General, Characteristic } = require("./../utils/db");

async function up() {
  // Write migration here

  await Partner.insertMany([
    {
      name: "Pemerintah Kabupaten Blitar",
      image: "img/partners/pemkab_blitar.png",
    },
    {
      name: "Pemerintah Kota Blitar",
      image: "img/partners/pemkot_blitar.png",
    },
    {
      name: "Universitas Brawijaya",
      image: "img/partners/ub.png",
    },
    {
      name: "Universitas Gajah Mada",
      image: "img/partners/ugm.png",
    },
    {
      name: "Institut Pertanian Bogor",
      image: "img/partners/ipb.png",
    },
    {
      name: "Badan Pertahanan Nasional",
      image: "img/partners/bpn.png",
    },
    {
      name: "Kereta Api Indonesia",
      image: "img/partners/kai.png",
    },
    {
      name: "Kementerian Lingkungan Hidup dan Kehutanan",
      image: "img/partners/klhk.png",
    },
    {
      name: "Pemerintah Kabupaten Trenggalek",
      image: "img/partners/pemkab_trenggalek.png",
    },
    {
      name: "Dareah Istimewa Yogyakarta",
      image: "img/partners/diy.png",
    },
  ]);

  await Product.insertMany([
    {
      name: "GIS SOLUTION",
      image: "img/products/gis_solution.png",
      description:
        "<p>Di era Industri Digital ini data spasial menjadi salah satu komponen utama dalam perencanaan pembangunan yang baik dan berkelanjutan. Data spasial yang diolah dalam kegiatan pemetaan tersebut akan menghasilkan informasi yang dapat membantu para stakeholders dalam pengambilan keputusan.</p><p>Layanan yang kami berikan dalam jasa <b>GIS SOLUTION</b> ini antara lain:</p><ul><li>Survei Pemetaan Wilayah</li><li>Sistem Informasi Geografis</li><li>Inventaris Sumber Daya Alam</li><li>Digitasi Peta</li><li>Penyusunan Peta Dasar dan Tematik</li><li>Analisa Data Spasial</li></ul>",
    },
    {
      name: "REGIONAL DEVELOPMENT",
      image: "img/products/regional_development.png",
      description:
        "<p>Kebutuhan perencaan tata ruang & wilayah sudah menjadi kewajiban yang harus dihadirkan dalam penataan kawasan dan lingkungan, sehingga tercapai kegiatan pembangunan yang humanis & berkelanjutan.</p><p>Layanan yang kami berikan dalam jasa <b>REGIONAL DEVELOPMENT</b> ini antara lain:</p><ul><li>Masterplan & DED Kawasan</li><li>Rencana Tata Ruang Wilayah (RTRW)</li><li>Rencana Detil Tata Ruang (RDTR)</li><li>Rencana Tata Ruang Strategis (RTRS)</li><li>Kajian Kelayakan Lingkungan & AMDAL</li><li>Masterplan Kawasan Konservasi</li><li>Kajian Resiko Bencana</li></ul>",
    },
    {
      name: "IT - WEB DEVELOPMENT",
      image: "img/products/it_web_development.png",
      description:
        "<p>Revolusi Industri Digital dan kebiasaan baru karena pandemi global telah mendorong kita untuk semakin memanfaatkan teknologi informasi dalam kehidupan sehari-hari. Kehadiran sistem & teknologi informasi sudah menjadi kebutuhan wajib untuk mempermudah akses dan distribusi informasi kepada masyarakat.</p><p>Layanan yang kami berikan dalam jasa <b>IT - WEB DEVELOPMENT</b> ini antara lain :</p><ul><li>WebGIS</li><li>Web Design & Programming</li><li>Web Hosting</li><li>Pembuatan Database System</li><li>Pembuatan Aplikasi Sistem Informasi</li></ul>",
    },
  ]);

  await General.create({
    logoImage: "img/logo/kdr-logo.png",
    heroImage: "img/logo/hero-image.jpg",
    title: "Karta Daya Reksabumi",
    subtitle: "Spatial - Planning - IT Development",
    aboutImage: "img/logo/about-image.png",
    description:
      "<p><b>Karta Daya Reksabumi</b> adalah perusahaan konsultan dibidang manajemen data spasial, perencanaan pembangunan wilayah dan pengembangan sistem & teknologi informasi</p><p>Dari tahun 2013 sampai sekarang secara perorangan maupun tim telah banyak pekerjaan - pekerjaan yang dipercayakan pada kami untuk pengerjaan Pemetaan, GIS, Feasibility Study, dan Web Development.</p><p>Kami percaya data geospasial & tata ruang wilayah yang well managed, dianalisa secara tepat dan mampu terintegrasi dengan teknologi informasi yang dapat diakses seluruh stakeholders, akan membantu proses pengambilan keputusan secara komprehensif & sustainable di era Industri Digital saat ini.</p>",
  });

  await Characteristic.insertMany([
    {
      name: "Adaptive",
      description: "Kami selalu berusaha fleksibel dan mengikuti perkembangan informasi terbaru",
      image: "img/characteristics/earth-globe.png",
    },
    {
      name: "Sustainable",
      description: "Kami berkomitmen untuk memberikan layanan dengan prinsip berkelanjutan",
      image: "img/characteristics/time.png",
    },
    {
      name: "Accountable",
      description: "Kami berkomitmen untuk memberikan layanan yang profesional dan reliable",
      image: "img/characteristics/handshake.png",
    },
  ]);
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
async function down() {
  General.collection.drop();
  Characteristic.collection.drop();
  Product.collection.drop();
  Partner.collection.drop();
}
// export default { up, down };
module.exports = { up, down };
