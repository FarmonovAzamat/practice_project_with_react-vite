import "./App.css";
import logo1 from "./assets/logo1.svg";
import apple from "./assets/apple.svg";
import google from "./assets/google.svg";
import phones from "./assets/phones.png";
import phone2 from "./assets/phone2.svg";
import phone3 from "./assets/phone3.svg";
import phone4 from "./assets/phone4.svg";
import woman from "./assets/woman.svg";
import woman2 from "./assets/woman2.svg";
import man from "./assets/man.svg";
import i1 from "./assets/i1.svg";
import ftIcon from "./assets/ftIcon.svg";
import facebook from "./assets/facebook.svg";
import instagram from "./assets/instagram.svg";
import twitter from "./assets/twitter.svg";

import p1 from "./assets/1.svg";
import p2 from "./assets/2.svg";
import p3 from "./assets/3.svg";
import p4 from "./assets/4.svg";
import MyBtn from "./components/MyBtn";
import MyCard from "./MyCard";

function App() {
  return (
    <div className="overflow-hidden">
      <section className="section1">
        <div className="container">
          <header className=" w-[95%] m-auto flex flex-col md:flex-row justify-between items-center ">
            <div>
              <img src={logo1} alt="" />
            </div>
            <p className="text-[white] text-[20px] font-semibold ">
              Privacy Policy
            </p>
          </header>
        </div>
        <div className="container  ">
          <main className=" w-[95%]  m-auto flex flex-col md:flex-row justify-between ">
            <div className="left flex flex-col items-center md:items-start ">
              <h1 className="text-[#FFFFFF] text-center md:text-left pt-[15%] text-[33px] md:text-[30px] tb:text-[40px] font-bold leading-[50px]">
                Why stay hungry when you can order from DialEats
              </h1>
              <p className="text-[#F6F6F6] py-[15px] opacity-[0.6] text-[24px] md:text-[18px] text-center md:text-left ">
                Download the bella onoje’s food app now on
              </p>
              <div className=" w-[100%] tb:w-[60%] pb-[30px] flex gap-[15px] text-center">
                <button>
                  <img className="" src={apple} alt="" />
                </button>
                <button>
                  <img className="" src={google} alt="" />
                </button>
              </div>
            </div>
            <div className="right pb-[10px]">
              <img src={phones} alt="" className="relative z-[10] bottom-[0]" />
            </div>
          </main>
        </div>
      </section>

      {/* section2 */}
      <section>
        <div className="container w-[95%] m-auto py-[5%]">
          <main className=" sm:grid grid-cols-2 tb:grid-cols-4 gap-[30px] ">
            <div className="py-[10px]">
              <img src={p1} alt="" />
            </div>
            <div className="py-[10px]">
              <img src={p2} alt="" />
            </div>
            <div className="py-[10px]">
              <img src={p3} alt="" />
            </div>
            <div className="py-[10px]">
              <img src={p4} alt="" />
            </div>
          </main>
        </div>
      </section>

      {/* section3 */}
      <section>
        <div className="container ">
          <main className="w-[95%] m-auto">
            <h1 className="text-[black] font-semibold text-center text-[28px] md:text-[34px]">
              How the app works
            </h1>
            <box className=" flex flex-col md:flex-row items-center justify-center">
              <div className="left m-auto">
                <img src={phone2} alt="" />
              </div>
              <div className="right w-[60%]">
                <h2 className="text-center md:text-left text-[red] text-[20px] tb:text-[24px] pb-0 md:pb-[20px]">
                  Create an account
                </h2>
                <p className=" text-center md:text-left text-[25px] tb:text-[30px] lg:text-[40px] text-[black] pb-0 md:pb-[20px] font-bold">
                  Create/login to an existing account to get started
                </p>
                <p className=" text-center md:text-left text-[18px]  tb:text-[24px] text-[#737373] pb-[10px]">
                  An account is created with your email and a desired password
                </p>
              </div>
            </box>
          </main>
        </div>
      </section>

      {/* section4 */}
      <section>
        <div className="container ">
          <main className="w-[95%] m-auto">
            <box className=" flex flex-col md:flex-row-reverse items-center justify-center">
              <div className="left m-auto">
                <img src={phone3} alt="" />
              </div>
              <div className="right w-[60%]">
                <h2 className="text-center sm:text-left text-[red] text-[20px] tb:text-[24px] pb-0 md:pb-[20px]">
                  Explore varieties
                </h2>
                <p className=" text-center sm:text-left text-[25px] tb:text-[30px] lg:text-[40px] text-[black] pb-0 md:pb-[20px] font-bold">
                  Shop for your favorites meal as e dey hot.
                </p>
                <p className=" text-center sm:text-left text-[18px] tb:text-[24px] text-[#737373] pb-[10px]">
                  Shop for your favorite meals or drinks and enjoy while doing
                  it.
                </p>
              </div>
            </box>
          </main>
        </div>
      </section>

      {/* section5 */}
      <section>
        <div className="container ">
          <main className="w-[95%] m-auto">
            <box className=" flex flex-col md:flex-row items-center justify-center">
              <div className="left m-auto">
                <img src={phone4} alt="" />
              </div>
              <div className="right w-[60%]">
                <h2 className="text-center md:text-left text-[red] text-[20px] tb:text-[24px] pb-0 md:pb-[20px]">
                  Checkout
                </h2>
                <p className=" text-center md:text-left text-[25px] tb:text-[30px] lg:text-[40px] text-[black] pb-0 md:pb-[20px] font-bold">
                  When you done check out and get it delivered.
                </p>
                <p className=" text-center md:text-left text-[18px]  tb:text-[24px] text-[#737373] pb-[10px]">
                  When you done check out and get it delivered with ease.
                </p>
              </div>
            </box>
          </main>
        </div>
      </section>

      {/* section6 */}
      <section>
        <div className="container w-[95%] m-auto">
          <main>
            <h1 className="text-[black] font-semibold text-center text-[28px] md:text-[34px] pb-[5%]">
              What others are saying
            </h1>
            <box className=" pb-[4%] flex flex-col md:flex-row justify-evenly gap-[15px]">
              {/* card1 */}
              <div className="rounded-lg shadow-2xl p-[15px]">
                <p className="text-[#737373] text-center tb:text-left text-[18px] md:text-[15px] tb:text-[18px]">
                  Completely beautiful website and amazing support! This is my
                  second website from this author and I love both of the sites
                  so much and she has helped me so well when I needed it!
                </p>
                <div className="flex flex-col items-center pt-[20px] tb:pt-[30px]">
                  <img src={woman} alt="" />
                  <h3 className="text-[red] font-bold">Happy User</h3>
                  <p>tempy.club</p>
                </div>
              </div>
              {/* card2 */}
              <div className="rounded-lg shadow-2xl p-[15px]">
                <p className="text-[#737373] text-center tb:text-left text-[18px] md:text-[15px] tb:text-[18px]">
                  Really easy to use and customize. easy to understand. Darinka
                  helped me with my site! She answers very quickly, a good
                  service! Thank you very much!
                </p>
                <div className="flex flex-col items-center pt-[20px] ">
                  <img src={man} alt="" />
                  <h3 className="text-[red] font-bold">Happy User</h3>
                  <p>tempy.club</p>
                </div>
              </div>
              {/* card3 */}
              <div className="rounded-lg shadow-2xl p-[15px]">
                <p className="text-[#737373] text-center tb:text-left text-[18px] md:text-[15px] tb:text-[18px]">
                  Really pleasing to look at! Documentation (including
                  installation instructions) are clear and that is coming from a
                  relatively new WordPress user.
                </p>
                <div className="flex flex-col items-center pt-[20px]">
                  <img src={woman2} alt="" />
                  <h3 className="text-[red] font-bold">Happy User</h3>
                  <p>tempy.club</p>
                </div>
              </div>
            </box>
          </main>
        </div>
      </section>
      {/* section8 */}
      <section className="section8 py-[10%]">
        <div className="container w-[95%] m-auto">
          <main>
            <h1 className="text-[white] font-semibold text-center text-[28px] md:text-[34px] pb-[2%]">
              Contact Us
            </h1>
            <p className="text-[#FFFFFF] text-center text-[22px] md:text-[24px] pb-[5%]">
              Available on your favorite store. Start your premium experience
              now
            </p>
            <div>
              <div className="py-[2%] flex flex-col  md:flex-row items-center justify-center gap-[3%]">
                <input
                  type="text"
                  className=" bg-[#252B4266] mb-[10px] border-2 p-2"
                  placeholder="Email"
                />
                <MyBtn
                  className="bg-[red] text-white py-2 px-5 rounded-3xl"
                  title="Contact Me"
                />
              </div>
              <div className="w-[100%] md:w-[55%] py-[2%] m-auto flex flex-col md:flex-row justify-center items-center gap-[15px] text-center">
                <button className=" w-[40%]">
                  <img className="" src={apple} alt="" />
                </button>
                <button className="w-[40%]">
                  <img className="" src={google} alt="" />
                </button>
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* section9 */}
      <section>
        <div className="container w-[95%] m-auto pb-[3%]">
          <main>
            <h1 className="text-[black] font-bold text-center text-[28px] md:text-[34px] py-[7%] ">
              FAQ
            </h1>
            <div className=" flex flex-col md:flex-row items-center gap-[30px] pb-[20px]">
              <div className="shadow-lg ">
                <MyCard
                  img={i1}
                  title="How to add a booking Source"
                  article="Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum has been 
the industry's standard dummy text ever since the 
1500s,"
                />
              </div>
              <div className="shadow-lg">
                <MyCard
                  img={i1}
                  title="Rate Plan Settings"
                  article="Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum has been 
the industry's standard dummy text ever since the 
1500s,"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-[30px]">
              <div className="shadow-lg">
                <MyCard
                  img={i1}
                  title="Ordering Food"
                  article="Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum has been 
the industry's standard dummy text ever since the 
1500s,"
                />
              </div>
              <div className="shadow-lg">
                <MyCard
                  img={i1}
                  title="Rate Plan Settings"
                  article="Lorem Ipsum is simply dummy text of the printing 
and typesetting industry. Lorem Ipsum has been 
the industry's standard dummy text ever since the 
1500s,"
                />
              </div>
            </div>
          </main>
        </div>
      </section>

      {/* footer */}
      <footer className="footer py-[3%] bg-[#252B42]">
        <div className="container w-[95%] m-auto">
          <main className=" flex flex-col md:flex-row items-center justify-between">
            <div className="pb-[10px]">
              <img src={ftIcon} alt="" />
            </div>
            <div className="pb-[10px]">
              <p className="text-[#FFFFFF] text-[14px]">Copywright 2021 Dialeats.com </p>
            </div>
            <div className="flex gap-[5px] pb-[10px]">
              <img src={facebook} alt="" />
              <img src={twitter} alt="" />
              <img src={instagram} alt="" />
            </div>
          </main>
        </div>
      </footer>
    </div>
  );
}

export default App;
