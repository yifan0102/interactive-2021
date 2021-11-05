var new_images = [
  "https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxMTM4NTIwMy9vcmlnaW5hbF9hYjFlNTIzYTFiNTg2MDBiOTIyMGU5ZTVmNzM4MDJiMS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjE4MDAsImhlaWdodCI6MTgwMCwiZml0IjoiaW5zaWRlIiwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfSwid2VicCI6eyJxdWFsaXR5Ijo5MH0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJxdWFsaXR5Ijo5MH19fQ==?bc=0",
  "https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxMTM4NTUyOS9vcmlnaW5hbF9mY2I4OTYyNWRkZTc3MzUxM2EzMGU3YjkyM2RkNzk3MS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjE4MDAsImhlaWdodCI6MTgwMCwiZml0IjoiaW5zaWRlIiwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfSwid2VicCI6eyJxdWFsaXR5Ijo5MH0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJxdWFsaXR5Ijo5MH19fQ==?bc=0",
  "https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxMTM4NTU1NS9vcmlnaW5hbF84ZTQ1YzNmNmM5ODFhYzAwMzBjZWRiODkwMDY3OWU3Ni5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjE4MDAsImhlaWdodCI6MTgwMCwiZml0IjoiaW5zaWRlIiwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfSwid2VicCI6eyJxdWFsaXR5Ijo5MH0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJxdWFsaXR5Ijo5MH19fQ==?bc=0",

  "https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxMTQ3NTQ0Ni9vcmlnaW5hbF8zZjg5MDFlMmJmYjQwMTczNzg0ZmUyOTMwZjU1NGMxNS5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjE4MDAsImhlaWdodCI6MTgwMCwiZml0IjoiaW5zaWRlIiwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfSwid2VicCI6eyJxdWFsaXR5Ijo5MH0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJxdWFsaXR5Ijo5MH19fQ==?bc=0",

  "https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxMTM4NTU0MC9vcmlnaW5hbF9hNGZhNWQxY2IyODRmNWM5ZjhiNDhlNmJiMjRjNTcyMy5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjE4MDAsImhlaWdodCI6MTgwMCwiZml0IjoiaW5zaWRlIiwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfSwid2VicCI6eyJxdWFsaXR5Ijo5MH0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJxdWFsaXR5Ijo5MH19fQ==?bc=0",

  "https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxMTM4NTU1Ny9vcmlnaW5hbF8xZjAxNzk0MWZiYzM4M2NjMjcyZmJjYTgyMjEyMDk5Yi5qcGciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjE4MDAsImhlaWdodCI6MTgwMCwiZml0IjoiaW5zaWRlIiwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfSwid2VicCI6eyJxdWFsaXR5Ijo5MH0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJxdWFsaXR5Ijo5MH19fQ==?bc=0",

  "https://scontent.fijd1-1.fna.fbcdn.net/v/t31.18172-8/16463438_10154486907899302_1373807385168917956_o.jpg?_nc_cat=102&ccb=1-3&_nc_sid=9267fe&_nc_ohc=DaEsK3zKCxsAX_SjSED&_nc_oc=AQlEWNMsfojze_iHyzzukfryvbsHVLhiAUzIPN8EVDN-VsN3sV1fIK1TBBCGE5Yjijg&_nc_ht=scontent.fijd1-1.fna&oh=6efc316c870acbf379d8c4f528953420&oe=6093D825",

  "https://az333960.vo.msecnd.net/images-4/strawberries-and-cream-raphaelle-peale-1816-2606facd.jpg",

  "https://www.passionforpaintings.com/23369/lemon-and-grapes.jpg",

  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Still_Life_Basket_of_Peaches_by_Raphaelle_Peale_1816.jpeg/760px-Still_Life_Basket_of_Peaches_by_Raphaelle_Peale_1816.jpeg",

  "https://www.passionforpaintings.com/23366/cake-and-wine.jpg",

  "https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxMTQ3NTYwNS9vcmlnaW5hbF81MjQ3MDE5YTc1MmZkZWZkNTM4M2U1OTg1MjhlYzhmMy5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjE4MDAsImhlaWdodCI6MTgwMCwiZml0IjoiaW5zaWRlIiwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfSwid2VicCI6eyJxdWFsaXR5Ijo5MH0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJxdWFsaXR5Ijo5MH19fQ==?bc=0",

  "https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxMTQ3NTYxNC9vcmlnaW5hbF85OWM0NGVmMGU1MWRhMzNhZGJhNjJkYjM2ODUyMzI5OS5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjE4MDAsImhlaWdodCI6MTgwMCwiZml0IjoiaW5zaWRlIiwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfSwid2VicCI6eyJxdWFsaXR5Ijo5MH0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJxdWFsaXR5Ijo5MH19fQ==?bc=0",

  "https://m.media-amazon.com/images/I/71xb8LZdbLL._AC_SL1108_.jpg",

  "https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxMTQ3NTg5Ni9vcmlnaW5hbF9mOGZmMDEyNWNlZjljMDgzNWE3MmQzOGQyMTYxNWQzYi5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjE4MDAsImhlaWdodCI6MTgwMCwiZml0IjoiaW5zaWRlIiwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfSwid2VicCI6eyJxdWFsaXR5Ijo5MH0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJxdWFsaXR5Ijo5MH19fQ==?bc=0",

  "https://static01.nyt.com/images/2010/12/06/arts/design/Sales/Sales-jumbo.jpg?quality=90&auto=webp",

  "https://render.fineartamerica.com/images/images-profile-flow/400/images/artworkimages/mediumlarge/3/4-strawberries-and-cream-raphaelle-peale.jpg",

  "https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxMTQ3NTk1Mi9vcmlnaW5hbF9hYjNhOWFiNThhZmFlMzNmMmY1ZjYwZDNjMTFiZTQyZi5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjE4MDAsImhlaWdodCI6MTgwMCwiZml0IjoiaW5zaWRlIiwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfSwid2VicCI6eyJxdWFsaXR5Ijo5MH0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJxdWFsaXR5Ijo5MH19fQ==?bc=0",

  "https://images.are.na/eyJidWNrZXQiOiJhcmVuYV9pbWFnZXMiLCJrZXkiOiIxMTQ3NTk3Mi9vcmlnaW5hbF8zODBiYmUyYzZiYjQ5ZDNmNjg4OGI3ZDIzYWE4MGQ2Ni5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjE4MDAsImhlaWdodCI6MTgwMCwiZml0IjoiaW5zaWRlIiwid2l0aG91dEVubGFyZ2VtZW50Ijp0cnVlfSwid2VicCI6eyJxdWFsaXR5Ijo5MH0sInJvdGF0ZSI6bnVsbCwianBlZyI6eyJxdWFsaXR5Ijo5MH19fQ==?bc=0",

  "https://upload.wikimedia.org/wikipedia/commons/6/65/Still_life_with_jug_and_fish-raphaelle_peale.JPG",

  "https://www.artrenewal.org/secureimages/artwork/336/336/29541/blackberries-large.jpg?&format=jpg&mode=max&w=999",

  "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/3-still-life-with-oranges-raphaelle-peale.jpg",

  "https://upload.wikimedia.org/wikipedia/commons/9/92/%27Orange_and_Book%27_by_Raphaelle_Peale%2C_c._1817.jpg",

  "https://indianapublicradio.org/wp-content/uploads/2017/02/1-07.jpg",

  // "http://www.artnet.com/WebServices/images/ll00124lld9UaFFgneECfDrCWvaHBOcjVF/raphaelle-peale-still-life-with-watermelon.jpg",

  "https://cdn.incollect.com/sites/default/files/zoom/Raphaelle-Peale-Still-Life-with-Melon-and-Grapes-242151-595207.jpg",

  // "http://www.artnet.com/WebServices/images/ll00124lld9UaFFgneECfDrCWvaHBOcjVF/raphaelle-peale-still-life-with-watermelon.jpg",

  "https://upload.wikimedia.org/wikipedia/commons/d/da/Raphaelle_Peale_-_Melons_and_Morning_Glories_-_Google_Art_Project.jpg",

  "https://wahooart.com/Art.nsf/O/8YE2YB/$File/Raphaelle-Peale-Still-Life-with-Watermelon.JPG",

  "https://www.passionforpaintings.com/23366/cake-and-wine.jpg",

  // "https://lh3.googleusercontent.com/proxy/Z1Sq5_yVNK5K9cvblGLyJ2SOgoziOY0V082SC-0kcsCLpYV0nNYa2gk_Qw_YQOMDKlx29nVcS_MbH2egxFJlmRj7Mk4mmxTgyAmSDvZ6y2CrxdCJ1fKBvwVQ5iQZTmMPc6HNuyjiZM8",

  "https://i.pinimg.com/originals/35/e7/75/35e775d5af5d3c992b6daa823e6ff4cb.jpg",

  "https://en.wahooart.com/Art.nsf/O/A2A35A/$File/Cristoforo_Munari-A_Still-Life_with_Melon_an_octagonal_blue_and_white_cup_on_a_Silver_Charger-S.JPG",

  "https://upload.wikimedia.org/wikipedia/commons/e/e5/Raphaelle_Peale_-_Corn_and_Cantaloupe_-_2007.223_-_Crystal_Bridges_Museum_of_American_Art.jpg",

  "https://onlinelicor.es/wp-content/uploads/2019/12/Raphaelle-Peale-1280x720.jpg",

  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Still_Life_Basket_of_Peaches_by_Raphaelle_Peale_1816.jpeg/380px-Still_Life_Basket_of_Peaches_by_Raphaelle_Peale_1816.jpeg"
];

function replace_images() {
  var existing_images = document.querySelectorAll("img");
  for (x = 0; x < existing_images.length; x++) {
    var random_index = Math.floor(Math.random() * new_images.length);
    existing_images[x].setAttribute("src", new_images[random_index]);
  }
  console.log("replaced!");
}

window.onload = function() {
  replace_images();
};

setTimeout(replace_images(), 7000);
