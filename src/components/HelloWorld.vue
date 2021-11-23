<template>
  <header class="navbar-light sticky">
    <div class="container">
      <div class="row">
        <nav class="navbar navbar-expand-md">
          <a class="navbar-brand" href="#">
              <img src="@/assets/icon.png" alt="" width="30" height="30" class="d-inline-block align-text-center" style="margin-right: 6px">
              Kevin Andreas
          </a>
          <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse" id="collapseNavbar">
              <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                      <a class="nav-link" href="#introduction">Home</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="#about">About</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="">Projects</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="">Contact</a>
                  </li>
              </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
  <body>
    <section id="introduction">
      <div class="container">
        <div class="row section-separator align-items-center">
          <div class="col-6">
            <div class="front-caption">
                <h1>Halo, Saya Kevin Andreas!</h1>
                <h5>Saya adalah seorang Desainer Grafis*</h5>
                <p>
                  Cita-citanya dulu jadi arsitek, tapi berhubung SMK jurusan TKJ, berubah haluan jadi UI/UX Designer atau mungkin Front End Developer. Semoga terwujud!
                </p>
                <a href="mailto:kevinandreas@mhs.mdp.ac.id?subject=Hey!" class="btn btn-dark btn-lg radius-btn">Contact Me</a>
            </div>
          </div>
          <div class="col">
            <div class="img-border"><img src="@/assets/img/front-image.png" width="400" height="720" alt="Front Image" class="img-fluid"></div>
          </div>
        </div>
      </div>
    </section>
    <section id="whatido">
      <div class="container">
        <div class="row section-separator">
          <div class="col-sm-12 text-center section-title">
              <h2>What I Do</h2>
          </div>
          <div class="col-sm-4">
            <div class="mh-service-item shadow rounded-lg text-center">
                <i class="fa fa-bullseye purple-color"></i>
                <h3>Graphic Design</h3>
                <p>
                    Not that pro, but if you give me time, I'll try to make it, perfectly, as I can.
                </p>
            </div>
          </div>
          <br>
          <div class="col-sm-4">
            <div class="mh-service-item shadow rounded-lg text-center">
                <i class="fa fa-bullseye purple-color"></i>
                <h3>UI/UX Design</h3>
                <p>
                    I'm new to this, but I loved to learn more cause this might be my future. I use Figma btw!
                </p>
            </div>
          </div>
          <br>
          <div class="col-sm-4">
            <div class="mh-service-item shadow rounded-lg text-center">
                <i class="fa fa-code iron-color"></i>
                <h3>Web Development</h3>
                <p>
                    Please teach me how to do it! Why do I need to code to move things? Is there any program that can convert Figma to website?
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about" class="about-area section-separator sky-blue">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-6 d-none d-lg-block">
            <div class="img-about">
              <img src="@/assets/img/about.jpg" alt="about me" width="400" class="img-fluid">
              </div>
            </div>
            <div class="col-lg-6 col-md-12">
              <div class="about-details">
                <div class="section-title"><h2>Tentang Saya</h2>
                </div>
                <p>Saya merupakan seorang kreatif yang tertarik pada desain grafis, fotografi, serta videografi. Saya sangat senang untuk belajar hal baru dan menemui tantangan lain. Saya juga mampu bekerja secara kelompok maupun individu dengan baik.</p>
                <ul class="about-info mt-4" style="padding-left: 0px;">
                  <li><span>Nama:</span> <span>Kevin Andreas</span></li>
                  <li><span>Tanggal Lahir:</span> <span>12 Maret 2002</span></li>
                  <li><span>Alamat:</span> <span>Jl. MP. Mangkunegara No.03, Palembang, Indonesia</span></li>
                  <li><span>Kode Pos:</span> <span>30114</span></li>
                  <li><span>Email:</span> <span>kevinandreas@mhs.mdp.ac.id</span></li>
                  <li><span>Phone: </span> <span>+6289692172676</span></li>
                </ul>
                <div class="download-btn"><a href="#" class="btn btn-dark btn-lg radius-btn">Download CV</a>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
    <section id="experience">
      <div class="container">
        <div class="row section-separator">
            <div class="e-education col-sm-12 col-md-6 border-end border-2 border-dark">
              <div class="col-sm-12 text-center section-title">
                <h3>Education</h3>
              </div>
              <div class="mh-service-item shadow rounded-lg text-center">
                  <h5>SMK Xaverius Palembang</h5>
                  <h7>2017-2020</h7>
                  <p>
                      Menempuh satu-satunya SMK Xaverius di Palembang dengan jurusan Teknik Komputer dan Jaringan.
                  </p>
              </div>
              <div class="mh-service-item shadow rounded-lg text-center">
                  <h5>Universitas Multi Data Palembang</h5>
                  <h7>2020-sekarang</h7>
                  <p>
                      Melanjutkan pendidikan di MDP di saat-saat pendemi. Kelas masih diadakan secara daring hingga saat ini. Saya mengambil jurusan Teknik Informatika.
                  </p>
              </div>
            </div>
            <div class="e-workexperience col-sm-12 col-md-6">
              <div class="col-sm-12 text-center section-title">
                <h3>Work Experience</h3>
                  <div class="mh-service-item shadow rounded-lg text-center">
                  <h5>PT. Gajah Unggul Internasional</h5>
                  <h7>Juli-September 2019</h7>
                  <p>
                      Bekerja sebagai teknisi di divisi IT. Troubleshooting komputer, printer, dan jaringan serta mendesain.
                  </p>
              </div>
              <div class="mh-service-item shadow rounded-lg text-center">
                  <h5>CBS</h5>
                  <h7>Oktober 2020-sekarang</h7>
                  <p>
                      Bekerja sebagai desainer grafis di tim kreatif perusahaan. Mendesain sosial media hingga e-commerce perusahaan serta mengatur Google dan Facebook Ads.
                  </p>
              </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  </body>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>