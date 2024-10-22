import NavB from "./NavB";
import Carousel from "react-bootstrap/Carousel";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <NavB></NavB>
      <div id="bgImg">
        <h1 className="first">KEEP</h1>
        <h1 className="second">YOUR</h1>
        <h1 id="pop" className="third">
          POPCORN
        </h1>
        <h1 className="fourth">READY!!!</h1>
      </div>
      <h1 className="myh1">HINDI MOVIE</h1>

      <div id="c1">
        <div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://covers.storytel.com/jpg-640/0402003170627.f237c74c-59d7-4778-a8ab-8e59a48590db?optimize=high&quality=70"
                alt="First slide"
                style={{ height: "270px", marginTop: "20px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <iframe
                className="d-block w-100"
                style={{ height: "270px", marginTop: "20px" }}
                src="https://www.youtube.com/embed/w_N6d4ec79c?si=QEfhPhnuChePOZsi"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Carousel.Item>
          </Carousel>
        </div>

        <div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://m.media-amazon.com/images/M/MV5BN2IxNDdkODgtMTA5ZS00M2MyLThkM2QtMjE4YmJlNDI2NDJiXkEyXkFqcGdeQXVyMTY1MjAwNDU0._V1_.jpg"
                alt="First slide"
                style={{ height: "270px", marginTop: "20px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <iframe
                className="d-block w-100"
                style={{ height: "270px", marginTop: "20px" }}
                src="https://www.youtube.com/embed/tF1JN2pT_sM?si=gwmPHz4wfBi-t60K"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Carousel.Item>
          </Carousel>
        </div>

        <div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://filmfare.wwmindia.com/content/2024/mar/badnewzvickytriptii21710824941.jpg"
                style={{ height: "270px", marginTop: "20px" }}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <iframe
                src="https://www.youtube.com/embed/uV50UfcIT68?si=skmIwe0xJB46Ag7r"
                style={{ width: "100%", height: "270px", marginTop: "20px" }}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* 2nd row */}
      <div id="c1">
        <div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://assets.gadgets360cdn.com/pricee/assets/product/202405/Mr_and_Mrs_Mahi_1715166390.jpg"
                alt="First slide"
                style={{ height: "270px", marginTop: "20px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <iframe
                className="d-block w-100"
                style={{ height: "270px", marginTop: "20px" }}
                src="https://www.youtube.com/embed/vB7OiVfmEDM?si=xbR8-G_l2gGecAaX"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Carousel.Item>
          </Carousel>
        </div>

        <div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ height: "270px", marginTop: "20px" }}
                src="https://cdn1.desidime.com/cdn-cgi/image/fit=crop,f=auto,onerror=redirect,w=1200,h=1200,q=90/topics/photos/1566223/original/FudCXfBaEAASTZ.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <iframe
                className="d-block w-100"
                style={{ height: "270px", marginTop: "20px" }}
                src="https://www.youtube.com/embed/Cx_Dtwn4ayw?si=hyov3Nq6C8ZAPTfQ"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Carousel.Item>
          </Carousel>
        </div>

        <div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://i.pinimg.com/originals/31/99/24/319924b3106392b3bc68cfee4e555242.png"
                style={{ height: "270px", marginTop: "20px" }}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <iframe
                className="d-block w-100"
                style={{ height: "270px", marginTop: "20px" }}
                src="https://www.youtube.com/embed/pKaTkIx3VYY?si=qlJRD_1H4A7-pOnw"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* 3rd row */}
      <h1 className="myh1">ENGLISH MOVIE</h1>
      <div id="c1">
        <div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://musicart.xboxlive.com/7/b24e6800-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
                alt="First slide"
                style={{ height: "270px", marginTop: "20px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <iframe
                className="d-block w-100"
                style={{ height: "270px", marginTop: "20px" }}
                src="https://www.youtube.com/embed/573GCxqkYEg?si=rUOZsPiak7qWObr3"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Carousel.Item>
          </Carousel>
        </div>

        <div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ height: "270px", marginTop: "20px" }}
                src="https://www.scrolldroll.com/wp-content/uploads/2023/07/The-Monkey-King-2023-Hollywood-movies-releasing-in-August-e1689664866906.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <iframe
                className="d-block w-100"
                style={{ height: "270px", marginTop: "20px" }}
                src="https://www.youtube.com/embed/0pmIANSKkdo?si=hilzRENpfot8UU3Y"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Carousel.Item>
          </Carousel>
        </div>

        <div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://m.media-amazon.com/images/M/MV5BYTgyMmUzZmItMTA5NS00NDljLTk1NDQtZTJkMWM4ZWU1YzEwXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg"
                style={{ height: "270px", marginTop: "20px" }}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <iframe
                className="d-block w-100"
                style={{ height: "270px", marginTop: "20px" }}
                src="https://www.youtube.com/embed/HK41isxFC34?si=AL8F2F5cn_SPj_fl"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* 
      4th row */}
      <div id="c1">
        <div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://upload.wikimedia.org/wikipedia/en/8/82/The_Beekeeper_poster.jpg"
                alt="First slide"
                style={{ height: "270px", marginTop: "20px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <iframe
                className="d-block w-100"
                style={{ height: "270px", marginTop: "20px" }}
                src="https://www.youtube.com/embed/56IKeT9IGi8?si=ACziiR64L5sY1DJT"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Carousel.Item>
          </Carousel>
        </div>

        <div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ height: "270px", marginTop: "20px" }}
                src="https://www.scrolldroll.com/wp-content/uploads/2023/03/shazam-hollywood-movies-releasing-in-march-2023.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <iframe
                className="d-block w-100"
                style={{ height: "270px", marginTop: "20px" }}
                src="https://www.youtube.com/embed/go6GEIrcvFY?si=ACjjJsUrLICSEV75"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Carousel.Item>
          </Carousel>
        </div>

        <div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://www.scrolldroll.com/wp-content/uploads/2023/03/scream-6-hollywood-movies-releasing-in-march-2023.jpg"
                style={{ height: "270px", marginTop: "20px" }}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <iframe
                className="d-block w-100"
                style={{ height: "270px", marginTop: "20px" }}
                src="https://www.youtube.com/embed/beToTslH17s?si=J--UZcLikhtl35A1"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* fivth row */}
      <h1 className="myh1">SOUTH MOVIE</h1>
      <div id="c1">
        <div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://im.rediff.com/movies/2023/jan/12film1.jpg"
                alt="First slide"
                style={{ height: "270px", marginTop: "20px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <iframe
                className="d-block w-100"
                style={{ height: "270px", marginTop: "20px" }}
                src="https://www.youtube.com/embed/a0Ouzf0bfpE?si=V99wrYuGAga3OAO4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Carousel.Item>
          </Carousel>
        </div>

        <div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ height: "270px", marginTop: "20px" }}
                src="https://im.rediff.com/movies/2023/jan/12film4.jpg"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <iframe
                className="d-block w-100"
                style={{ height: "270px", marginTop: "20px" }}
                src="https://www.youtube.com/embed/MWOlnZSnXJo?si=mSMv1ZUBuAITmdFq"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Carousel.Item>
          </Carousel>
        </div>

        <div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://technosports.co.in/wp-content/uploads/2024/02/adipurush_1686791721384_1686791743242-1024x575.webp"
                style={{ height: "270px", marginTop: "20px" }}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <iframe
                className="d-block w-100"
                style={{ height: "270px", marginTop: "20px" }}
                src="https://www.youtube.com/embed/scNmYjoR-qM?si=InTLZNXYZEEYMwt4"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>

      {/* sixth row */}
      <div id="c1">
        <div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://im.rediff.com/movies/2023/jan/12film3.jpg"
                alt="First slide"
                style={{ height: "270px", marginTop: "20px" }}
              />
            </Carousel.Item>
            <Carousel.Item>
              <iframe
                className="d-block w-100"
                style={{ height: "270px", marginTop: "20px" }}
                src="https://www.youtube.com/embed/-gnytBclJEU?si=KcUhDDi6O1sYfvjX"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Carousel.Item>
          </Carousel>
        </div>

        <div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ height: "270px", marginTop: "20px" }}
                src="https://indiantalents.in/wp-content/uploads/2023/07/Kushi-poster.webp"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <iframe
                className="d-block w-100"
                style={{ height: "270px", marginTop: "20px" }}
                src="https://www.youtube.com/embed/bk_5n4mS-lk?si=E7C2QqSLlifJGXz8"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Carousel.Item>
          </Carousel>
        </div>

        <div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://m.media-amazon.com/images/M/MV5BOTg4ZjNiMDItYWJlMy00OWQ2LWEwMDAtMGI5MDcyOGEwMDJiXkEyXkFqcGdeQXVyMzU0ODc1MTQ@._V1_.jpg"
                style={{ height: "270px", marginTop: "20px" }}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <iframe
                className="d-block w-100"
                style={{ height: "270px", marginTop: "20px" }}
                src="https://www.youtube.com/embed/dtdNFLECvAk?si=RY2Y-TZZ3lyPk3R6"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default Home;
