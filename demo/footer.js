
document.write(`
     <!-- Footer Start --><!-- Footer Start -->
<div class="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s" style="background-color: #1a1a1a;">
    <div class="container py-5">
        <div class="row g-5">
            <div class="col-lg-4 col-md-6">
                <h3 class="text-white mb-4">Get In Touch</h3>
                <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>B1, 101, Cherry County, Noida Extension, Greater Noida West-201306 Landmark: Near Ryan International School</p>
                <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+ 91 8376913533</p>
                <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+91 9211724195</p>
                <p class="mb-2" style="font-size: 15px; text-decoration: bold;"><i class="fa fa-envelope me-3"></i>bonjourkidzplayschool@gmail.com</p>
                <div class="d-flex pt-2">
                    <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                    <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                    <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                </div>
            </div>
            <div class="col-lg-4 col-md-6">
                <h3 class="text-white mb-4">Quick Links</h3>
                <a class="btn btn-link text-white-50" href="about.html">About Us</a>
                <a class="btn btn-link text-white-50" href="contact.html">Contact Us</a>
                <a class="btn btn-link text-white-50" href="programs.html">Our Programs</a>
                <a class="btn btn-link text-white-50" href="#">Privacy Policy</a>
                <a class="btn btn-link text-white-50" href="#">Terms & Condition</a>
            </div>
            <div class="col-lg-4 col-md-6">
                <h3 class="text-white mb-4">Location</h3>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.9634727177536!2d77.4460608!3d28.6008726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cee5fc3ffffff%3A0x8c869ff033944ed0!2sBonjour%20Kidz%20Play%20School%20%26%20Day%20Care!5e0!3m2!1sen!2sin!4v1746683440591!5m2!1sen!2sin" width="100%" height="200" style="border-radius:5px;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="copyright">
            <div class="row">
                <div class="col-sm-6 text-center text-md-start mb-3 mb-md-0">
                    <p style="font-size: smaller;">© 2025 Bonjour Kidz Play School & Day Care. All rights reserved | Design by <span style="color: #008CBA;"><a href=""> EGT</a></span></p>
                </div>
                <div class="col-md-6 text-center text-md-end">
                    <div class="footer-menu">
                        <a href="#">Home</a>
                        <a href="#">Cookies</a>
                        <a href="#">Help</a>
                        <a href="#">FQAs</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- futr -->
<div class="futr">
    <!-- Social Media Icons -->
    <div class="social-icons"></div>
    <!-- Action Links with icons and slash -->
    <div class="action-links">
        <!-- Join Us Button -->
        <a href="#" class="btn btn-primary rounded-pill px-3" data-bs-toggle="modal" data-bs-target="#admission">
            <img src="img/admission_icon.png" alt="Admission Icon" /> Admission Enquiry
        </a>
        <div class="slash">|</div>
        <a href="franchise.html"><img src="img/start-a-franchise.png" alt="Franchise Icon" /> Start a Franchise</a>
    </div>
    <!-- Right End Section -->
    <div class="right-end"></div>
</div>
<!-- futr END -->


         
<!-- Footer End -->

<!-- Modal -->
    <div class="modal fade" id="admission" data-bs-backdrop="false" 
        tabindex="-1" aria-labelledby="joinUsModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="joinUsModalLabel">Admission Enquiry Form</h5>
                    <button type="button" class="btn-danger color-danger btn-close " data-bs-dismiss="modal" aria-label="Close" ></button>
                </div>
                <div class="modal-body">
                   

<div class="form-wrapper "  >
  <form id="admission">
    <div class="mb-3">
      <label for="name" class="form-label">
        <i class="fa fa-user form-icon"></i> Child's Name
      </label>
      <input type="text" class="form-control" id="name" placeholder="e.g., Aarav or Meera" required>
    </div>

    <div class="mb-3">
      <label for="email" class="form-label">
        <i class="fa fa-envelope form-icon"></i> Parent's Email
      </label>
      <input type="email" class="form-control" id="email" placeholder="example@mail.com" required>
    </div>

    <div class="mb-3">
      <label for="phone" class="form-label">
        <i class="fa fa-phone form-icon"></i> Contact Number
      </label>
      <input type="tel" class="form-control" id="phone" placeholder="10-digit mobile number" maxlength="10" required>
    </div>

    <div class="mb-3">
      <label for="message" class="form-label">
        <i class="fa fa-comment form-icon"></i> Message
      </label>
      <textarea class="form-control" id="message" rows="3" placeholder="Write your query..." required></textarea>
    </div>

    <div class="text-center">
      <button type="submit" class="btn btn-danger">
        <i class="fa fa-paper-plane"></i> Submit
      </button>
      <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
        <i class="fa fa-times"></i> Close
      </button>
    </div>
  </form>
</div>

                </div>
            </div>
        </div>
    </div>
`)
const style = document.createElement('style');
style.innerHTML = `
  .form-wrapper {
    background-image: url('img/form-bg.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 40px;
    border-radius: 20px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    max-width: 500px;
    margin: 0 auto;
  }

  #admission {
    background-color: rgba(255, 255, 255, 0);
    padding: 30px;
    border-radius: 15px;
  }
    
 `;
document.head.appendChild(style);
/*   <div class="col-lg-3 col-md-6">
                        <h3 class="text-white mb-4">Our Branches</h3>
                        <div class="row g-2 pt-2">
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/classes-1.jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/classes-2.jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/classes-3.jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/classes-4.jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/classes-5.jpg" alt="">
                            </div>
                            <div class="col-4">
                                <img class="img-fluid rounded bg-light p-1" src="img/classes-6.jpg" alt="">
                            </div>
                        </div>
                    </div> */