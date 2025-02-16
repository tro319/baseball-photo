'use-strict';
{
    const $hdr_header_sub = document.getElementById('hdr_header_sub');
    $hdr_header_sub.insertAdjacentHTML('afterbegin' , `
    <header id="header" class="p-3 mb-4">
    <div class="header-container d-flex justify-content-between">
      <div class="page-title">
      <h1><a class="fs-1 text-dark text-decoration-none p-2" href="../index.html">Baseball Photo</a></h1>
    </div>
    <nav>
    <ul id="nav" class="sports-list overflow-x-hidden d-flex list-unstyled pt-2">
    <li class="pe-2"><a href="../index.html" class="fs-3 text-dark text-decoration-none">top</a></li>
      <li class="pe-3"><a class="sub-text fs-3 text-dark text-decoration-none"><span class="team-logo-img"><img src="../assets/images/event-images/ti-logo.jpg"></span>Tigers</a>
      <ul class="list-unstyled">
      <li class="my-4"><a class="fs-6 text-dark text-decoration-none" href="tigers24.html">2024</a></li>
        </ul>
      </li>
        <li class="pe-3"><a class="sub-text fs-3 text-dark text-decoration-none"><span class="team-logo-img"><img src="../assets/images/event-images/li-logo.jpg"></span>Lions</a>
      <ul class="list-unstyled">
      <li class="my-4"><a class="fs-6 text-dark text-decoration-none" href="lions24.html">2024</a></li>
        </ul>
      </li>

        <li class="pe-3"><a class="sub-text fs-3 text-dark text-decoration-none"><span class="team-logo-img"><img src="../assets/images/event-images/rakute-logo.jpg"></span>Eagles</a>
      <ul class="list-unstyled">
      <li class="my-4"><a class="fs-6 text-dark text-decoration-none" href="eagles24.html">2024</a></li>
        </ul>
      </li>
    </ul>
  </nav>
    <div class="burger pt-2 pb-1 ps-2 pe-2">
      <div class="line1 fw-normal mb-2"></div>
      <div class="line2 fw-normal mb-2"></div>
      <div class="line3 fw-normal mb-2"></div>
    </div>
  </div>
  </header>`);
}

{
    const $hdr_footer_sub = document.getElementById('hdr_footer_sub');
    $hdr_footer_sub.insertAdjacentHTML('afterbegin' , `
    <!-- footer -->
        <footer id="footer" class="text-center text-dark pt-2 pb-2">
          <p>&copy;Baseball Photo</p>
        </footer>`);
}

