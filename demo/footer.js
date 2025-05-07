docoument.write(`
 <div class="container-fluid">
  <div class="row">
    <div class="col-lg-12 align-self-center">
      <div class="row">
        <div class="col-lg-12">
          <form id="contact" action="" method="post" style="margin-bottom:30px;">
            <div class="row">
              <div class="col-lg-12">
                <h2>Locate our office</h2>
              </div>
              <div class="col-md-12">
                <div class="contact-details">
                  <style>
                    .tab-btn {
                      background-color: #f1f1f1;
                      border: 3px solid #FF0000;
                      padding: 10px 20px;
                      cursor: pointer;
                      margin-bottom: 10px;
                      margin-right: 10px; /* Adds space between buttons */
                    }

                    .button {
                      background-color: #04AA6D;
                      border: none;
                      color: white;
                      padding: 5px 10px;
                      text-align: center;
                      display: inline-block;
                      font-size: 16px;
                      margin: 4px 2px;
                      transition-duration: 0.4s;
                      cursor: pointer;
                    }
                    
                    .button0 {
                      background-color: white;
                      color: black;
                      border: 2px solid #04AA6D;
                    }

                    .button0:hover {
                      background-color: purple;
                      color: white;
                    }
                    .button1 {
                      background-color: white;
                      color: black;
                      border: 2px solid #04AA6D;
                    }

                    .button1:hover {
                      background-color: #04AA6D;
                      color: white;
                    }

                    .button2 {
                      background-color: white;
                      color: black;
                      border: 2px solid #008CBA;
                    }

                    .button2:hover {
                      background-color: #008CBA;
                      color: white;
                    }

                    .button3 {
                      background-color: white;
                      color: black;
                      border: 2px solid #f44336;
                    }

                    .button3:hover {
                      background-color: #f44336;
                      color: white;
                    }

                    .button4 {
                      background-color: white;
                      color: black;
                      border: 2px solid #4d13b9;
                    }

                    .button4:hover {
                      background-color: blue;
                      color: white;
                    }

                    /* Centering content in the display-container */
                    .display-container {
                      border: 2px solid #ddd;
                      padding: 20px;
                      margin-top: 20px;
                      min-height: 100px;
                      display: flex;
                      justify-content: center; /* Center horizontally */
                      align-items: center; /* Center vertically */
                      text-align: center; /* Center the text */
                    }
                  </style>

                  <!-- Buttons -->
                  <div class="tab-container-fluid">
                   <div class="tab-btn button button0" onclick="openTab('tab0')">NOIDA </div>
                    <div class="tab-btn button button1" onclick="openTab('tab1')">NOIDA EXTENSION</div>
                    <div class="tab-btn button button2" onclick="openTab('tab2')">GREATER NOIDA BRANCH I</div>
                    <div class="tab-btn button button3" onclick="openTab('tab3')">GREATER NOIDA BRANCH II</div>
                    <div class="tab-btn button button4" onclick="openTab('tab4')">DELHI</div>
                  </div>

                  <!-- Hidden content for each tab -->
                   <div id="tab0" class="tab-content" style="display:none;">
                    <ul class="contact">
                      <h6><strong>Noida</strong></h6>
                      <li><p><strong>Address:- </strong>G-8 Ground Floor, Krishna Complex, Sector-31, Noida-201301, U.P.</p></li>
                      <li><p><i class="fa fa-phone"></i> <strong>Phone:</strong> +91 8368979712,6380486914</p></li>
                      <li><p><i class="fa fa-envelope"></i> <strong>Email:</strong> a1training167@gmail.com</p></li>
                    </ul>
                  </div>
                  <div id="tab1" class="tab-content" style="display:none;">
                    <ul class="contact">
                      <h6><strong>Noida Extension</strong></h6>
                      <li><p><strong>Address:- </strong>Earthcon Sanskriti, Sector 1, Noida Extension</p></li>
                      <li><p><i class="fa fa-phone"></i> <strong>Phone:</strong> +91 8368979712,6380486914</p></li>
                      <li><p><i class="fa fa-envelope"></i> <strong>Email:</strong> a1training167@gmail.com</p></li>
                    </ul>
                  </div>

                  <div id="tab2" class="tab-content" style="display:none;">
                    <ul class="contact">
                      <h6><strong>Greater Noida-Alpha Branch I</strong></h6>
                      <li><p><strong>Address:- </strong>Alpha Commercial Belt, Paras Nath Tower, 3rd Floor</p></li>
                      <li><p><i class="fa fa-phone"></i> <strong>Phone:</strong> +91 8368979712,6380486914</p></li>
                      <li><p><i class="fa fa-envelope"></i> <strong>Email:</strong> a1training167@gmail.com</p></li>
                    </ul>
                  </div>

                  <div id="tab3" class="tab-content" style="display:none;">
                    <ul class="contact">
                      <h6><strong>Greater Noida-Omicron Branch II</strong></h6>
                      <li><p><strong>Address:- </strong>C-167, Omicron I, Block C, 6% Abadi, Greater Noida</p></li>
                      <li><p><i class="fa fa-phone"></i> <strong>Phone:</strong> +91 8368979712,6380486914</p></li>
                      <li><p><i class="fa fa-envelope"></i> <strong>Email:</strong> a1training167@gmail.com</p></li>
                    </ul>
                  </div>

                  <div id="tab4" class="tab-content" style="display:none;">
                    <ul class="contact">
                      <h6><strong>Delhi-Timarpur Branch</strong></h6>
                      <li><p><strong>Address:- </strong>347, Lancer Road, Timarpur, New Delhi-110054</p></li>
                      <li><p><i class="fa fa-phone"></i> <strong>Phone:</strong> +91 6206126433,8368979712</p></li>
                      <li><p><i class="fa fa-envelope"></i> <strong>Email:</strong> a1training167@gmail.com</p></li>
                    </ul>
                  </div>

                  <script>
                    function openTab(tabName) {
                      var i, tabContent;
                      var displayContainer = document.getElementById('display-container');
                      displayContainer.style.display='block'

                      // Hide all tab contents
                      tabContent = document.getElementsByClassName("tab-content");
                      for (i = 0; i < tabContent.length; i++) {
                        tabContent[i].style.display = "none";
                      }

                      // Get the selected tab's content and show it in the display container
                      var selectedTabContent = document.getElementById(tabName).innerHTML;
                      displayContainer.innerHTML = selectedTabContent;
                    }
                  </script>
                </div>
                
                <!-- Content display div, located below the buttons -->
                <div id="display-container" class="display-container" style="display:none;">
                  Click on a button to see the details here.
                </div>

              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</div>


`)