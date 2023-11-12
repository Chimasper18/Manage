$(".cruise").owlCarousel({
    items: 3,
    loop: true,
    autoplay: true,
    margin: 50,
    dots: true,
    arrows: true,
    nav: false,
    responsive: {
      0: {
        items: 1,
        nav: true,
        loop: true,
      },
      600: {
        items: 2,
        nav: true,
        loop: true,
      },
      900: {
          items: 3,
          nav: true,
          loop: true,
        },
    //   1200: {
    //     items: 4,
    //     nav: true,
    //     loop: true,
    //   },
    },
  });
  