
const SliderTrue = () => {
    return (
      <div className="carousel w-full max-w-4xl mx-auto my-8 rounded-lg shadow-lg">
        {/* Slide 1 */}
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://images.pexels.com/photos/12186852/pexels-photo-12186852.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full object-cover h-64"
            alt="Rainforest Trekking"
          />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
            Rainforest Trekking
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 top-1/2 w-full px-4">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
  
        {/* Slide 2 */}
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://images.pexels.com/photos/2695232/pexels-photo-2695232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="w-full object-cover h-64"
            alt="Mountain Hiking"
          />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
            Mountain Hiking
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 top-1/2 w-full px-4">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
  
        {/* Slide 3 */}
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://cdn.pixabay.com/photo/2021/11/26/17/26/landscapre-desert-safari-6826296_640.jpg"
            className="w-full object-cover h-64"
            alt="Desert Safari"
          />
          <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2">
            Desert Safari
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 top-1/2 w-full px-4">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default SliderTrue;
  