<template>
  <header class="navbar-light bg-light">
    <div class="container">
      <div class="row">
        <nav class="navbar navbar-expand-md">
          <a class="navbar-brand" href="#">
              <img src="@/assets/icon.svg" alt="" width="30" height="30" class="d-inline-block align-text-center" style="margin-right: 6px">
              Kevin Andreas
          </a>
          <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar">
              <span class="navbar-toggler-icon"></span>
          </button>
          <div class="navbar-collapse collapse" id="collapseNavbar">
              <ul class="navbar-nav ms-auto">
                  <li class="nav-item">
                      <a class="nav-link" href="" data-bs-target="#myModal" data-bs-toggle="modal">Home</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="" data-bs-target="#myModal" data-bs-toggle="modal">About</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="" data-bs-target="#myModal" data-bs-toggle="modal">Projects</a>
                  </li>
                  <li class="nav-item">
                      <a class="nav-link" href="" data-bs-target="#myModal" data-bs-toggle="modal">Contact</a>
                  </li>
              </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
  <body>
    <div class="container introduction">
      <div class="row section-separator align-items-center">
        <div class="col-6">
          <div class="front-caption">
              <h1>Halo, Saya Kevin Andreas!</h1>
              <h5>Saya adalah seorang Desainer Grafis*</h5>
              <p>
                Cita-citanya dulu jadi arsitek, tapi berhubung SMK jurusan TKJ, berubah haluan jadi UI/UX Designer atau mungkin Front End Developer. Semoga terwujud!
              </p>
          </div>
        </div>
        <div class="col">
          <div class="img-border"><img src="@/assets/img/front-image.png" width="250" height="500" alt="Front Image" class="img-fluid"></div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row section-separator">
        <div class="col-sm-12 text-center section-title">
            <h2>What I do</h2>
        </div>
        <div class="col-sm-4">
          <div class="mh-service-item shadow-1 dark-bg">
              <i class="fa fa-bullseye purple-color"></i>
              <h3>Apa ya..</h3>
              <p>
                  au ah
              </p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="mh-service-item shadow-1 dark-bg">
              <i class="fa fa-bullseye purple-color"></i>
              <h3>UI/UX Design</h3>
              <p>
                  Creating UX Case Study, Redesign Website/App, Prototyping, Design System on Figma
              </p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="mh-service-item shadow-1 dark-bg">
              <i class="fa fa-code iron-color"></i>
              <h3>Web Development</h3>
              <p>
                  Creating websites with several frameworks such as Laravel, Nuxt js, and Next js.
              </p>
          </div>
        </div>
      </div>
    </div>
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