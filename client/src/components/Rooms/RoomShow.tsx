import RoomCarousel from "./RoomCarousel";

function RoomShow() {
  return (
    <section className="md:flex justify-center mt-15 md:my-10 place-items-center">
      <div className="md:flex md:flex-col md:gap-5">
        <div className="md:flex md:justify-center">
          <RoomCarousel
            images={[
              "/images/chambres/chambre-1.webp",
              "/images/chambres/chambre-1bis.webp",
            ]}
          />
        </div>

        <div className="md:flex md:gap-5 md:justify-center flex md:mt-0 mt-5 ">
          <img
            src="/images/chambres/chambre-4.webp"
            alt="room 2"
            className=" md:mr-0 mr-5 md:w-50 w-42 object-cover rounded-2xl "
          />
          <img
            src="/images/chambres/chambre-5.webp"
            alt="room 3"
            className=" md:w-50 w-42 object-cover rounded-2xl "
          />
        </div>
      </div>
    </section>
  );
}

export default RoomShow;
