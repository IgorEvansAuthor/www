---
layout: triptych
title: Home
body_class: hero
show_footer: true
left_html: |
  <div class="hero-text">
    <h1>Open the door into mystery!</h1>
    <p>(Beware: Answers have a price.)</p>
    <a class="hero-button" href="/miklos.html">Open Door</a>
  </div>
right_html: |
  <a href="/miklos"><img src="/assets/images/miklos-door.jpg" alt="A divine door with an all-seeing eye" /></a>
aux_html: |
  <div class="smoke">
    <img src="/assets/images/smoke.gif" alt="smoke overlay" />
  </div>
page_script: |
  var user = 'igor';
  var domain = 'igorevans.com';
  var p = document.querySelector('footer p');
  if (p) {
    p.innerHTML = 'Contact: <a href="mailto:' + user + '@' + domain + '">' + user + '@' + domain + '</a>';
  }
---
