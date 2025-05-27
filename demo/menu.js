document.write(`
     <!-- Navbar Start -->
        <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
            <a href="index.html" class="navbar-brand">
                <img class="img-fluid" src="img/logo2.png" style="width: 100%; height: 80px;" alt="">
            </a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav mx-auto ">
                    <a href="index.html" class="nav-item nav-link active">Home</a>
                    <a href="#" class="nav-item nav-link">About Us</a>
                    <a href="services.html" class="nav-item nav-link">Services</a>
                    <a href="celebrations.html" class="nav-item nav-link">Celebrations</a>
                    <a href="gallery.html" class="nav-item nav-link">Gallery</a>
                    <a href="franchise.html" class="nav-item nav-link">Franchise</a>
                    <a href="teachers.html" class="nav-item nav-link">Teachers</a>

                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">More</a>
                        <div class="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                            <a href="#" class="dropdown-item">School Facilities</a>
                            <a href="#" class="dropdown-item">Popular Teachers</a>
                            <a href="#" class="dropdown-item">Become A Teachers</a>
                            <a href="#" class="dropdown-item">Make Appointment</a>
                            <a href="#" class="dropdown-item">Testimonial</a>
                            <a href="#" class="dropdown-item">404 Error</a>
                        </div>
                    </div>
                    
                    <a href="#" class="nav-item nav-link">Contact Us</a>

                </div>
  

    <!-- Modal -->
    <div class="modal fade" id="joinUsModal" data-bs-backdrop="false" 
        tabindex="-1" aria-labelledby="joinUsModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="joinUsModalLabel">Join US Form</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" style="filter: invert(1);"></button>
                </div>
                <div class="modal-body">
                    <form id="joinUsForm">
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Enter Name:" required>
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Enter Email:" required>
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Mobile</label>
                            <input type="phone" class="form-control" id="phone" placeholder="Phone No:" maxlength="10" required>
                        </div>
                        <div class="mb-3">
                            <label for="message" class="form-label">Message</label>
                            <textarea class="form-control" id="message" rows="3" required></textarea>
                        </div>
                        <div class="text-center">
                            <button type="submit" class="btn btn-danger">Submit</button>
                            <button type="close"  class="btn btn-danger" data-bs-dismiss="modal">Close</button>
                     
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
    </div>

            </div>
        </nav>
        <!-- Navbar End -->
        `)
