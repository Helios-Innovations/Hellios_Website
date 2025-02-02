import React from 'react' 
import { FaBeer, FaBitcoin, FaCloud, FaFacebook, FaInstagram, FaLinkedin, FaSearch, FaTwitter } from "react-icons/fa";
import './foot.css'
function Footer() {
  return (
    <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>company</h4>
  	 			<ul>
  	 				<li><a href="#">about us</a></li>
  	 				<li><a href="#">our services</a></li>
  	 				<li><a href="#">privacy policy</a></li>
  	 				<li><a href="#">affiliate program</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><a href="#">FAQ</a></li>
  	 				<li><a href="#">returns</a></li>
  	 				<li><a href="#">order status</a></li>
  	 				<li><a href="#">payment options</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>Orders</h4>
  	 			<ul>
  	 				<li><a href="#">Website</a></li>
  	 				<li><a href="#">Block-Chain Tech</a></li>
  	 				<li><a href="#">Ai/Ml Product</a></li>
  	 				<li><a href="#">Cloud Services</a></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<a href="#"><FaFacebook /></a>
  	 				<a href="#"><FaInstagram/></a>
  	 				<a href="#"><FaTwitter/></a>
  	 				<a href="#"><FaLinkedin/></a>
  	 			</div>
  	 		</div>
  	 	</div>
  	 </div>
  </footer>

  )
}

export default Footer