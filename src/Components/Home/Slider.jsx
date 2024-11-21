import banner1 from "../../assets/banner2.jpg";
import banner2 from "../../assets/banner3.jpg"

// [550px]

const Slider = () => {
  return (
    <div data-aos="zoom-in-down" className="carousel w-full rounded-xl md:h-screen object-cover md:py-8">
  <div id="slide1" className="carousel-item relative w-full ">
  <video
      src="https://media.istockphoto.com/id/1124580988/video/sale-discount-animation.mp4?s=mp4-640x640-is&k=20&c=2zkbq3ujo3KveLEviCLhbTiIH9C7fAaCpABvuZvHoek="
      className="w-full" autoPlay muted loop />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="text-[#EEE] md:text-6xl text-2xl">❮</a>
      <a href="#slide2" className="text-[#EEE] md:text-6xl text-2xl">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={banner1}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={banner2}
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
  <img
      src="https://media.istockphoto.com/id/1980310960/vector/big-sale-banner-limited-offer-50-percents.webp?s=2048x2048&w=is&k=20&c=U2ZnOq1PeUuIHa7dVRuoXCIlYiLNCZ6h4cgn-P-kpSY="
      className="w-full"/>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  );
};

export default Slider;
